import { WS_URL } from "./constants";

const ws = new WebSocket(WS_URL);

export const setupWS = (onGasPrice, onCurrencyPrice) => {
  ws.onopen = function () {
    console.log("Connected");
  };

  ws.onmessage = function (evt) {
    const data = JSON.parse(evt.data);
    console.log(evt);
    switch (data?.type) {
      case "gasprice":
        onGasPrice(JSON.parse(evt.data));
        return;
      case "currencyprice":
        onCurrencyPrice(JSON.parse(evt.data));
        return;
      default:
        // nothing to do
        return;
    }
  };
};
