import "./styles.css";

export function Header() {
  return (
    <header className="hero">
      <div className="hero-container">
        <h3 className="logo">
          <a
            href="https://bharati-portfolio.netlify.app"
            className="link"
            target="_blank"
          >
            Bharati
          </a>
        </h3>
        <nav className="navlinks">
          <ul>
            <li>
              <a
                href="https://github.com/bharati-21"
                className="link"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/_girlwhocodes"
                className="link"
                target="_blank"
              >
                Twitter
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
