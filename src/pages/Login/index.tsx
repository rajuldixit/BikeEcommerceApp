import {
  Container,
  Typography,
  Stack,
  TextField,
  Button,
  Paper,
  styled
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppState } from "../../context/AppContext";
import { IUserLogin } from "../../utils/types";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const FormPaper = styled(Paper)(({ theme }) => ({
  width: 520,
  height: 400,
  backgroundColor: "rgba(255, 255, 255, 0.13)",
  padding: 10,
  boxSizing: "border-box",
  border: "1px solid lightgrey"
}));

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid }
  } = useForm<IUserLogin>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userLogin } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit = handleSubmit(async (data: IUserLogin) => {
    const resp = await userLogin(dispatch, data);
    if (resp) {
      navigate("/");
    } else {
      setErrorMessage("Invalid Credentials");
    }
  });
  return (
    <Container maxWidth="xl" sx={boxContainer}>
      <FormPaper variant="elevation">
        <Typography variant="h5" textAlign={"center"}>
          Login
        </Typography>
        <form onSubmit={onSubmit}>
          <Stack p={2}>
            <TextField
              data-cy="email-field"
              required
              type="email"
              label="Email"
              defaultValue=""
              {...register("email")}
            />
          </Stack>
          <Stack p={2}>
            <TextField
              required
              data-cy="password-field"
              type="password"
              label="Password"
              defaultValue=""
              {...register("password")}
            />
          </Stack>
          <Stack p={2}>
            <Button
              type="submit"
              variant="contained"
              data-cy="sign-in"
              disabled={!isDirty || !isValid}
            >
              Sign in
            </Button>
          </Stack>
          <Stack p={2}>
            <Button type="button" variant="text">
              Forgot password ?
            </Button>
          </Stack>
          {!!errorMessage && (
            <Typography
              textAlign={"center"}
              color={"error"}
              component={"div"}
              gutterBottom
              variant="body1"
            >
              {errorMessage}
            </Typography>
          )}
        </form>
      </FormPaper>
    </Container>
  );
};

const boxContainer = {
  backgroundColor: "#e4e0e3",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
export default Login;
