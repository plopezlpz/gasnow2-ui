import { combineReducers } from "redux";

// ********************************
// Action types
// ********************************

const UPDATE_GAS_PRICE = "UPDATE_GAS_PRICE";

// ********************************
// Action creators
// ********************************

const updateGasPrice = (gasPrice) => ({
  type: UPDATE_GAS_PRICE,
  payload: gasPrice,
});

// ********************************
// Reducers
// ********************************

const gasPriceReducer = (gasPrice = {}, action) => {
  switch (action.type) {
    case UPDATE_GAS_PRICE:
      return action.payload.data;
    default:
      return gasPrice;
  }
};

const reducers = combineReducers({
  gasPrice: gasPriceReducer,
});

export { reducers, updateGasPrice };
