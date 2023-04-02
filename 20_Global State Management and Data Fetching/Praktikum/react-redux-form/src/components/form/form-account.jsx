import React from 'react'
import { useForm } from "react-hook-form";

const FormCreateAccount = () => {
   const {
      register, handleSubmit, reset, formState: { errors }
   } = useForm()
   
   return (
         <>
            <div className="row col-lg-6 justify-content-center m-auto">
               <form action="">
                  <div className="row g-2 justify-content-between mb-4">
                     <h4 className="mb-3">Detail Form</h4>
                     <div className="col-md-6">
                        <label htmlFor="fname" className="form-label">
                           First name
                        </label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="fname" 
                        />
                     </div>
                     <div className="col-md-6">
                        <label htmlFor="lname" className="form-label">
                           Last name
                        </label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="lname" 
                        />
                     </div>
                  </div>
                  <div className="col-lg-12 mb-4">
                     <label htmlFor="username" className="form-label">
                        Username
                     </label>
                     <div className="input-group has-validation">
                        <span className="input-group-text bg-secondary bg-opacity-50" id="inputGroupPrepend">
                           @
                        </span>
                        <input
                           type="text"
                           className="form-control"
                           id="username"
                           aria-describedby="inputGroupPrepend"
                        />
                     </div>
                  </div>
                  <div className="col-lg-12 mb-4">
                     <label htmlFor="email" className="form-label">
                        Email
                     </label>
                     <div className="input-group has-validation">
                        <input
                           type="email"
                           className="form-control"
                           id="email"
                           aria-describedby="email"
                        />
                     </div>
                  </div>
                  <label htmlFor="">Gender</label>
                  <div className="form-check">
                     <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="male"
                     />
                     <label className="form-check-label" htmlFor="male">
                        Male
                     </label>
                  </div>
                  <div className="form-check">
                     <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="female"
                     />
                     <label className="form-check-label" htmlFor="female">
                        Female
                     </label>
                  </div>
                  <div className="form-check">
                     <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="other"
                     />
                     <label className="form-check-label" htmlFor="other">
                        Other
                     </label>
                  </div>
                  <div className="col-lg-12 mb-4">
                     <label htmlFor="address" className="form-label">
                        Address
                     </label>
                     <div className="input-group has-validation">
                        <input
                           type="text"
                           className="form-control"
                           id="address"
                           placeholder="st 1234"
                        />
                     </div>
                  </div>
                  <div className="col-lg-12 mb-4">
                     <label htmlFor="address2" className="form-label">
                        Address2 (Optional)
                     </label>
                     <div className="input-group has-validation">
                        <input
                           type="text"
                           className="form-control"
                           id="address2"
                           placeholder="Number or Block"
                        />
                     </div>
                  </div>
                  <div className="mb-4 col-lg-6">
                     <label htmlFor="nasionality" className="form-label">
                        Nasionality
                     </label>
                     <select className="form-select" id="nasionality" required="">
                        <option selected="" disable="" value="">
                           Choose...
                        </option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                     </select>
                  </div>

                  <label htmlFor="">Language Spoken</label>
                  <div className="form-check">
                     <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="bahasa"
                     />
                     <label className="form-check-label" htmlFor="bahasa">
                        Bahasa
                     </label>
                  </div>
                  <div className="form-check">
                     <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="english"
                     />
                     <label className="form-check-label" htmlFor="english">
                        English
                     </label>
                  </div>
                  <div className="form-check mb-4">
                     <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="other"
                     />
                     <label className="form-check-label" htmlFor="other">
                        Other
                     </label>
                  </div>
                  <div className="d-grid gap-2 col-8 mx-auto mb-4">
                     <button
                        className="btn btn-primary"
                        type="submit"
                     >
                        Create Account
                     </button>
                  </div>
               </form>
            </div>
            <div className="list text-center">
               <h3>List Account</h3>
            </div>
            <table className=" table table-striped">
               <thead>
                  <tr>
                     <th scope="col">No</th>
                     <th scope="col">First Name</th>
                     <th scope="col">Last Name</th>
                     <th scope="col">Username</th>
                     <th scope="col">Email</th>
                     <th scope="col">Gender</th>
                     <th scope="col">Address</th>
                     <th scope="col">Address 2</th>
                     <th scope="col">Nationality</th>
                     <th scope="col">Language</th>
                  </tr>
               </thead>
               <tbody>

               </tbody>
            </table>
         </>

   )
}

export default FormCreateAccount