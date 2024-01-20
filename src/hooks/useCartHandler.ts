import React, { Dispatch } from "react";
import { IProduct } from "../utils/types";
import { IActionType, Types, initialState } from "../context/AppReducer";
import { useAppDispatch, useAppState } from "../context/AppContext";

const useCartHandler = () => {
  const dispatch = useAppDispatch();
  const appState = useAppState();

  const addRemoveFromCart = (product: IProduct) => {
    const shoppingCart: IProduct[] = appState.cart;
    const itemExist = shoppingCart.filter(
      (item: IProduct) => item.id == product.id
    )[0];
    if (!!itemExist) {
      shoppingCart.splice(shoppingCart.indexOf(product), 1);
    } else {
      shoppingCart.push(product);
    }
    dispatch({
      type: Types.AddToCart,
      payload: {
        ...initialState,
        cart: shoppingCart
      }
    });
  };
  return { addRemoveFromCart };
};

export default useCartHandler;
