import { Stack } from "@mui/material";
import React from "react";
import Buttons, { IButtonTypes } from "../Buttons";
import ShoppingCart from "./../ShoppingCart/index";

const Header = () => {
  return (
    <Stack
      flexDirection={"row"}
      justifyContent={"end"}
      m={2}
      sx={{ height: "4vh" }}
    >
      <Buttons
        type={IButtonTypes.SECONDARY}
        label={"Sign in"}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      ></Buttons>
      <ShoppingCart></ShoppingCart>
    </Stack>
  );
};

export default Header;
