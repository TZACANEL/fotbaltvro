/**
 * FIȘIERUL PRINCIPAL PENTRU CONȚINUT.
 * Modifică aici textele, linkurile, canalele și setările site-ului.
 */
export const siteConfig = {
  site: {
    title: "Fotbal TVRO",
    description: "Un spațiu simplu pentru canale demonstrative, organizate clar.",
    headerNote: "",
    homeUrl: "#top",
    homeAriaLabelSuffix: "începutul paginii",
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

  labels: {
    generalInfo: "Informații generale",
    sourceLabel: "Deschide sursa",
    invalidUrlLabel: "Link indisponibil",
    fallbackCategory: "General",
    fallbackChannelName: "Sursă fără nume"
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
    { id: "arena", icon: "◉", name: "Streamed", category: "Sport", url: "https://streamed.pk/" },
    { id: "stage", icon: "✦", name: "BuffStreams", category: "Muzică", url: "https://buffsports.io/watch-soccer" },
    { id: "field", icon: "△", name: "Streamest", category: "Documentar", url: "https://v2.streameast.ga/soccer-streams/" },
    { id: "motion", icon: "↗", name: "SuperStrim", category: "Cultură", url: "https://superstrim.pages.dev/sports/football" },
    { id: "coast", icon: "≈", name: "StreamSport99", category: "Relaxare", url: "https://streamsports99.website/" },
    { id: "signal", icon: "⌁", name: "RosieStream", category: "Tehnologie", url: "https://roxiestreams.info/" },
    { id: "signal", icon: "⌁", name: "Fantastic Soda", category: "Tehnologie", url: "https://fantasticsoda.com/#/live" },
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