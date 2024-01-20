import React from "react";
import { useForm } from "react-hook-form";
import { ICustomer } from "../../context/AppReducer";
import {
  Typography,
  Stack,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";
import Buttons, { IButtonTypes } from "../Buttons";

interface ICustomerDetails {
  handleClose: () => void;
  placeOrder: (customerData: ICustomer) => void;
  open: boolean;
}
const CustomerDetailsForm: React.FC<ICustomerDetails> = ({
  handleClose,
  open,
  placeOrder
}: ICustomerDetails) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid }
  } = useForm<ICustomer>();

  const onSubmit = handleSubmit(async (customerData: ICustomer) => {
    debugger;
    placeOrder(customerData);
  });

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Customer Details</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please share your details to place this order
        </DialogContentText>
      </DialogContent>
      <form onSubmit={onSubmit}>
        <Stack p={2}>
          <TextField
            data-cy="fname-field"
            required
            type="text"
            label="First Name"
            defaultValue=""
            {...register("firstname")}
          />
          <TextField
            required
            data-cy="lname-field"
            type="text"
            label="Last Name"
            defaultValue=""
            {...register("lastname")}
          />
        </Stack>
        <Stack p={2}>
          <TextField
            data-cy="email-field"
            required
            type="email"
            label="Email"
            defaultValue=""
            {...register("email")}
          />
          <TextField
            required
            data-cy="phone-field"
            type="text"
            label="Phone"
            defaultValue=""
            {...register("phone")}
          />
        </Stack>
        <Stack p={2}>
          <TextField
            data-cy="address-field"
            required
            type="address"
            label="Address"
            defaultValue=""
            {...register("address")}
          />
          <TextField
            required
            data-cy="paymentMode-field"
            type="text"
            label="PaymentMode"
            defaultValue=""
            {...register("paymentMode")}
          />
        </Stack>
        <Buttons
          type={IButtonTypes.SECONDARY}
          label={"Cancel"}
          onClick={handleClose}
        ></Buttons>
        <Button type="submit">Submit</Button>
      </form>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

export default CustomerDetailsForm;
