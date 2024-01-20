import { Badge, BadgeProps, IconButton, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useEffect, useState } from "react";
import { useAppState } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}));

const ShoppingCart = () => {
  const [cartSize, setCartSize] = useState(0);
  const appState = useAppState();
  const navigate = useNavigate();
  const checkout = () => {
    navigate("/checkout");
  };
  useEffect(() => {
    setCartSize(appState.cart.length);
  }, [appState.cart.length]);
  return (
    <IconButton aria-label="cart" onClick={checkout}>
      <StyledBadge badgeContent={cartSize} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};

export default ShoppingCart;
