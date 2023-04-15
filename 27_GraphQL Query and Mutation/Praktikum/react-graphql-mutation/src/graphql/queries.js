import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query MyQuery {
    product {
      id
      product_name
      product_category
      product_freshness
      additional_information
      price
    }
  }
`;

export const GET_PRODUCT_LIMIT = gql`
  query MyQuery {
    product(limit: 3) {
      id
      product_name
      product_category
      product_freshness
      additional_information
      price
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation MyMutation($id: Int!) {
    delete_product_by_pk(id: $id) {
      id
      product_name
      product_category
      product_freshness
      additional_information
      price
    }
  }
`;

export const UPDATE_PRODUCT_BYID = gql`
  mutation MyMutation($id: Int!, $product_name: String!) {
    update_product(
      where: { id: { _eq: $id } }
      _set: { product_name: $product_name }
    ) {
      returning {
        id
        product_name
        product_freshness
        product_category
        additional_information
        price
      }
    }
  }
`;
