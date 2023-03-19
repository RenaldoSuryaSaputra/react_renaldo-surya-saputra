import React from 'react';
import Heading from '../components/header-footer/header';
import Navbar from '../components/navigation/navigation-bar';
import FormCreateProduct from '../components/form/form-product';
import '../css/create-product.css'


const PageCreateProduct = () => {
   return (
      <>
      <Heading />
      <FormCreateProduct />
      </>
   );
}

export default PageCreateProduct