import React, { useState } from "react";
import { IProduct } from "../utils/types";
import { useAppState } from "../context/AppContext";
import { products } from "../utils/constants";

const useProductHandler = () => {
  const [productList, setProductList] = useState<IProduct[]>(new Array());
  const appState = useAppState();

  const handleProductList = () => {
    let newList = JSON.parse(JSON.stringify(products));
    if (Object.keys(appState.filters).length > 0) {
      for (let key in appState.filters) {
        newList = newList.filter((product: IProduct) => {
          if (
            key == "bikeType" &&
            product.bikeType == appState.filters.bikeType
          ) {
            return product;
          }
          if (
            key == "priceRange" &&
            product.priceRange == appState.filters.priceRange
          ) {
            return product;
          }
        });
      }
      setProductList(newList);
    } else {
      setProductList(products);
    }
  };
  return { handleProductList, productList };
};

export default useProductHandler;
