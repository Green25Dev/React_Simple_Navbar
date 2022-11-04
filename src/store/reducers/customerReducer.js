import { CUSTOMER_REGIST } from "../types";

const initialState = {
  customers: [],
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMER_REGIST:
      return {
        ...state,
        customers: action.payload
      };

    default:
      return state;
  }
};

export default customerReducer;
