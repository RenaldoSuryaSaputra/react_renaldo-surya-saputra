import React from 'react';
import Heading from '../components/header-footer/header';
import Navbar from '../components/navigation/navigation-bar';
import FormCreateProduct from '../components/form/form-product';


const PageCreateProduct = () => {
   return (
      <>
      <Navbar />
      <Heading />
      <FormCreateProduct />
      </>

   );
}

export default PageCreateProduct