function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          Simple header
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item m-1">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="index.html"
              >
                Home
              </a>
            </li>
            <li className="nav-item m-1">
              <a className="nav-link text-primary" href="index.html">
                Features
              </a>
            </li>
            <li className="nav-item m-1">
              <a className="nav-link text-primary" href="index.html">
                Pricing
              </a>
            </li>
            <li className="nav-item m-1">
              <a className="nav-link text-primary" href="index.html">
                FAQs
              </a>
            </li>
            <li className="nav-item m-1">
              <a className="nav-link text-primary" href="index.html">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
