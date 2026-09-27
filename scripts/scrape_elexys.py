"""Scrape www.elexys.be (NL) into content/scraped/*.md, one file per page."""
import json, re, sys, time, urllib.request
from collections import deque
from urllib.parse import urljoin, urlparse, urldefrag
from bs4 import BeautifulSoup
from markdownify import markdownify as md

BASE = "https://www.elexys.be"
OUT = "/Users/levisoubry/Projects/elexys-website-example/content/scraped"
S = "."  # folder containing urls.txt (sitemap URLs); scrape.json is written here
UA = "Mozilla/5.0 (Macintosh) ElexysSiteRebuild/1.0"
LEGAL = ("/privacy-policy", "/cookiebeleid", "/algemene-voorwaarden")
SKIP_PREFIX = ("/user", "/admin", "/search", "/node", "/core", "/sites/", "/media/", "/insights/export/")
SKIP_EXT = re.compile(r"\.(pdf|jpe?g|png|gif|svg|webp|zip|docx?|xlsx?|mp4)$", re.I)


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=45) as r:
        return r.status, r.geturl(), r.read().decode("utf-8", "replace")


def norm(href, page):
    if not href or href.startswith(("mailto:", "tel:", "javascript:")):
        return None
    u = urldefrag(urljoin(page, href))[0]
    p = urlparse(u)
    if p.netloc not in ("www.elexys.be", "elexys.be") or p.query:
        return None
    path = p.path.rstrip("/") or "/"
    first = "/" + path.strip("/").split("/")[0]
    if first in ("/fr", "/en") or path.startswith(SKIP_PREFIX) or SKIP_EXT.search(path):
        return None
    return BASE + ("" if path == "/" else path)


def slug(url):
    path = urlparse(url).path.strip("/")
    return "index" if not path else path.replace("/", "__")


def to_markdown(node, page):
    for t in node.find_all(["script", "style", "noscript", "svg", "iframe", "button"]):
        t.decompose()
    for a in node.find_all("a", href=True):
        a["href"] = urljoin(page, a["href"])
    for img in node.find_all("img", src=True):
        img["src"] = urljoin(page, img["src"])
    text = md(str(node), heading_style="ATX", bullets="-", strip=["span", "div"])
    text = re.sub(r"[ \t]+\n", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def main():
    seeds = [l.strip() for l in open(f"{S}/urls.txt") if l.strip()]
    seeds = [norm(u, BASE) for u in seeds] + [BASE + "/oplossingen", BASE + "/algemene-voorwaarden-2.1"]
    queue, seen, pages, nav = deque(dict.fromkeys(filter(None, seeds))), set(), [], None
    in_sitemap = set(filter(None, (norm(u, BASE) for u in open(f"{S}/urls.txt").read().split())))

    while queue:
        url = queue.popleft()
        if url in seen:
            continue
        seen.add(url)
        try:
            try:
                status, final, html = fetch(url)
            except TimeoutError:
                status, final, html = fetch(url)
        except Exception as e:  # noqa: BLE001
            pages.append({"url": url, "error": str(e)})
            print("ERR", url, e, file=sys.stderr)
            continue
        time.sleep(0.4)
        soup = BeautifulSoup(html, "html.parser")

        if nav is None:
            nav = {}
            for n in soup.find_all("nav"):
                nav[n.get("id") or "nav"] = [
                    {"label": a.get_text(" ", strip=True), "href": urljoin(BASE, a["href"])}
                    for a in n.find_all("a", href=True)
                ]

        for a in soup.find_all("a", href=True):
            n = norm(a["href"], final)
            if n and n not in seen:
                queue.append(n)

        title = soup.title.get_text(strip=True) if soup.title else ""
        desc = soup.find("meta", attrs={"name": "description"})
        desc = desc.get("content", "").strip() if desc else ""
        canon = soup.find("link", rel="canonical")
        canon = canon.get("href") if canon else ""
        h1 = soup.find("h1")
        h1 = h1.get_text(" ", strip=True) if h1 else ""
        main_el = soup.find("main") or soup.body
        if main_el is None:
            pages.append({"url": final, "error": "no HTML body"})
            print("SKIP (no body)", final, file=sys.stderr)
            continue
        for skip in main_el.select("a.visually-hidden, .hidden"):
            skip.decompose()
        body = to_markdown(main_el, final)
        words = len(re.findall(r"\w+", body))
        path = urlparse(final).path or "/"
        notes = []
        if path.startswith(LEGAL):
            notes.append("legal page")
        if words < 60:
            notes.append("very little server-rendered text (may rely on JS or be a stub)")
        if soup.find("form") and "webform" in html:
            notes.append("contains a form")
        if url not in in_sitemap:
            notes.append("not in sitemap.xml (found via links)")
        if canon and canon.rstrip("/") != final.rstrip("/"):
            notes.append(f"canonical points elsewhere: {canon}")

        rec = {"url": final, "slug": slug(final), "status": status, "title": title,
               "description": desc, "h1": h1, "words": words, "notes": notes}
        pages.append(rec)
        front = "\n".join([
            "---",
            f"url: {final}",
            f"title: {json.dumps(title, ensure_ascii=False)}",
            f"description: {json.dumps(desc, ensure_ascii=False)}",
            f"h1: {json.dumps(h1, ensure_ascii=False)}",
            f"scraped: {time.strftime('%Y-%m-%d')}",
            f"notes: {json.dumps(notes, ensure_ascii=False)}",
            "---",
        ])
        with open(f"{OUT}/{rec['slug']}.md", "w") as f:
            f.write(f"{front}\n\n<!-- Source: {final} -->\n\n{body}\n")
        print(f"{status} {words:5d}w {final}")

    json.dump({"nav": nav, "pages": pages}, open(f"{S}/scrape.json", "w"), ensure_ascii=False, indent=1)


if __name__ == "__main__":
    main()
