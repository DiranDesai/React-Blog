import React from "react";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-real">
      <div className="container-fluid">
        <a className="navbar-brand text-primary fs-5" href="#">
          Blogger
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Video Editing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Player
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Utility
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link">For Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Support</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
