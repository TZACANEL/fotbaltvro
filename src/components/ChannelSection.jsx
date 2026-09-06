import ChannelCard from "./ChannelCard";

function ChannelSection({ config, channels = [], buttons, labels, id, headingLevel, sectionClassName = "", gridClassName = "", limit }) {
  const listedChannels = typeof limit === "number" ? channels.slice(0, limit) : channels;
  const Heading = headingLevel;

  return <section className={`content-section ${sectionClassName}`.trim()} id={id} aria-labelledby={`${id}-heading`}>
    <div className="section-heading"><div><Heading id={`${id}-heading`}>{config.title}</Heading>{config.intro && <p>{config.intro}</p>}</div><span className="channel-count" aria-label={`${listedChannels.length} ${config.sourceCountLabel}`}>{listedChannels.length} {config.sourceCountLabel}</span></div>
    {listedChannels.length ? <div className={`channel-grid ${gridClassName}`.trim()}>{listedChannels.map((channel) => <ChannelCard key={channel.id} channel={channel} buttonLabel={buttons.sourceLabel} invalidUrlLabel={buttons.invalidUrlLabel} labels={labels} />)}</div> : <p className="empty-state">{config.emptyMessage}</p>}
  </section>;
}

export default ChannelSection;