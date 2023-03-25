import React from 'react'
import AboutPict from "../img/about.jpg";

const About = () => {
   return (
      <>
         <div id="about" className="container-fluid text-center p-5">
            <div className="row">
               <div className="col mb-4">
                  <h2>About Us</h2>
               </div>
            </div>
            <img className='rounded mx-auto d-block mb-lg-5' src={AboutPict} width={600} alt="about picture" />
            <div className="row justify-content-center fs-4">
               <div className="col-md-5 mb-4 me-3">
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                     dolores accusamus sequi magnam culpa a placeat nemo excepturi?
                     Tenetur, quis?
                  </p>
               </div>
               <div className="col-md-5 mb-4 ms-3">
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                     saepe eius magnam tempora reprehenderit provident aliquam natus vero
                     adipisci corporis. Hic, aliquam est corporis modi ipsum ea incidunt
                     tempore repudiandae.
                  </p>
               </div>
            </div>
         </div>
      </>

   )
}

export default About