import React from 'react';

import Logo from "../../img/bootstrap_logo.png";

const Heading = () => (
  <div className="text-center mt-5">
    <img src={Logo} alt="Logo" width={100} />
    <h1 className="mt-4">Create Product</h1>
    <div className="row justify-content-center">
      <p className="col-md-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam omnis
        dolor quis, saepe optio dolorum in non maiores. Iure doloremque ea non
        velit minus distinctio molestias, sapiente, similique debitis quod iusto
        deleniti perferendis doloribus?
      </p>
    </div>
  </div>
);
export default Heading;
