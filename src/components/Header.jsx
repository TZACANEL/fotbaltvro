import logo from "../assets/fotbal-tvro-logo.png";

function Header({ site }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label={`${site.title} - începutul paginii`}>
          <img className="brand-logo" src={logo} alt="" />
          <span>{site.title}</span>
        </a>
        {site.headerNote && <span className="header-note">{site.headerNote}</span>}
      </div>
    </header>
  );
}

export default Header;
