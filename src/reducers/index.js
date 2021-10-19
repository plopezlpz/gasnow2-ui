import { combineReducers } from "redux";

// ********************************
// Action types
// ********************************

const UPDATE_GAS_PRICE = "UPDATE_GAS_PRICE";
const UPDATE_CURRENCY_PRICE = "UPDATE_CURRENCY_PRICE";

// ********************************
// Action creators
// ********************************

const updateGasPrice = (gasPrice) => ({
  type: UPDATE_GAS_PRICE,
  payload: gasPrice,
});

const updateCurrencyPrice = (currencyPrice) => ({
  type: UPDATE_CURRENCY_PRICE,
  payload: currencyPrice,
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

const currencyPriceReducer = (currencyPrice = {}, action) => {
  switch (action.type) {
    case UPDATE_CURRENCY_PRICE:
      return action.payload.data;
    default:
      return currencyPrice;
  }
};

const reducers = combineReducers({
  gasPrice: gasPriceReducer,
  currencyPrice: currencyPriceReducer,
});

export { reducers, updateGasPrice, updateCurrencyPrice };
