import { SET_STORES } from "../types";

export const customerRegistAction = (storeInfo) => ({
  type: SET_STORES, 
  payload: storeInfo
});
