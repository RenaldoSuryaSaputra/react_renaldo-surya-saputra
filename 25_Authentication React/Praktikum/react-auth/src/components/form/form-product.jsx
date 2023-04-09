import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid';
import productFetch from '../hooks/useFetch'

const FormCreateProduct = () => {
   const { products, addNewProduct, removeProduct, updateProduct } = productFetch()
   const [productName, setProductName] = useState("");
   const {
      register, handleSubmit, reset, formState: { errors }
   } = useForm()

   const onSubmit = async (data) => {

      const id = nanoid()
      const name = data.name
      const category = data.category
      const image = URL.createObjectURL(data.image[0])
      const freshness = data.freshness
      const description = data.description
      const price = data.price

      await addNewProduct({ id, name, category, image, freshness, description, price })
      alert("data berhasil di tambahkan")
      reset()
   };

   const handleDeleteClick = async (id) => {
      if (confirm("Ingin hapus data ?")) {
         await removeProduct(id)
         alert(`Data dengan ID ${id} berhasil dihapus`)
      } else {
         return;
      }
   };


   return (
      <div>
         <div className="row justify-content-center mt-4">
            <div className=" col-md-9 col-lg-6">
               <h4 className="mb-3">Detail Product</h4>

               <form id="form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3 col-lg-6">
                     <label htmlFor="name" className="form-label">
                        Product Name
                     </label>
                     <input
                        {...register("name", {
                           required: "This input is required.",
                           pattern: {
                              value: /^[a-zA-Z0-9 ]*$/,
                              message: "This input is cannot contain symbols."
                           },
                           maxLength: {
                              value: 25,
                              message: "This input must not exceed 25 characters"
                           }
                        })}
                        type="text"
                        className="form-control"
                        id='name'
                        onChange={(event) => {
                           setProductName(event.target.value);
                        }}
                     />
                     {errors.name && <p className='error'> {errors?.name?.message} </p>}
                  </div>

                  <div className="mb-3 col-lg-4">
                     <label htmlFor="category" className="form-label">
                        Product Category
                     </label>
                     <select
                        {...register("category", {
                           required: "This input is required.",
                        })}
                        id="category"
                        className="form-select">
                        <option value="">Choose..</option>
                        <option value="optionOne">One</option>
                        <option value="optionTwo">Two</option>
                        <option value="other">Other</option>
                     </select>
                     {errors.category && <p className='error'> {errors?.category?.message} </p>}
                  </div>

                  <div className="mb-4 col-lg-5">
                     <label htmlFor="image" className="form-label">
                        Image of Product
                     </label>
                     <input
                        {...register("image", {
                           required: "Please select an image to upload",
                           maxSize: {
                              value: 2000000, message: "File size exceeds 2 MB"
                           }
                        })}
                        accept="image/*"
                        type="file"
                        className="form-control"
                        id="image"
                     />
                     {errors.image && <p className='error'> {errors?.image?.message} </p>}
                  </div>

                  <div className="mb-4 col-lg-5">
                     <label>Product Freshness</label>
                     <div className="form-check">
                        <label className="form-check-label" htmlFor="brandNew">
                           <input
                              {...register('freshness', { required: "Tell us about product freshness" })}
                              className="form-check-input"
                              type="radio"
                              name="freshness"
                              id="brandNew"
                              defaultValue="Brand New"
                           />
                           Brand New
                        </label>
                     </div>

                     <div className="form-check">
                        <label className="form-check-label" htmlFor="secondHand">
                           <input
                              {...register('freshness', { required: "Tell us about product freshness" })}
                              className="form-check-input"
                              type="radio"
                              name="freshness"
                              id="secondHand"
                              defaultValue="Secondhand"
                           />
                           Second Hand
                        </label>
                     </div>

                     <div className="form-check">
                        <label className="form-check-label" htmlFor="refurbished">
                           <input
                              {...register('freshness', { required: "Tell us about product freshness" })}
                              className="form-check-input"
                              type="radio"
                              name="freshness"
                              id="refurbished"
                              defaultValue="Refurbished"
                           />
                           Refurbished
                        </label>
                     </div>
                     {errors.freshness && <p className='error'> {errors?.freshness?.message} </p>}
                  </div>

                  <div className="mb-4">
                     <label htmlFor="message" className="form-label">
                        Additional Description{" "}
                     </label>
                     <textarea
                        {...register('description', {
                           required: "Tell us about product description",
                           maxLength: {
                              value: 200,
                              message: "This input must not exceed 200 characters"
                           }
                        })}
                        className="form-control"
                        id="message"
                        rows={5}
                     />
                     {errors.description && <p className='error'> {errors?.description?.message} </p>}
                  </div>

                  <div className="mb-4">
                     <label htmlFor="price" className="form-label">
                        Product Price
                     </label>
                     <input
                        {...register("price", {
                           required: "This input is required.",
                           pattern: {
                              value: /^[1-9]+\d*(?:\.\d+)?$/,
                              message: "Product price cannot start with 0"
                           }
                        })}
                        type="number"
                        className="form-control"
                        id="price"
                     />
                     {errors.price && <p className='error'> {errors?.price?.message} </p>}
                  </div>

                  <div className="d-grid gap-2 col-8 mx-auto mb-4">
                     <button className="btn btn-primary" type="submit">
                        Submit
                     </button>
                  </div>
               </form>
            </div>
         </div>
         <div className="list text-center">
            <h3>List product</h3>
         </div>
         <table id="table" className="table table-striped border border-1">
            <thead>
               <tr>
                  <th scope="col">No</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Product Category</th>
                  <th scope="col">Product Image</th>
                  <th scope="col">Product Freshness</th>
                  <th scope="col">Product Price</th>
                  <th scope="col">Action</th>
               </tr>
            </thead>
            <tbody>
               {products?.map((row, index) => (
                  <tr key={index}>
                     <td>{row.uuid}</td>
                     <td>{row.productName}</td>
                     <td>{row.productCategory}</td>
                     <td><img src={row.productImage} height="50" /></td>
                     <td>{row.productFreshness}</td>
                     <td>{row.productPrice}</td>
                     <td>
                        <button className='btn btn-danger' onClick={() => handleDeleteClick(row.id)}>Delete</button>
                        <button className='btn btn-success' onClick={() => {
                           updateProduct({ id: row.id, name: productName })

                        }}>
                           Edit
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}

export default FormCreateProduct