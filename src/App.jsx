import Header from "./components/Header";
import InfoBanner from "./components/InfoBanner";
import LiveSection from "./components/LiveSection";
import AlwaysOnSection from "./components/AlwaysOnSection";
import Footer from "./components/Footer";
import ResourceSection from "./components/ResourceSection";
import { siteConfig } from "./data/siteConfig";

function App() {
  const colorVariables = Object.fromEntries(
    Object.entries(siteConfig.colors).map(([key, value]) => [`--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`, value])
  );

  document.title = siteConfig.site.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", siteConfig.site.description);

  return (
    <div className="app-shell" style={colorVariables}>
      <Header site={siteConfig.site} />
      <main className="page-content">
        {siteConfig.sections.showInfoBanners && <InfoBanner banners={siteConfig.infoBanners} />}
        {siteConfig.sections.showLiveNow && <LiveSection config={siteConfig.liveSection} channels={siteConfig.liveChannels} buttons={siteConfig.buttons} labels={siteConfig.fallbacks} />}
        {siteConfig.sections.showAlwaysOn && <AlwaysOnSection config={siteConfig.alwaysOnSection} channels={siteConfig.alwaysOnChannels} buttons={siteConfig.buttons} labels={siteConfig.fallbacks} />}
        {siteConfig.resourceSections.map((section) => <ResourceSection key={section.id} section={section} />)}
      </main>
      <Footer site={siteConfig.site} />
    </div>
  );
}

export default App;
