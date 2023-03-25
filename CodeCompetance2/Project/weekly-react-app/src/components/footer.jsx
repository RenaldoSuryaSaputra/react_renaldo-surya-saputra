import React from 'react'

const Footer = () => {
  return (
   <>
   <section className="footer pt-5">
     <div className="footer-content row p-5">
       <div className="col-lg-4">
         <div className="desc">
           <h3 className="web-brand">
             Renaldo<span className="text-danger">Web</span>
           </h3>
           <p>Jalan Kalurang km 4,5</p>
           <p>Sleman, Daerah Istimewa Yogyakarta</p>
           <p>Indonesia</p>
         </div>
         <div className="contact">
           <p>
             <b>Phone:</b> +62-812-9504-1613
           </p>
           <p>
             <b>Email:</b> renaldosaputra018@gmail.com
           </p>
         </div>
       </div>
       <div className="col-lg-4">
         <h3 className="content">Useful Links</h3>
         <ul className="useful-links">
           <li>
             <a href="#">Home</a>
           </li>
           <li>
             <a href="#">About Us</a>
           </li>
           <li>
             <a href="#">Forum</a>
           </li>
           <li>
             <a href="#">Terms of Service</a>
           </li>
           <li>
             <a href="#">Privacy Policy</a>
           </li>
         </ul>
       </div>
       <div className="col-lg-4">
         <h3 className="content">Our Social Networks</h3>
         <p className="net">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
           suscipit eos qui consequuntur aliquid, vero ab aliquam eius quis
           ratione?
         </p>
         <div className="social-media">
           <a
             href="https://www.linkedin.com/in/renaldo-surya-saputra-2966a225b"
             className="me-3 fs-3"
             target="_blank"
           >
             <i className="bi bi-linkedin text-white" />
           </a>
           <a
             href="https://www.facebook.com/aldo.aldi.twins?mibextid=ZbWKwL"
             className="me-3 fs-3"
             target="_blank"
           >
             <i className="bi bi-facebook text-white" />
           </a>
           <a
             href="https://instagram.com/renaldo_surya?igshid=ZDdkNTZiNTM="
             className="me-3 fs-3"
             target="_blank"
           >
             <i className="bi bi-instagram text-white" />
           </a>
           <a
             href="https://github.com/RenaldoSuryaSaputra"
             className="me-3 fs-3"
             target="_blank"
           >
             <i className="bi bi-github text-white" />
           </a>
         </div>
       </div>
     </div>
   </section>
   <section className="bottom-footer row text-center p-2">
     <p>
       © Copyright <b>Renaldo</b>. All Rights Reserved
     </p>
   </section>
 </>
 
   )
}

export default Footer