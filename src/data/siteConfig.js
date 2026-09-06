/**
 * Punctul unic de configurare al aplicației.
 * Schimbă aici textele, culorile, secțiunile, canalele și linkurile.
 */
export const siteConfig = {
  site: {
    title: "Fotbal TVRO",
    description: "Un spațiu simplu pentru canale demonstrative, organizate clar.",
    headerNote: "",
    footerYear: 2026,
    footerText: "Conținut demonstrativ, creat pentru o experiență liniștită și ușor de adaptat."
  },

  colors: {
    background: "#141420",
    surface: "#1c1c2c",
    surfaceRaised: "#292a40",
    border: "#34354c",
    text: "#f3f2ff",
    mutedText: "#aaaac1",
    accent: "#ff6da8",
    accentSoft: "#ffbdd8",
    buttonText: "#171422"
  },

  sections: {
    showInfoBanners: true,
    showLiveNow: true,
    showAlwaysOn: true
  },

  buttons: {
    sourceLabel: "Deschide sursa",
    invalidUrlLabel: "Link indisponibil"
  },

  fallbacks: {
    category: "General",
    channelName: "Sursă fără nume"
  },

  infoBanners: [
    {
      id: "ad-blocking",
      eyebrow: "BUN VENIT",
      title: "PENTRU BLOCAREA RECLAMELOR RECOMAND",
      links: [
        { category: "DESKTOP", label: "UBLOCK ORIGIN LITE", url: "https://chromewebstore.google.com/detail/ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh" },
        { category: "MOBIL", label: "BROWSER BRAVE", url: "https://play.google.com/store/apps/details?id=com.brave.browser" },
        { category: "ANDROID TV", label: "BROWSER HERE", url: "https://play.google.com/store/apps/details?id=com.tcl.browser" },
        { label: "BROWSER APP", url: "https://play.google.com/store/apps/details?id=com.internet.tvbrowser" }
      ]
    }
  ],

  liveSection: {
    title: "Recomandate",
    intro: "",
    displayedSourceCount: 6,
    sourceCountLabel: "surse disponibile",
    emptyMessage: "Momentan nu sunt surse de afișat. Revino puțin mai târziu."
  },

  alwaysOnSection: {
    title: "Alte surse",
    intro: "",
    sourceCountLabel: "surse disponibile",
    emptyMessage: "Momentan nu sunt alte surse configurate."
  },

  liveChannels: [
    { id: "arena", icon: "◉", name: "Arena Nord", category: "Sport", url: "https://example.com/demo/arena-nord" },
    { id: "stage", icon: "✦", name: "Stage One", category: "Muzică", url: "https://example.com/demo/stage-one" },
    { id: "field", icon: "△", name: "Field Report", category: "Documentar", url: "https://example.com/demo/field-report" },
    { id: "motion", icon: "↗", name: "Motion Lab", category: "Cultură", url: "https://example.com/demo/motion-lab" },
    { id: "coast", icon: "≈", name: "Coastline", category: "Relaxare", url: "https://example.com/demo/coastline" },
    { id: "signal", icon: "⌁", name: "Signal 06", category: "Tehnologie", url: "https://example.com/demo/signal-06" }
  ],

  alwaysOnChannels: [
    { id: "archive", icon: "▣", name: "Archive Room", category: "General", url: "https://example.com/demo/archive-room" },
    { id: "night", icon: "☾", name: "Night Radio", category: "Ambient", url: "https://example.com/demo/night-radio" },
    { id: "studio", icon: "✺", name: "Studio Loop", category: "Creativ", url: "https://example.com/demo/studio-loop" }
  ],

  resourceSections: [
    {
      id: "platforms",
      title: "Alte platforme",
      groups: [
        { title: "Android TV", links: [{ label: "PlayTorrio (4054777)", url: "https://playtorrio.pages.dev/#download" }] },
        { title: "Windows", links: [
          { label: "PlayTorrio", url: "https://playtorrio.pages.dev/#download" },
          { label: "Ace Player", url: "https://www.acestream.org/?page=products" },
          { label: "Lista streamuri", url: "#" }
        ] }
      ]
    },
    {
      id: "misc",
      title: "Diverse",
      groups: [
        { title: "Resurse", links: [
          { label: "Reluare meci", url: "#" },
          { label: "Rezumat meci", url: "#" },
          { label: "Arhiva meciuri", url: "#" },
          { label: "Posturi românești", url: "#" },
          { label: "Posturi străine", url: "#" },
          { label: "Formula 1", url: "#" }
        ] }
      ]
    }
  ]
};
