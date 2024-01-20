import React, { useEffect } from "react";
import { useAppState } from "../../context/AppContext";
import { IOrder } from "../../context/AppReducer";
import { Paper } from "@mui/material";

const Orders = () => {
  const appState = useAppState();
  useEffect(() => {}, [appState.orders]);
  return (
    <>
      {appState.orders &&
        appState.orders.map((order: IOrder) => (
          <Paper>
            {order.customer.firstname}
            {order.orderId}
          </Paper>
        ))}
    </>
  );
};

export default Orders;
