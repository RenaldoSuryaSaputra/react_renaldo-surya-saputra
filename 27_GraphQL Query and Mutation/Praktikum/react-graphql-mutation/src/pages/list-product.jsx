import React, { useEffect } from 'react'
import { useLazyQuery, useMutation } from '@apollo/client'
import ProductCard from '../components/card-product'
import {
  GET_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT_BYID
} from '../graphql/queries'

const ListProduct = () => {
  const [getProduct, { data, error, loading, refetch }] = useLazyQuery(GET_PRODUCT)

  const [deleteProduct] = useMutation(DELETE_PRODUCT, {
    onCompleted: (data) => {
      refetch();
    },
    onError: (error) => {
      console.log(error);
    }
  });

  const [updateProduct] = useMutation(UPDATE_PRODUCT_BYID, {
    onCompleted: (data) => {
      refetch();
    },
    onError: (error) => {
      console.log(error);
    }
  });

  if (loading) {
    console.log("loading...")
  }

  if (error) {
    console.log(error)
    return null
  }
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h1>List Product</h1>
      <div className='col-10 m-auto'>
        {data?.product.map((value) => (
          <div className='float-left d-inline-block m-4'>
            <ProductCard
              key={value.id}
              id={value.id}
              name={value.product_name}
              category={value.product_category}
              freshness={value.product_freshness}
              description={value.additional_information}
              price={value.price}
              onDeleteItem={() => {
                if (confirm("Ingin hapus data ?")) {
                  deleteProduct({ variables: { id: value.id } })
                } else {
                  return;
                }
              }}
              onEditItem={() => {
                const newProductName = prompt("Masukkan Nama Product Terbaru : ")
                updateProduct({ variables: { id: value.id, product_name: newProductName } });
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListProduct