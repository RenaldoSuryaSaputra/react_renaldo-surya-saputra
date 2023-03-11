import React from 'react';


function FormCreateProduct() {
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6">
        <h4 className="mb-3">Detail Product</h4>
        <form id="form">
          <div className="mb-3 col-lg-6">
            <label htmlFor="name" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              defaultValue=""
            />
          </div>

          <div className="mb-3 col-lg-4">
            <label htmlFor="category" className="form-label">
              Product Category
            </label>
            <select className="form-select" id="category">
              <option selected="" disable="" value="">
                Choose...
              </option>
              <option value="category1">One</option>
              <option value="category2">Two</option>
              <option value="category3">Three</option>
            </select>
          </div>

          <div className="mb-4 col-lg-5">
            <label htmlFor="image" className="form-label">
              Image of Product
            </label>
            <input className="form-control" type="file" id="image" />
          </div>

          <div className="mb-4 col-lg-5">
            <label>Product Freshness</label>
            <div className="form-check">
              <input
                className="form-check-input"
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
              id="message"
              rows={5}
              defaultValue={""}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              placeholder="$1"
            />
          </div>
          <div className="d-grid gap-2 col-8 mx-auto mb-4">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormCreateProduct;
