import React, { useRef, useState } from 'react'

function ContactUs() {
   const DATA = {
      name: "",
      email: "",
      address: "",
      phone: "",
      message: "",
   };

   const [values, setValues] = useState(DATA)

   const nameRef = useRef()
   const emailRef = useRef()
   const addressRef = useRef()
   const phoneRef = useRef()
   const messageRef = useRef()

   const handleChange = (event) => {

      const name = event.target.name
      const value = event.target.value
      console.log("NAME", name)

      setValues({
         ...values,
         [name]: value,
      });
      console.log("VALUES", values)
   };

   const handleSubmit = (event) => {
      console.log("Submit", values)
      event.preventDefault();
      if (values.name === "") {
         nameRef.current.focus();
         nameRef.current.style.border = "2px solid red";
         alert("Mohon isi kolom nama");

      } else if (values.email === "") {
         emailRef.current.focus();
         emailRef.current.style.border = "2px solid red";
         alert("Mohon isi kolom email");

      } else if (values.address === "") {
         addressRef.current.focus();
         addressRef.current.style.border = "2px solid red";
         alert("Mohon isi kolom address");

      } else if (values.phone === "" || values.phone == undefined) {
         phoneRef.current.focus();
         phoneRef.current.style.border = "2px solid red";
         alert("Mohon isi kolom phone");

      } else if (values.message === "") {
         messageRef.current.focus();
         messageRef.current.style.border = "2px solid red";
         alert("Mohon isi kolom message");
      } else {
         console.log(values)
         alert(`Data baru dengan rincian :
              name: ${values.name} 
              Alamat: ${values.address}
              Email: ${values.email}
              Nomor Hp: ${values.phone}
              Message: ${values.message}
              Berhasil ditambahkan
              `);
      }
   };



   return (
      <>
         <div id="contact" className="contact container-fluid p-5">
            <div className="row pt-4 mb-4">
               <div className="col text-center">
                  <h2 className="fs-1">Contact</h2>
               </div>
            </div>
            <div className="row justify-content-center align-items-center">
               <div className="col-lg-4 me-5">
                  <div className="border-primary text-center text-white">
                     <h5 className="fw-bold fs-3">Contact Our</h5>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium, amet harum aliquam ex voluptatum voluptatibus impedit
                        exercitationem consequatur doloremque. Et.
                     </p>
                  </div>
               </div>
               <div className="col-lg-6">
                  <form onSubmit={handleSubmit} id="form" action="">
                     <div className="form-group mb-3">
                        <label htmlFor="name">Name</label>
                        <input
                           type="text"
                           className="form-control"
                           id="name"
                           name="name"
                           ref={nameRef}
                           values={values.name}
                           onChange={handleChange}

                        />

                     </div>
                     <div className="form-group mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                           type="text"
                           className="form-control"
                           id="email"
                           name="email"
                           ref={emailRef}
                           values={values.email}
                           onChange={handleChange}

                        />
                     </div>
                     <div className="form-group mb-3">
                        <label htmlFor="address">Address</label>
                        <input
                           type="text"
                           className="form-control"
                           id="address"
                           name="address"
                           ref={addressRef}
                           values={values.address}
                           onChange={handleChange}

                        />
                     </div>
                     <div className="form-group mb-3">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                           type="text"
                           className="form-control"
                           id="phone"
                           name="phone"
                           ref={phoneRef}
                           values={values.phone}
                           onChange={handleChange}
                        />
                     </div>
                     <div className="form-group mb-3">
                        <label htmlFor="message">Message</label>
                        <textarea
                           className="form-control"
                           id="message"
                           name="message"
                           ref={messageRef}
                           values={values.message}
                           onChange={handleChange}

                        />
                     </div>
                     <div className="form-group mb-3">
                        <button name="submit" type="submit" className="btn btn-danger">
                           Submit
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </>
   )
}

export default ContactUs