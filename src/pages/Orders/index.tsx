import React, { useEffect } from "react";
import { useAppState } from "../../context/AppContext";
import { IOrder } from "../../context/AppReducer";
import { Container, Paper, Stack, Typography } from "@mui/material";
import Buttons, { IButtonTypes } from "../../components/Buttons";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../utils/types";
import OrdersTable from "../../components/OrdersTable";

const Orders = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <>
      <Container maxWidth="xl" sx={boxContainer}>
        <Buttons
          type={IButtonTypes.SECONDARY}
          label={"Back"}
          onClick={goBack}
        ></Buttons>
        <Paper sx={{ marginY: "10px", padding: "20px" }}>
          <OrdersTable />
        </Paper>
      </Container>
    </>
  );
};

const boxContainer = {
  backgroundColor: "#e4e0e3",
  height: "100vh",
  padding: "2%",
  boxSizing: "border-box"
};

export default Orders;
