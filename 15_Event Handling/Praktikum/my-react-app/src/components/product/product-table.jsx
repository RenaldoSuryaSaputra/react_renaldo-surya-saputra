import React from 'react';


function ListProduct() {
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
            <th scope="col">Images of product</th>
            <th scope="col">Product Freshness</th>
            <th scope="col">Additional Description</th>
            <th scope="col">Product Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="col">01</td>
            <td scope="col">Susu</td>
            <td scope="col">Food</td>
            <td scope="col">Images of product</td>
            <td scope="col">Secondhand</td>
            <td scope="col">Additional Description</td>
            <td scope="col">1000</td>
          </tr>
          <tr>
            <td scope="col">02</td>
            <td scope="col">Soda</td>
            <td scope="col">Drink</td>
            <td scope="col">Images of product</td>
            <td scope="col">New</td>
            <td scope="col">Additional Description</td>
            <td scope="col">200</td>
          </tr>
        </tbody>
      </table>
      <div className="row ms-5">
        <div className="col-5">
          <input
            id="search"
            type="text"
            className="form-control"
            placeholder="Search by number"
          />
          <button
            type="button"
            className="btn btn-danger"
          >
            Deletion
          </button>
          <button
            type="button"
            className="btn btn-light border-1 border-primary text-primary"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default ListProduct;
