import React from 'react';
import Heading from '../components/header-footer/header';
import Navbar from '../components/navigation/navigation-bar';
import FormCreateProduct from '../components/form/form-product';
import ListProduct from '../components/product/product-table';


const PageCreateProduct = () => {
   return (
      <>
      <Navbar />
      <Heading />
      <FormCreateProduct />
      <ListProduct />
      </>

   );
}

export default PageCreateProduct