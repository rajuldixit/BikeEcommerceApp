import { Stack, Paper, Container, Box } from "@mui/material";
import React from "react";
import Filter from "../../components/Filter";
import Header from "../../components/Header";
import Products from "../../components/Products";

const Landing = () => {
  return (
    <Container maxWidth="xl" sx={boxContainer}>
      <Stack>
        <Header></Header>
        <Paper elevation={0}>
          <Stack flexDirection={"row"} p={2}>
            <Box sx={{ width: "20%" }}>
              <Filter></Filter>
            </Box>
            <Box sx={{ width: "80%" }}>
              <Products></Products>
            </Box>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
};
const boxContainer = {
  backgroundColor: "#e4e0e3",
  height: "100vh"
};
export default Landing;
