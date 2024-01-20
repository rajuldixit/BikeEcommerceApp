import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Buttons, { IButtonTypes } from "../Buttons";
import ShoppingCart from "./../ShoppingCart/index";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../../context/AppContext";

const Header = () => {
  const [loginButtonLabel, setLoginButtonLabel] = useState("Sign in");
  const appState = useAppState();
  const navigate = useNavigate();
  const [isAdmin, setAdmin] = useState(false);
  const login = () => {
    navigate("/login");
  };
  const orders = () => {
    navigate("/orders");
  };
  useEffect(() => {
    if (!!appState.user.id) {
      setAdmin(true);
      setLoginButtonLabel("Log out");
    }
  }, [appState.user.id]);

  return (
    <Stack
      flexDirection={"row"}
      justifyContent={"end"}
      m={2}
      sx={{ height: "4vh" }}
    >
      <Buttons
        type={IButtonTypes.SECONDARY}
        label={loginButtonLabel}
        onClick={login}
      ></Buttons>
      {!isAdmin && <ShoppingCart></ShoppingCart>}
      {isAdmin && (
        <Buttons
          type={IButtonTypes.TEXT}
          label={"Orders"}
          onClick={orders}
        ></Buttons>
      )}
    </Stack>
  );
};

export default Header;
