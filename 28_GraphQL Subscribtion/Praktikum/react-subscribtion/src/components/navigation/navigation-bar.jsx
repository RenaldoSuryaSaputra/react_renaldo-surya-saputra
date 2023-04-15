import React from "react";
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleOnLogout = () => {
    logout()
    navigate('/')
  }
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
                >
                  Home
                </Link>
              </li>

              <li className="nav-item m-1">
                <Link
                  to="/product"
                  className="nav-link text-primary"
                >
                  Product
                </Link>
              </li>
              <li className="nav-item m-1">
                <Link
                  to="/account"
                  className="nav-link text-primary"
                >
                  Account
                </Link>
              </li>
              <li className="nav-item m-1">
                <Link className="nav-link text-primary" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item m-1">
                <button className="btn btn-secondary" onClick={handleOnLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
