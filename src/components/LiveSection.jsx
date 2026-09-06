import ChannelCard from "./ChannelCard";

function LiveSection({ config, channels = [], buttons, labels }) {
  const listedChannels = channels.slice(0, config.displayedSourceCount);
  return <section className="content-section" id="top" aria-labelledby="live-heading">
    <div className="section-heading"><div><h1 id="live-heading">{config.title}</h1>{config.intro && <p>{config.intro}</p>}</div><span className="channel-count" aria-label={`${listedChannels.length} ${config.sourceCountLabel}`}>{listedChannels.length} {config.sourceCountLabel}</span></div>
    {listedChannels.length ? <div className="channel-grid">{listedChannels.map((channel) => <ChannelCard key={channel.id} channel={channel} buttonLabel={buttons.sourceLabel} invalidUrlLabel={buttons.invalidUrlLabel} labels={labels} />)}</div> : <p className="empty-state">{config.emptyMessage}</p>}
  </section>;
}

export default LiveSection;
