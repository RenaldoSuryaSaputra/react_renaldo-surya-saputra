import React from 'react'

const Navbar = () => {
   return (
      <>
         <nav
            id="navbar"
            className="navbar navbar-expand-lg bg-body-tertiary navbar-dark">

            <div className="container-fluid ">
               <a
                  href="#"
                  className="navbar-brand fs-3 fw-bold text-white fst-italic me-lg-5">
                  Renaldo<span className="text-danger">Web</span>
               </a>
               <button
                  className="navbar-toggler border border-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon" />
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                           Home
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#about">
                           About
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">
                           Forum
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#contact">
                           Contact Us
                        </a>
                     </li>
                  </ul>
                  <form className="d-flex" role="search">
                     <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                     />
                     <button
                        id="btn-search"
                        className="btn btn-outline-light btn-danger text-white "
                        type="submit"
                     >
                        Search
                     </button>
                  </form>
               </div>
            </div>
         </nav>
      </>
   )
}

export default Navbar