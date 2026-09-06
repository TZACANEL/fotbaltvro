import ChannelSection from "./ChannelSection";

function LiveSection({ config, channels = [], buttons, labels }) {
  return <ChannelSection config={config} channels={channels} buttons={buttons} labels={labels} id="top" headingLevel="h1" limit={config.displayedSourceCount} />;
}

export default LiveSection;
