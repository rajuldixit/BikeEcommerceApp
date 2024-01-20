import { IProduct } from "../utils/types";

export enum Types {
  User = "USER",
  Orders = "ORDERS",
  AddToCart = "ADD_TO_CART"
}
export interface IUser {
  name: string;
  role: string;
  id: string;
}
const defaultUser: IUser = {
  name: "",
  role: "",
  id: ""
};

export interface ICustomer {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  paymentMode: string;
}

export interface IOrder {
  orderId: number;
  product: IProduct[];
  customer: ICustomer;
}
const defaultOrder: IOrder = {
  orderId: 0,
  product: new Array(),
  customer: {
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    paymentMode: ""
  }
};
export type IAppState = {
  user: IUser;
  orders: Array<IOrder>;
  cart: Array<IProduct>;
};
export type IActionType = { payload: IAppState; type: string };

export const initialState: IAppState = {
  user: defaultUser,
  orders: new Array(),
  cart: new Array()
};
export const appReducer = (state = initialState, action: IActionType) => {
  switch (action.type) {
    case Types.User:
      return { ...state, user: action.payload.user };
    case Types.Orders:
      return { ...state, orders: action.payload.orders };
    case Types.AddToCart:
      return { ...state, cart: action.payload.cart };
    default:
      return state;
  }
};
