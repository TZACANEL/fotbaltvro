import { useState } from "react";
import { isValidUrl } from "../utils/url";

function getChannelIconCandidates(channel) {
  if (typeof channel.icon === "string" && /^(https?:\/\/|data:)/i.test(channel.icon)) {
    return [channel.icon];
  }

  if (typeof channel.icon === "string" && !/^(https?:\/\/|data:)/i.test(channel.icon)) {
    return [channel.icon];
  }

  if (isValidUrl(channel.url)) {
    try {
      const url = new URL(channel.url);
      const host = url.hostname.replace(/^www\./i, "");
      const origin = `${url.protocol}//${url.host}`;

      return [
        `${origin}/favicon.ico`,
        `${origin}/favicon.png`,
        `${origin}/apple-touch-icon.png`,
        `${origin}/apple-touch-icon-precomposed.png`,
        `https://www.google.com/s2/favicons?domain_url=${encodeURIComponent(channel.url)}&sz=64`,
        `https://www.google.com/s2/favicons?domain=${host}&sz=64`,
        `https://icon.horse/icon/${host}?size=small`,
        `https://icons.duckduckgo.com/ip3/${host}.ico`
      ];
    } catch {
      // ignore invalid URL parsing and fall through
    }
  }

  return [];
}

function ChannelCard({ channel, buttonLabel, invalidUrlLabel, labels }) {
  const enabled = isValidUrl(channel.url);
  const category = channel.category || labels.fallbackCategory;
  const name = channel.name || labels.fallbackChannelName;
  const iconCandidates = getChannelIconCandidates(channel);
  const [iconIndex, setIconIndex] = useState(0);
  const resolvedIcon = iconIndex < iconCandidates.length ? iconCandidates[iconIndex] : null;
  const iconLooksLikeUrl = typeof resolvedIcon === "string" && /^(https?:\/\/|data:)/i.test(resolvedIcon);
  const isEmojiFallback = typeof channel.icon === "string" && !/^(https?:\/\/|data:)/i.test(channel.icon);

  const renderIcon = () => {
    if (resolvedIcon === null) return null;
    if (iconLooksLikeUrl) {
      return <img
        src={resolvedIcon}
        alt=""
        width="16"
        height="16"
        onError={() => {
          setIconIndex((current) => (current + 1 >= iconCandidates.length ? iconCandidates.length : current + 1));
        }}
        style={{ display: "block", width: 16, height: 16, objectFit: "contain", borderRadius: 4 }}
      />;
    }
    return resolvedIcon;
  };

  return <article className="channel-card">
    {enabled ? <a className="channel-button" href={channel.url} target="_blank" rel="noopener noreferrer" aria-label={`${buttonLabel}: ${name}, ${category}`}>
      <span className="channel-identity">{renderIcon() ? <span className="channel-icon" aria-hidden="true">{renderIcon()}</span> : null}<span className="channel-name">{name}</span><span className="sr-only"> — {category}</span></span>
      <span className="channel-arrow" aria-hidden="true">↗</span>
    </a> : <span className="channel-button channel-button--disabled" aria-disabled="true"><span className="channel-identity">{renderIcon() ? <span className="channel-icon" aria-hidden="true">{renderIcon()}</span> : null}<span className="channel-name">{name}</span></span><span>{invalidUrlLabel}</span></span>}
  </article>;
}

export default ChannelCard;
