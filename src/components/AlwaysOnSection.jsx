import ChannelCard from "./ChannelCard";

function AlwaysOnSection({ config, channels = [], buttons, labels }) {
  return <section className="content-section content-section--always" aria-labelledby="always-heading">
    <div className="section-heading"><div><h2 id="always-heading">{config.title}</h2>{config.intro && <p>{config.intro}</p>}</div><span className="channel-count" aria-label={`${channels.length} ${config.sourceCountLabel}`}>{channels.length} {config.sourceCountLabel}</span></div>
    {channels.length ? <div className="channel-grid channel-grid--always">{channels.map((channel) => <ChannelCard key={channel.id} channel={channel} buttonLabel={buttons.sourceLabel} invalidUrlLabel={buttons.invalidUrlLabel} labels={labels} />)}</div> : <p className="empty-state">{config.emptyMessage}</p>}
  </section>;
}

export default AlwaysOnSection;
