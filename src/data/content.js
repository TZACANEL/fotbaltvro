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
    footerText: ""
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
    displayedSourceCount: 7,
    sourceCountLabel: "surse",
    emptyMessage: "Momentan nu sunt surse de afișat. Revino puțin mai târziu."
  },

  alwaysOnSection: {
    title: "Alte surse",
    intro: "",
    sourceCountLabel: "surse",
    emptyMessage: "Momentan nu sunt alte surse configurate."
  },

  liveChannels: [
    { id: "arena", name: "Streamed", category: "Sport", url: "https://streamed.pk/" },
    { id: "stage", icon: "✦", name: "BuffStreams", category: "Muzică", url: "https://buffsports.io/watch-soccer" },
    { id: "field", icon: "△", name: "Streamest", category: "Documentar", url: "https://v2.streameast.ga/soccer-streams/" },
    { id: "motion", icon: "↗", name: "SuperStrim", category: "Cultură", url: "https://superstrim.pages.dev/sports/football" },
    { id: "coast", icon: "≈", name: "StreamSport99", category: "Relaxare", url: "https://streamsports99.website/" },
    { id: "signal", icon: "⌁", name: "RosieStream", category: "Tehnologie", url: "https://roxiestreams.info/" },
    { id: "fantastic-soda", icon: "⌁", name: "Fantastic Soda", category: "Tehnologie", url: "https://fantasticsoda.com/#/live" },
  ],

  alwaysOnChannels: [
    { id: "archive", icon: "▣", name: "SportOnlineG", category: "General", url: "https://sportsonline.st/prog.txt" },
    { id: "night", icon: "☾", name: "LiveTVSX", category: "Ambient", url: "https://livetv.sx/enx/" },
    { id: "studio", icon: "✺", name: "VenueVault", category: "Creativ", url: "https://venuevault.live" },
    { id: "studio", icon: "✺", name: "ReedStreams", category: "Creativ", url: "https://reedstreams.link/" },
    { id: "studio", icon: "✺", name: "FutbolX", category: "Creativ", url: "https://www.futbol-x.xyz" }
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
          { label: "Lista streamuri ACE Player", url: "https://search-ace.stream/" }
        ] }
      ]
    },
    {
      id: "misc",
      title: "Diverse",
      groups: [
        { title: "", links: [
          { label: "Reluare meci", url: "https://www.footreplays.com/" },
          { label: "Rezumat meci", url: "https://hoofoot.com/" },
          { label: "Arhiva meciuri", url: "https://footballia.net/" },
          { label: "Posturi românești", url: "https://rds.live/categorie/tv-sport/" },
          { label: "Posturi străine", url: "https://tvfreedom.surge.sh" },
          { label: "Formula 1", url: "https://rerace.net/" }
        ] }
      ]
    }
  ]
};