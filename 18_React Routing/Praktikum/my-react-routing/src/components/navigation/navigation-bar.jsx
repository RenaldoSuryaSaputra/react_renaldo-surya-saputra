import React from "react";
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
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
                <Link to="/"
                  className="nav-link text-primary"
                  aria-current="page"
                  href="index.html"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item m-1">
                <Link to="/product" className="nav-link text-primary" href="index.html">
                  Product
                </Link>
              </li>
              <li className="nav-item m-1">
                <a className="nav-link text-primary" href="index.html">
                  Account
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
      <main className="container-fluid">
        <Outlet />
      </main>
    </>

  );
};

export default Navbar;
