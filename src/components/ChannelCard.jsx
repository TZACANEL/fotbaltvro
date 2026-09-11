import { isValidUrl } from "../utils/url";

function ChannelCard({ channel, buttonLabel, invalidUrlLabel, labels }) {
  const enabled = isValidUrl(channel.url);
  const category = channel.category || labels.fallbackCategory;
  const name = channel.name || labels.fallbackChannelName;
  const iconLooksLikeUrl = typeof channel.icon === "string" && /^(https?:\/\/|data:)/i.test(channel.icon);

  const renderIcon = () => {
    if (!channel.icon) return "◌";
    if (iconLooksLikeUrl) {
      return <img
        src={channel.icon}
        alt=""
        width="16"
        height="16"
        style={{ display: "block", width: 16, height: 16, objectFit: "contain", borderRadius: 4 }}
      />;
    }
    return channel.icon;
  };

  return <article className="channel-card">
    {enabled ? <a className="channel-button" href={channel.url} target="_blank" rel="noopener noreferrer" aria-label={`${buttonLabel}: ${name}, ${category}`}>
      <span className="channel-identity"><span className="channel-icon" aria-hidden="true">{renderIcon()}</span><span className="channel-name">{name}</span><span className="sr-only"> — {category}</span></span>
      <span className="channel-arrow" aria-hidden="true">↗</span>
    </a> : <span className="channel-button channel-button--disabled" aria-disabled="true"><span className="channel-identity"><span className="channel-icon" aria-hidden="true">{renderIcon()}</span><span className="channel-name">{name}</span></span><span>{invalidUrlLabel}</span></span>}
  </article>;
}

export default ChannelCard;
