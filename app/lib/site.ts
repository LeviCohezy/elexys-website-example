/** Site-wide facts taken from www.elexys.be (see content/scraped/). */

export const contact = {
  company: "Elexys NV",
  street: "Kleine Tapuitstraat 188",
  city: "8540 Deerlijk",
  phone: "+32 56 36 44 80",
  phoneHref: "tel:+3256364480",
  email: "info@elexys.be",
  vat: "BE 0824.304.218",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Kleine+Tapuitstraat+188+8540+Deerlijk",
  portal: "https://portal.elexys.be/",
};

export const mainNav = [
  { label: "Oplossingen", href: "/oplossingen" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Blog", href: "/blog" },
  { label: "Insights", href: "/insights" },
  { label: "FAQ", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = [
  {
    title: "Energie",
    links: [
      { label: "Oplossingen", href: "/oplossingen" },
      { label: "Energie verkopen", href: "/energie-verkopen" },
      { label: "Insights", href: "/insights" },
      { label: "Market updates", href: "/market-updates" },
    ],
  },
  {
    title: "Elexys",
    links: [
      { label: "Over ons", href: "/over-ons" },
      { label: "Blog", href: "/blog" },
      { label: "Vacatures", href: "/jobs" },
      { label: "Nieuwsbrief", href: "/insights/newsletter" },
    ],
  },
  {
    title: "Hulp",
    links: [
      { label: "FAQ", href: "/faqs" },
      { label: "Contact", href: "/contact" },
      { label: "my elexys", href: contact.portal },
    ],
  },
];

export const legalNav = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Algemene voorwaarden", href: "/algemene-voorwaarden-2.1" },
  { label: "Cookiebeleid", href: "/cookiebeleid" },
];
