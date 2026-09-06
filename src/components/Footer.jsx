function Footer({ site }) {
  return <footer className="site-footer"><div><span className="footer-brand">{site.title}</span><span>© {site.footerYear}</span></div><p>{site.footerText}</p></footer>;
}

export default Footer;
