import React from "react";
import { IOrder, Types, initialState } from "../context/AppReducer";
import { useAppDispatch, useAppState } from "../context/AppContext";

const useOrdersHandler = () => {
  const dispatch = useAppDispatch();
  const appState = useAppState();

  const saveOrder = (orderDetails: IOrder) => {
    const placedOrders: IOrder[] = appState.orders;
    placedOrders.push(orderDetails);
    dispatch({
      type: Types.Orders,
      payload: {
        ...initialState,
        orders: placedOrders
      }
    });
    dispatch({
      type: Types.AddToCart,
      payload: {
        ...initialState,
        cart: new Array()
      }
    });
    return true;
  };
  return { saveOrder };
};

export default useOrdersHandler;
