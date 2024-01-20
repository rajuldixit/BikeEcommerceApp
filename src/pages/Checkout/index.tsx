import React, { useState } from "react";
import { useAppState } from "../../context/AppContext";
import { IProduct } from "../../utils/types";
import { Container, Paper, Stack } from "@mui/material";
import Buttons, { IButtonTypes } from "../../components/Buttons";
import { useNavigate } from "react-router-dom";
import CustomerDetailsForm from "../../components/CustomerDetailsForm";
import useOrdersHandler from "../../hooks/useOrdersHandler";
import { ICustomer, IOrder } from "../../context/AppReducer";

const Checkout = () => {
  const appState = useAppState();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { saveOrder } = useOrdersHandler();
  const goBack = () => {
    navigate("/");
  };
  const placeOrder = async (customerDetails: ICustomer) => {
    console.log(customerDetails);
    const orderObject: IOrder = {
      orderId: Math.random(),
      product: appState.cart,
      customer: customerDetails
    };
    console.log(orderObject);
    const resp = await saveOrder(orderObject);
    if (resp) {
      setOpen(false);
      navigate("/");
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container maxWidth="xl" sx={boxContainer}>
      <Buttons
        type={IButtonTypes.SECONDARY}
        label={"Back"}
        onClick={goBack}
      ></Buttons>
      {appState.cart &&
        appState.cart.map((item: IProduct) => (
          <Paper sx={{ margin: "10px 0", padding: "8px 10px" }}>
            {item.name}
          </Paper>
        ))}
      <Stack flexDirection={"row"} justifyContent={"end"}>
        <Buttons
          type={IButtonTypes.PRIMARY}
          label={"Checkout"}
          onClick={handleClickOpen}
        ></Buttons>
      </Stack>
      {open && (
        <CustomerDetailsForm
          handleClose={handleClose}
          placeOrder={placeOrder}
          open={open}
        />
      )}
    </Container>
  );
};
const boxContainer = {
  backgroundColor: "#e4e0e3",
  height: "100vh",
  padding: "2%",
  boxSizing: "border-box"
};

export default Checkout;
