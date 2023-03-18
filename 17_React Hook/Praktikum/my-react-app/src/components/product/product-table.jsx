import React, { useState } from 'react';


function ListProduct({list}) {
  const newProductList = [...list];

  const handleDeleteClick = (id) => {
    console.log(list)
    console.log("new Product List", newProductList)
    const index = newProductList.findIndex((product) => product.id === id);
    newProductList.splice(index, 1);
  };
  return (
    <>
      <div className="list text-center">
        <h3>List product</h3>
      </div>
      <table id="table" className="table table-striped border border-1">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Category</th>
            <th scope="col">Product Freshness</th>
            <th scope="col">Product Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="col">01</td>
            <td scope="col">Susu</td>
            <td scope="col">Food</td>
            <td scope="col">Secondhand</td>
            <td scope="col">1000</td>
            <td> 
              <button className='btn btn-danger'>Delete</button>
              <button className='btn btn-success'>Edit</button>
            </td>
          </tr>
          <tr>
            <td scope="col">02</td>
            <td scope="col">Soda</td>
            <td scope="col">Drink</td>
            <td scope="col">New</td>
            <td scope="col">200</td>
            <td> 
              <button className='btn btn-danger'>Delete</button>
              <button className='btn btn-success'>Edit</button>
            </td>
          </tr>
          {newProductList.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.category}</td>
              <td>{row.freshness}</td>
              <td>{row.price}</td>
              <td> 
                <button className='btn btn-danger' onClick={() => handleDeleteClick(row.id)}>Delete</button>
                <button className='btn btn-success'>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListProduct;
