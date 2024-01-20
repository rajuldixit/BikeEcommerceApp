import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  styled,
  tableCellClasses,
  Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { IOrder } from "../../context/AppReducer";
import { useAppState } from "../../context/AppContext";
import { IProduct } from "../../utils/types";
import { IPVersion } from "net";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));
function createData(
  orderId: number,
  customerName: string,
  paymentMode: string,
  products: Array<IProduct>
) {
  return { orderId, customerName, paymentMode, products };
}

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9)
// ];
interface IOrderRow {
  orderId: number;
  customerName: string;
  paymentMode: string;
  products: Array<IProduct>;
}
const OrdersTable = () => {
  const appState = useAppState();
  const [orderRows, setOrderRows] = useState<Array<IOrderRow>>(new Array());

  useEffect(() => {
    console.log(appState.orders);
    appState.orders.map((order: IOrder) => {
      const row = createData(
        order.orderId,
        order.customer.firstname,
        order.customer.paymentMode,
        order.product
      );
      setOrderRows([...orderRows, row]);
    });
  }, [appState.orders]);
  return (
    <>
      {appState.orders && appState.orders.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Order Id</StyledTableCell>
                <StyledTableCell align="right">Customer Name</StyledTableCell>
                <StyledTableCell align="right">Payment Mode</StyledTableCell>
                <StyledTableCell align="right">Products</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderRows.map((row) => (
                <StyledTableRow key={row.orderId}>
                  <StyledTableCell component="th" scope="row">
                    {row.orderId}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.customerName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.paymentMode}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.products.map((item: IProduct) => (
                      <Typography component={"div"} variant="body2">
                        {item.name}
                      </Typography>
                    ))}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography component={"div"} variant="h5" textAlign={"center"}>
          {" "}
          No orders available
        </Typography>
      )}
    </>
  );
};

export default OrdersTable;
