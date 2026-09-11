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
        { category: "DESKTOP", label: "UBLOCK ORIGIN LITE", icon: "https://raw.githubusercontent.com/gorhill/uBlock/master/src/img/ublock.svg", url: "https://chromewebstore.google.com/detail/ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh" },
        { category: "MOBIL", label: "BROWSER BRAVE", icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Brave_icon_lionface.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original", url: "https://play.google.com/store/apps/details?id=com.brave.browser" },
        { category: "ANDROID TV", label: "BROWSER HERE", icon: "https://browsehere.net/favicon.svg", url: "https://play.google.com/store/apps/details?id=com.tcl.browser" },
        { label: "BROWSER APP", icon: "https://play-lh.googleusercontent.com/nOtiyjVc4iZH-vVunOsxnqaavudpjE8zQL69BIn5Hn4eAdUhsYpIfGk-K4pbgX1q_D3llTs7H7XrZsDvgxLUbg=w240-h480-rw", url: "https://play.google.com/store/apps/details?id=com.internet.tvbrowser" }
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
    { name: "Streamed", url: "https://streamed.pk/" },
    { name: "BuffStreams", url: "https://buffsports.io/watch-soccer" },
    { name: "Streamest", url: "https://v2.streameast.ga/soccer-streams/" },
    { name: "SuperStrim", url: "https://superstrim.pages.dev/sports/football" },
    { name: "StreamSport99", url: "https://streamsports99.website/" },
    { name: "RosieStream", url: "https://roxiestreams.info/" },
    { name: "Fantastic Soda", url: "https://fantasticsoda.com/#/live" },
  ],

  alwaysOnChannels: [
    { name: "SportOnlineG", url: "https://sportsonline.st/prog.txt" },
    { name: "LiveTVSX", url: "https://livetv.sx/enx/" },
    { name: "VenueVault", url: "https://venuevault.live" },
    { name: "ReedStreams", url: "https://reedstreams.link/" },
    { name: "FutbolX", url: "https://www.futbol-x.xyz" }
  ],

  resourceSections: [
    {
      id: "platforms",
      title: "Alte platforme",
      groups: [
        { title: "Android TV", icon: "https://cdn-icons-png.flaticon.com/512/174/174836.png", links: [{ label: "PlayTorrio (4054777)", url: "https://playtorrio.pages.dev/#download" }] },
        { title: "Windows", icon: "https://cdn-icons-png.flaticon.com/512/220/220215.png", links: [
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