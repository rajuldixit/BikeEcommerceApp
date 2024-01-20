import React, { useState } from "react";
import { useAppState } from "../../context/AppContext";
import { IProduct } from "../../utils/types";
import { Container, Grid, Paper, Stack } from "@mui/material";
import Buttons, { IButtonTypes } from "../../components/Buttons";
import { useNavigate } from "react-router-dom";
import CustomerDetailsForm from "../../components/CustomerDetailsForm";
import useOrdersHandler from "../../hooks/useOrdersHandler";
import { ICustomer, IOrder } from "../../context/AppReducer";
import ProductCard from "../../components/Cards";

const Checkout = () => {
  const appState = useAppState();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { saveOrder } = useOrdersHandler();
  const goBack = () => {
    navigate("/");
  };
  const placeOrder = async (customerDetails: ICustomer) => {
    const orderObject: IOrder = {
      orderId: Math.floor(Math.random() * 100),
      product: appState.cart,
      customer: customerDetails
    };
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
      <Paper
        elevation={0}
        sx={{
          marginY: "20px",
          padding: "20px",
          height: "60vh",
          overflowY: "scroll"
        }}
      >
        {/* <Stack sx={{ height: "80vh", overflowY: "scroll" }} p={2}></Stack> */}
        <Grid container spacing={2}>
          {appState.cart &&
            appState.cart.map((product: IProduct) => (
              <Grid item xs={12} sm={4} lg={3} key={product.id}>
                <ProductCard product={product}></ProductCard>
              </Grid>
            ))}
        </Grid>
      </Paper>

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
