import { isValidUrl } from "../utils/url";

function ResourceSection({ section }) {
  return <section className="content-section resource-section" aria-labelledby={`${section.id}-heading`}>
    <h2 id={`${section.id}-heading`}>{section.title}</h2>
    <div className="resource-groups">
      {section.groups.map((group) => <div className="resource-group" key={group.title}>
        <span className="resource-group-title">{group.title}</span>
        <div className="resource-buttons">
          {group.links.map((link) => isValidUrl(link.url)
            ? <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}<span aria-hidden="true">↗</span></a>
            : <span className="resource-button--disabled" key={link.label} aria-disabled="true">{link.label}</span>
          )}
        </div>
      </div>)}
    </div>
  </section>;
}

export default ResourceSection;
