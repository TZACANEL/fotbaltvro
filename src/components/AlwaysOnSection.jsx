import ChannelSection from "./ChannelSection";

function AlwaysOnSection({ config, channels = [], buttons, labels }) {
  return <ChannelSection config={config} channels={channels} buttons={buttons} labels={labels} id="always" headingLevel="h2" sectionClassName="content-section--always" gridClassName="channel-grid--always" />;
}

export default AlwaysOnSection;
