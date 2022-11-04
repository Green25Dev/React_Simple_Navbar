import { CUSTOMER_REGIST } from "../types";

export const customerRegistAction = (customerInfo) => ({
  type: CUSTOMER_REGIST, 
  payload: customerInfo
});
