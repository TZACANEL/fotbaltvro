import { useState } from "react";
import { isValidUrl } from "../utils/url";

function getAutoIconCandidates(url) {
  if (!isValidUrl(url)) return [];

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./i, "");
    const origin = `${parsed.protocol}//${parsed.host}`;

    return [
      `${origin}/favicon.ico`,
      `${origin}/favicon.png`,
      `${origin}/apple-touch-icon.png`,
      `${origin}/apple-touch-icon-precomposed.png`,
      `https://icons.duckduckgo.com/ip3/${host}.ico`,
      `https://icon.horse/icon/${host}?size=small`,
      `https://www.google.com/s2/favicons?domain=${host}&sz=64`,
      `https://www.google.com/s2/favicons?domain_url=${encodeURIComponent(url)}&sz=64`
    ];
  } catch {
    return [];
  }
}

function ChannelCard({ channel, buttonLabel, invalidUrlLabel, labels }) {
  const enabled = isValidUrl(channel.url);
  const category = channel.category || labels.fallbackCategory;
  const name = channel.name || labels.fallbackChannelName;
  const explicitIcon = typeof channel.icon === "string" ? channel.icon.trim() : "";
  const explicitUrlIcon = explicitIcon && /^(https?:\/\/|data:)/i.test(explicitIcon) ? explicitIcon : null;
  const autoIconCandidates = getAutoIconCandidates(channel.url);
  const [autoIndex, setAutoIndex] = useState(0);

  const renderIcon = () => {
    if (explicitUrlIcon) {
      return (
        <img
          src={explicitUrlIcon}
          alt=""
          width="16"
          height="16"
          style={{ display: "block", width: 16, height: 16, objectFit: "contain", borderRadius: 4 }}
        />
      );
    }

    if (!autoIconCandidates.length || autoIndex >= autoIconCandidates.length) {
      return null;
    }

    return (
      <img
        src={autoIconCandidates[autoIndex]}
        alt=""
        width="16"
        height="16"
        onError={() => {
          setAutoIndex((current) => Math.min(current + 1, autoIconCandidates.length));
        }}
        style={{ display: "block", width: 16, height: 16, objectFit: "contain", borderRadius: 4 }}
      />
    );
  };

  const iconNode = renderIcon();

  return <article className="channel-card">
    {enabled ? <a className="channel-button" href={channel.url} target="_blank" rel="noopener noreferrer" aria-label={`${buttonLabel}: ${name}, ${category}`}>
      <span className="channel-identity">{iconNode ? <span className="channel-icon" aria-hidden="true">{iconNode}</span> : null}<span className="channel-name">{name}</span><span className="sr-only"> — {category}</span></span>
      <span className="channel-arrow" aria-hidden="true">↗</span>
    </a> : <span className="channel-button channel-button--disabled" aria-disabled="true"><span className="channel-identity">{iconNode ? <span className="channel-icon" aria-hidden="true">{iconNode}</span> : null}<span className="channel-name">{name}</span></span><span>{invalidUrlLabel}</span></span>}
  </article>;
}

export default ChannelCard;
