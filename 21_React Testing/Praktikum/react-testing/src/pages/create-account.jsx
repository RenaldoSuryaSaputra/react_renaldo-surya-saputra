import React from 'react';
import Introduction from '../components/introduction';
import FormCreateAccount from '../components/form/form-account';
import '../css/form-style.css'


const PageCreateAccount = () => {
   return (
      <>
         <Introduction />
         <FormCreateAccount />
      </>
   );
}

export default PageCreateAccount