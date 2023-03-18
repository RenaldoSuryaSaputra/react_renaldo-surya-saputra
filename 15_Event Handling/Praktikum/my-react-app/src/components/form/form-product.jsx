import React, { useState } from 'react';


const FormCreateProduct = () => {
   const styles = {
      border: '1px solid red'
   }
   
   const [productName, setProductName] = useState("")
   const [productCategory, setProductCategory] = useState("")
   const [productImage, setProductImages] = useState("")
   const [productFreshness, setProductFreshness] = useState("")
   const [productDescription, setProductDescription] = useState("")
   const [productPrice, setProductPrice] = useState(0)
   const [errorMessage, setErrorMessage] = useState({})


   function handleChange(e) {
      e.preventDefault()

      console.log(`category`, productCategory)
      const errorMessage = {}
      if (productName.length > 10) {
         errorMessage.productName = "Product Name tidak boleh melebihi 10 karakter";
         console.log(errorMessage.productName)
      } else if (productName === "") {
         errorMessage.productName = "Product Name perlu diisi";
      } else if (productCategory === "") {
         errorMessage.productCategory = "Product Category perlu diisi";
      } else if (productImage === "") {
         errorMessage.productImage = "Product Image perlu diisi";
      } else if (productFreshness === "") {
         errorMessage.productFreshness = "Product Freshness perlu diisi";
      } else if (productDescription === "") {
         errorMessage.productDescription = "Product Description perlu diisi";
      } else if (productPrice === "") {
         errorMessage.productCategory = "Product Price perlu diisi";
      }

      if (Object.keys(errorMessage).length > 0) {
         setErrorMessage(errorMessage);
         console.log(errorMessage)
      } else {
         console.log("submited");
      }
      

   }

   return (
      <div>
         <div className="row justify-content-center mt-4">
            <div className=" col-md-9 col-lg-6">
               <h4 className="mb-3">Detail Product</h4>

               <form id="form" onChange={handleChange}>
                  <div className="mb-3 col-lg-6">
                     <label htmlFor="name" className="form-label">
                        Product Name
                     </label>
                     <input
                        type="text"
                        className="form-control"
                        style={errorMessage.productName && styles}
                        id="name"
                        defaultValue={productName}
                        onChange={(event) => setProductName(event.target.value)}
                     />
                     <div className="error-message" style={{'color':'red'}}>{errorMessage.productName ? errorMessage.productName : ""}</div>
                  </div>

                  <div className="mb-3 col-lg-4">
                     <label htmlFor="category" className="form-label">
                        Product Category
                     </label>
                     <select id="category"
                     className="form-select"
                      value={productCategory} 
                      style={errorMessage.productCategory && styles} 
                      onChange={(event) => {{
                        setProductCategory(event.target.value)
                     }}}>
                        <option value="">Choose..</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                     </select>
                     <div className="error-message" style={{'color':'red'}}>{errorMessage.productCategory ? errorMessage.productCategory : ""}</div>
                  </div>

                  <div className="mb-4 col-lg-5">
                     <label htmlFor="image" className="form-label">
                        Image of Product
                     </label>
                     <input 
                        className="form-control"
                        style={errorMessage.productImage && styles}
                        type="file"
                        id="image"
                        defaultValue={productImage}
                        onChange={(event) => setProductImages(event.target.value)}
                     />
                     <div className="error-message" style={{'color':'red'}}>{errorMessage.productImage ? errorMessage.productImage : ""}</div>
                  </div>

                  <div className="mb-4 col-lg-5">
                     <label>Product Freshness</label>
                     <div className="form-check">
                        <input
                           className="form-check-input"
                           style={errorMessage.productFreshness && styles}
                           type="radio"
                           name="freshness"
                           id="brandNew"
                           defaultValue="Brand New"
                        />
                        <label className="form-check-label" htmlFor="brandNew">
                           Brand New
                        </label>
                     </div>
                     <div className="form-check">
                        <input
                           className="form-check-input"
                           type="radio"
                           name="freshness"
                           id="secondHand"
                           defaultValue="Secondhand"
                        />
                        <label className="form-check-label" htmlFor="secondHand">
                           Second Hand
                        </label>
                     </div>
                     <div className="form-check">
                        <input
                           className="form-check-input"
                           type="radio"
                           name="freshness"
                           id="refurbished"
                           defaultValue="Refurbished"
                        />
                        <label className="form-check-label" htmlFor="refurbished">
                           Refurbished
                        </label>
                     </div>
                  </div>

                  <div className="mb-4">
                     <label htmlFor="message" className="form-label">
                        Additional Description{" "}
                     </label>
                     <textarea
                        className="form-control"
                        style={errorMessage.productDescription && styles}
                        id="message"
                        rows={5}
                        defaultValue={productDescription}
                        onChange={(event) => setProductDescription(event.target.value)}
                     />
                     <div className="error-message" style={{'color':'red'}}>{errorMessage.productDescription ? errorMessage.productDescription : ""}</div>
                  </div>
                  <div className="mb-4">
                     <label htmlFor="price" className="form-label">
                        Product Price
                     </label>
                     <input
                        type="number"
                        className="form-control"
                        style={errorMessage.productPrice && styles}
                        id="price"
                        placeholder="$1"
                        defaultValue={productPrice}
                        onChange={(event) => setProductPrice(event.target.value)}
                     />
                     <div className="error-message" style={{'color':'red'}}>{errorMessage.productPrice ? errorMessage.productPrice : ""}</div>
                  </div>
                  <div className="d-grid gap-2 col-8 mx-auto mb-4">
                     <button className="btn btn-primary" type="submit">
                        Submit
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}

export default FormCreateProduct