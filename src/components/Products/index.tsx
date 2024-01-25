import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { IProduct } from "../../utils/types";
import ProductCard from "../Cards";
import { useAppState } from "../../context/AppContext";
import useProductHandler from "../../hooks/useProductHandler";

const Products = () => {
  const appState = useAppState();
  const { handleProductList, productList } = useProductHandler();

  const fetchUpdatedProductList = async () => {
    await handleProductList();
  };

  useEffect(() => {
    if (!!appState.filters) {
      fetchUpdatedProductList();
    }
  }, [appState]);
  useEffect(() => {
    fetchUpdatedProductList();
  }, []);

  return (
    <Stack sx={{ height: "80vh", overflowY: "scroll" }} p={2}>
      <Grid container spacing={2}>
        {productList &&
          productList.map((product: IProduct) => (
            <Grid item xs={12} sm={4} lg={3} key={product.id}>
              <ProductCard product={product}></ProductCard>
            </Grid>
          ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "100%",
          justifyContent: "center"
        }}
      >
        {productList.length == 0 && (
          <Typography variant="h6" textAlign={"center"} component={"div"}>
            No Product have been found by selected filters
          </Typography>
        )}
      </Box>
    </Stack>
  );
};

export default Products;
