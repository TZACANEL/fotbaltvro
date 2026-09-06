function InfoBanner({ banners }) {
  if (!banners?.length) return null;
  return <section className="info-grid" aria-label="Informații generale">
    {banners.map((banner) => <article className="info-banner" key={banner.id}>
      <p className="eyebrow">{banner.eyebrow}</p><h2>{banner.title}</h2>
      {banner.links?.length ? <nav className="source-links" aria-label={banner.title}>
        {banner.links.map((link) => <span className="source-link-wrap" key={link.label}>
          {link.prefix && <span className="source-prefix">{link.prefix}</span>}
          {link.category && <span className="source-category">{link.category}</span>}
          <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}<span aria-hidden="true">↗</span></a>
        </span>)}
      </nav> : banner.text && <p>{banner.text}</p>}
    </article>)}
  </section>;
}

export default InfoBanner;
