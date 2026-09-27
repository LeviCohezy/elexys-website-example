# Scrape van www.elexys.be (NL)

Gescraped op 2026-09-27 met `scripts/scrape_elexys.py` (sitemap.xml + interne links). Eén Markdown-bestand per pagina; bovenaan staan URL, titel, meta description, H1 en notities.

## Navigatiestructuur

- **Hoofdmenu:** [Oplossingen](https://www.elexys.be/oplossingen), [Over ons](https://www.elexys.be/over-ons), [Blog](https://www.elexys.be/blog), [Market updates](https://www.elexys.be/market-updates), [FAQ](https://www.elexys.be/faqs), [Nieuwsbrief](https://www.elexys.be/insights/newsletter), [Contact](https://www.elexys.be/contact)
- **Secundair menu:** [Vacatures](https://www.elexys.be/jobs), [my elexys](https://portal.elexys.be/), [insights](https://www.elexys.be/insights)
- **Footer:** [Over ons](https://www.elexys.be/over-ons), [Blog](https://www.elexys.be/blog), [Contact](https://www.elexys.be/contact), [Vacatures](https://www.elexys.be/jobs)
- **Onderaan pagina:** [Privacy Policy](https://www.elexys.be/privacy-policy), [Algemene voorwaarden](https://www.elexys.be/algemene-voorwaarden-2.1), [Cookiebeleid](https://www.elexys.be/cookiebeleid)
- **Talen:** nl (standaard), [fr](https://www.elexys.be/fr), [en](https://www.elexys.be/en) — enkel NL is gescraped.

## Opmerkingen

- **Oplossingen** (`/oplossingen`) is een JavaScript-wizard (type energie → verbruik → resultaten). De producten zelf staan als losse pagina's onder `/product/*` en zijn kort: enkel een lijst kenmerken.
- **Energie verkopen** (`/energie-verkopen`) bevat alleen een gesloten formulier ("This form is closed to new submissions").
- **Cases** (`/cases/*`, 3 pagina's in de sitemap) geven HTTP 403 — vermoedelijk niet gepubliceerd. Niet gescraped.
- **Insights**: de prijstabellen staan in de HTML (momentopname; de laatste Belpex-rij is van 01/01/2026). De grafieken worden met JavaScript (canvas) getekend. De PDF/XLSX-exports zijn overgeslagen.
- **Market updates**: de pagina linkt naar maandelijkse PDF's op elexys.be; de PDF's zelf zijn niet gedownload.
- **Formulieren** (contact, nieuwsbrief, spontane sollicitatie) zijn Drupal webforms; enkel de veldlabels staan in de Markdown.
- **Juridische pagina's** (privacy policy, cookiebeleid, algemene voorwaarden) zijn integraal meegenomen maar als juridisch gemarkeerd.
- Afbeeldingen verwijzen naar hun originele URL op elexys.be.

## Pagina's (9)

| Bestand | Titel | Woorden |
| --- | --- | ---: |
| [contact.md](contact.md) | Contacteer ons | 224 |
| [energie-verkopen.md](energie-verkopen.md) | Energie verkopen | 13 |
| [faqs.md](faqs.md) | Veelgestelde vragen over energie voor bedrijven | 2556 |
| [index.md](index.md) | Elektriciteit en aardgas voor bedrijven | 625 |
| [jobs.md](jobs.md) | Werken bij Elexys? Dat wekt vonken! | 334 |
| [market-updates.md](market-updates.md) | Uw maandelijkse marktupdates | 318 |
| [oplossingen.md](oplossingen.md) | Ontdek onze oplossingen | 78 |
| [over-ons.md](over-ons.md) | Energieleverancier voor bedrijven | 478 |
| [vacatures__spontane-sollicitatie.md](vacatures__spontane-sollicitatie.md) | Spontane sollicitatie | 199 |

## Producten (14)

| Bestand | Titel | Woorden |
| --- | --- | ---: |
| [product__belclickx.md](product__belclickx.md) | Belclickx | 35 |
| [product__belex.md](product__belex.md) | Belex | 29 |
| [product__belex-injection.md](product__belex-injection.md) | Belex Injection | 13 |
| [product__belix.md](product__belix.md) | Belix | 32 |
| [product__belix-injection.md](product__belix-injection.md) | Belix Injection | 14 |
| [product__clickx.md](product__clickx.md) | CLICKX | 26 |
| [product__clickx-injection.md](product__clickx-injection.md) | Clickx Injection | 17 |
| [product__fix.md](product__fix.md) | FIX | 13 |
| [product__fix-injection.md](product__fix-injection.md) | Fix Injection | 7 |
| [product__gasfix.md](product__gasfix.md) | GasFix | 3 |
| [product__gasflex.md](product__gasflex.md) | GasFlex | 18 |
| [product__produxion-injectie.md](product__produxion-injectie.md) | Produxion (injectie) | 13 |
| [product__safe.md](product__safe.md) | SAFE | 29 |
| [product__safe-x-gas.md](product__safe-x-gas.md) | SAFE-X (gas) | 23 |

## Insights (10)

| Bestand | Titel | Woorden |
| --- | --- | ---: |
| [insights.md](insights.md) | Insights: Marktinformatie | 752 |
| [insights__eex-ttf-gas-spot.md](insights__eex-ttf-gas-spot.md) | EEX TTF Gas Spot | 455 |
| [insights__eex-ztp-gas-spot.md](insights__eex-ztp-gas-spot.md) | EEX ZTP Gas Spot | 455 |
| [insights__ice-endex-belgian-power-base.md](insights__ice-endex-belgian-power-base.md) | Ice Endex Belgian Power Base | 521 |
| [insights__ice-endex-dutch-natural-gas-forward.md](insights__ice-endex-dutch-natural-gas-forward.md) | Ice Endex Dutch Natural Gas Forward | 548 |
| [insights__newsletter.md](insights__newsletter.md) | Nieuwsbrief | 178 |
| [insights__quarter-hourly-belpex-day-ahead-spot-be.md](insights__quarter-hourly-belpex-day-ahead-spot-be.md) | Quarter hourly Belpex (day-ahead spot BE) | 772 |
| [insights__solar-imbalance.md](insights__solar-imbalance.md) | Solar Imbalance | 693 |
| [insights__spot-belix.md](insights__spot-belix.md) | Spot Belix | 462 |
| [insights__spot-belpex.md](insights__spot-belpex.md) | Spot Belpex | 635 |

## Blog (30)

| Bestand | Titel | Woorden |
| --- | --- | ---: |
| [blog.md](blog.md) | Nieuw in de energiewereld | 944 |
| [blog__alle-zaken-op-een-rijtje-zet-elexys-in-de-spotlight.md](blog__alle-zaken-op-een-rijtje-zet-elexys-in-de-spotlight.md) | Alle Zaken Op Een Rijtje zet Elexys in de spotlight | 89 |
| [blog__condensatorbatterijen-en-hun-terugverdientijd.md](blog__condensatorbatterijen-en-hun-terugverdientijd.md) | Condensatorbatterijen en hun terugverdientijd | 738 |
| [blog__condensatorbatterijen-en-pv-panelen.md](blog__condensatorbatterijen-en-pv-panelen.md) | Condensatorbatterijen en PV panelen | 327 |
| [blog__de-details-van-uw-elektriciteitsfactuur-begrijpen.md](blog__de-details-van-uw-elektriciteitsfactuur-begrijpen.md) | De details van uw elektriciteitsfactuur begrijpen | 1095 |
| [blog__de-energiemarkt-in-beweging.md](blog__de-energiemarkt-in-beweging.md) | De energiemarkt in beweging | 793 |
| [blog__de-mogelijke-impact-van-de-mig60-transitie-op-de-marktspelers.md](blog__de-mogelijke-impact-van-de-mig60-transitie-op-de-marktspelers.md) | De mogelijke impact van de MIG6.0 transitie op de marktspelers | 356 |
| [blog__de-revival-van-de-vermogen-term-in-de-energiecontracten.md](blog__de-revival-van-de-vermogen-term-in-de-energiecontracten.md) | De revival van de vermogen-term in de energiecontracten | 1547 |
| [blog__de-transitie-naar-elektrische-mobiliteit.md](blog__de-transitie-naar-elektrische-mobiliteit.md) | De transitie naar elektrische mobiliteit | 1435 |
| [blog__energie-in-beweging-waarom-prijsstrategie-opnieuw-centraal-staat-richting-winter.md](blog__energie-in-beweging-waarom-prijsstrategie-opnieuw-centraal-staat-richting-winter.md) | Energie in beweging: waarom prijsstrategie opnieuw centraal staat richting winter | 874 |
| [blog__energieaudit-voor-kmos-verplicht-vanaf-2022.md](blog__energieaudit-voor-kmos-verplicht-vanaf-2022.md) | Energieaudit voor kmo’s verplicht vanaf 2022 | 404 |
| [blog__energiepremies-in-2021.md](blog__energiepremies-in-2021.md) | Energiepremies in 2021 | 447 |
| [blog__evolutie-van-de-elia-onbalanskosten-en-de-impact-op-het-financieel-rendement-van-een-pv.md](blog__evolutie-van-de-elia-onbalanskosten-en-de-impact-op-het-financieel-rendement-van-een-pv.md) | Evolutie van de ELIA onbalanskosten en de impact op het financieel rendement van een PV installatie | 805 |
| [blog__hebt-u-recht-op-korting-via-uw-nace-code.md](blog__hebt-u-recht-op-korting-via-uw-nace-code.md) | Hebt u recht op korting via uw Nace-code? | 192 |
| [blog__het-nieuwe-capaciteitstarief-dat-de-vreg-goedkeurde-treedt-in-werking-op-1012023.md](blog__het-nieuwe-capaciteitstarief-dat-de-vreg-goedkeurde-treedt-in-werking-op-1012023.md) | Het nieuwe capaciteitstarief dat de VREG goedkeurde treedt in werking op 1/01/2023. | 786 |
| [blog__hoe-energiecontracten-vergelijken.md](blog__hoe-energiecontracten-vergelijken.md) | Hoe energiecontracten vergelijken? | 715 |
| [blog__hoofdkantoor-verhuist-naar-deerlijk.md](blog__hoofdkantoor-verhuist-naar-deerlijk.md) | Hoofdkantoor verhuist naar Deerlijk | 321 |
| [blog__korting-voor-land-en-tuinbouwers-via-douane-en-accijnzen.md](blog__korting-voor-land-en-tuinbouwers-via-douane-en-accijnzen.md) | Korting voor land- en tuinbouwers via douane en accijnzen | 172 |
| [blog__nieuwe-energieheffing-in-vlaams-gewest-vervangt-turteltaks.md](blog__nieuwe-energieheffing-in-vlaams-gewest-vervangt-turteltaks.md) | Nieuwe energieheffing in Vlaams Gewest vervangt Turteltaks | 230 |
| [blog__nieuwe-tarieven-voor-transport-en-distributiekosten-federale-bijdrage.md](blog__nieuwe-tarieven-voor-transport-en-distributiekosten-federale-bijdrage.md) | Nieuwe tarieven voor transport- en distributiekosten & federale bijdrage | 427 |
| [blog__periode-van-evangelisatie-is-voorbij.md](blog__periode-van-evangelisatie-is-voorbij.md) | "Periode van evangelisatie is voorbij" | 582 |
| [blog__steeds-meer-extreme-spotprijzen-in-2026.md](blog__steeds-meer-extreme-spotprijzen-in-2026.md) | Steeds meer extreme spotprijzen in 2026 | 641 |
| [blog__sturing-wat-is-het-en-wat-zijn-de-voordelen.md](blog__sturing-wat-is-het-en-wat-zijn-de-voordelen.md) | Sturing: Wat is het en wat zijn de voordelen? | 616 |
| [blog__stuur-vanaf-nu-uw-assets-via-elexys.md](blog__stuur-vanaf-nu-uw-assets-via-elexys.md) | Stuur vanaf nu uw assets via Elexys | 452 |
| [blog__terugblik-op-de-evolutie-van-de-energieprijzen.md](blog__terugblik-op-de-evolutie-van-de-energieprijzen.md) | Terugblik op de evolutie van de energieprijzen | 911 |
| [blog__uitrol-digitale-meters-vanaf-1-juli.md](blog__uitrol-digitale-meters-vanaf-1-juli.md) | Uitrol digitale meters vanaf 1 juli | 632 |
| [blog__wanneer-moet-je-als-bedrijf-een-energieplan-uitvoeren.md](blog__wanneer-moet-je-als-bedrijf-een-energieplan-uitvoeren.md) | Wanneer moet je als bedrijf een energieplan uitvoeren? | 360 |
| [blog__we-schakelen-om-van-arm-naar-rijk-aardgas.md](blog__we-schakelen-om-van-arm-naar-rijk-aardgas.md) | We schakelen om van arm naar rijk aardgas | 369 |
| [blog__wijzigingen-in-2017.md](blog__wijzigingen-in-2017.md) | Wijzigingen in 2017 | 208 |
| [blog__wijzigingen-in-kosten-en-bijdragen.md](blog__wijzigingen-in-kosten-en-bijdragen.md) | Wijzigingen in kosten en bijdragen | 191 |

## Juridisch (3)

| Bestand | Titel | Woorden |
| --- | --- | ---: |
| [algemene-voorwaarden-2.1.md](algemene-voorwaarden-2.1.md) | Algemene voorwaarden v2.1 NL | 6417 |
| [cookiebeleid.md](cookiebeleid.md) | Cookiebeleid | 424 |
| [privacy-policy.md](privacy-policy.md) | Privacy Policy | 2452 |
