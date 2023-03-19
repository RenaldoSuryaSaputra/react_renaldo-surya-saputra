import React, { useState } from 'react';


function ListProduct({list}) {

  const [dataTable, setDataTable] = useState([])
  
  console.log("LIST : ", list)
  const newProductList = [...list];
  console.log("new Product List", newProductList)

  const handleDeleteClick = (id) => {
    console.log("ID ", id)
    const index = newProductList.findIndex((product) => product.id === id);
    console.log("INDEX ", index )
    newProductList.splice(index, 1);
    console.log("LIST DELETE: ", list)
    console.log("new Product List DELETE", newProductList)
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
