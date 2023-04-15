import React from 'react'

const ProductCard = (props) => {
   return (
      <div>
         <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="Product Image" />
            <div className="card-body">
               <h5 className="card-title">{props.name}</h5>
               <p className="card-text">
                  {props.description}
               </p>
               <p>${props.price}</p>
               <button onClick={props.onDeleteItem} className='btn btn-danger m-2'>
                  Delete
               </button>
               <button onClick={props.onEditItem} className='btn btn-success m-2'>
                  Edit
               </button>
            </div>
         </div>

      </div>
   )
}

export default ProductCard