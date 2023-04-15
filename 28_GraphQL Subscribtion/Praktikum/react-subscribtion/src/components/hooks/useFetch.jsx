import { useState, useEffect } from 'react'
import axios from 'axios'
import { getAuthCookie } from '../../utils/cookies'

const BASE_URL = "https://6430142fc26d69edc88a5ff1.mockapi.io"

const productFetch = () => {
   const [products, setProducts] = useState([]);

   const requestHeadersWithToken = () => {
      const authToken = getAuthCookie()
      return {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'x-api-key': authToken,
        },
      }
    }

   const getProducts = async () => {
      await axios.get(`${BASE_URL}/products`, requestHeadersWithToken())
         .then(response =>
            setProducts(response.data)
         )
         .catch((err) => {
            console.log("Err: ", err);
         });
   };

   const addNewProduct = async ({ id, name, category, image, freshness, description, price }) => {
      const newProduct = {
         productName: name,
         productCategory: category,
         productImage: image,
         productFreshness: freshness,
         additionalDescription: description,
         productPrice: price,
         uuid: id,
      }
      await axios.post(`${BASE_URL}/products`, newProduct, ...requestHeadersWithToken())
         .then(response =>
            setProducts(prev => [...prev, response.data])
         )
         .catch((err) => {
            console.log("Err: ", err);
         });
   }

   const removeProduct = async (id) => {
      await axios.delete(`${BASE_URL}/products/${id}`, requestHeadersWithToken())
      setProducts(prev => prev.filter(product => product.id !== id))
   }

   const updateProduct = async ({ id, name }) => {
      await axios.put(`${BASE_URL}/products/${id}`, {
         productName: name
      }, ...requestHeadersWithToken())
         .then(() => {
            const updateProduct = products.map(product => {
               if (product.id === id) {
                  return { ...product, productName: name }
               }
               return product
            })
            setProducts(updateProduct)
         })
         .catch(error => {
            console.error(error);
         });
   }
   useEffect(() => {
      getProducts();
   }, []);

   return { products, addNewProduct, removeProduct, updateProduct }
}

export default productFetch
