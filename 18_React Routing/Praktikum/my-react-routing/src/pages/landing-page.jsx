import React from 'react';
import '../css/landing-page.css'
import Hero from '../img/hero-img.png'

const LandingPage = () => {
   return (
      <>
         <div className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
               <div className="container">
                  <a className="navbar-brand" href="#">
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
                              href="#"
                           >
                              Home
                           </a>
                        </li>
                        <li className="nav-item m-1">
                           <a className="nav-link text-primary" href="#">
                              Features
                           </a>
                        </li>
                        <li className="nav-item m-1">
                           <a className="nav-link text-primary" href="#">
                              Pricing
                           </a>
                        </li>
                        <li className="nav-item m-1">
                           <a className="nav-link text-primary" href="#">
                              FAQs
                           </a>
                        </li>
                        <li className="nav-item m-1">
                           <a className="nav-link text-primary" href="#">
                              About
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
         </div>
         <div className="main row p-5">
            <div id="description" className="col-lg-5 m-auto">
               <h1 id="moto" className="text-white ">
                  Better Solution For Your Business
               </h1>
               <p className="text-white fs-5">
                  We are team of talented designers making website with Bootstrap
               </p>
               <div>
                  <button
                     id="active-btn"
                     type="button"
                     className="btn btn-primary rounded-5 px-4 me-4"
                  >
                     Get Started
                  </button>
                  <button type="button" className="btn text-white">
                     Watch Video
                  </button>
               </div>
            </div>
            <img
               className="hero-img col-lg-6 w-50"
               src={Hero}
               alt="Hero Images"
            />
         </div>
         <div className="join text-center py-5">
            <h2>Join Our Newletter</h2>
            <form>
               <div className="col-lg-6 m-auto">
                  <label className="pb-3">
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit
                  </label>
                  <input
                     type="text"
                     className="form-control mb-4"
                     id="exampleInputEmail1"
                     aria-describedby="email"
                  />
                  <button type="button" className="btn btn-primary text-white rounded-5">
                     Subscribe
                  </button>
               </div>
            </form>
         </div>
         <section className="footer pt-5">
            <div className="footer-content row p-5">
               <div className="col-lg-3">
                  <div className="desc">
                     <h3 className="web-brand text-uppercase fw-bold">arsha</h3>
                     <p>A108 Adam Street</p>
                     <p>New York, NY 535421</p>
                     <p>United States</p>
                  </div>
                  <div className="contact">
                     <p>
                        <b>Phone:</b> +1 1234 32453 22
                     </p>
                     <p>
                        <b>Email:</b> info@example.com
                     </p>
                  </div>
               </div>
               <div className="col-lg-3">
                  <h3 className="content">Useful Links</h3>
                  <ul className="useful-links">
                     <li>
                        <a href="#">Home</a>
                     </li>
                     <li>
                        <a href="#">About Us</a>
                     </li>
                     <li>
                        <a href="#">Services</a>
                     </li>
                     <li>
                        <a href="#">Terms of Service</a>
                     </li>
                     <li>
                        <a href="#">Privacy Policy</a>
                     </li>
                  </ul>
               </div>
               <div className="col-lg-3">
                  <h3 className="content">Our Services</h3>
                  <ul className="our-services">
                     <li>
                        <a href="#">Web Design</a>
                     </li>
                     <li>
                        <a href="#">Web Development</a>
                     </li>
                     <li>
                        <a href="#">Product Management</a>
                     </li>
                     <li>
                        <a href="#">Marketing</a>
                     </li>
                     <li>
                        <a href="#">Graphic Design</a>
                     </li>
                  </ul>
               </div>
               <div className="col-lg-3">
                  <h3 className="content">Our Social Networks</h3>
                  <p className="net">
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
                     suscipit eos qui consequuntur aliquid, vero ab aliquam eius quis
                     ratione?
                  </p>
                  <div className="circle" />
                  <div className="circle" />
                  <div className="circle" />
                  <div className="circle" />
               </div>
            </div>
         </section>
         <footer className="bottom-footer row text-center p-2">
            <p>
               © Copyright <b>Arsha</b>. All Rights Reserved
            </p>
            <p>
               Designed by <a href="https://getbootstrap.com/">BootstrapMade</a>
            </p>
         </footer>
      </>

   );
}

export default LandingPage;