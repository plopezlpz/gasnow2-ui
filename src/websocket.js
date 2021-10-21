import { WS_URL } from "./constants";

export const connectWS = (onGasPrice, onCurrencyPrice) => {
  const ws = new WebSocket(WS_URL);

  ws.onmessage = (evt) => {
    const data = JSON.parse(evt.data);
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

  ws.onerror = () => {
    console.log("ws error");
    ws.close();
  };

  ws.onclose = (e) => {
    console.log("ws closed. Reconnect will be attempted in 5 seconds", e.reason);
    setTimeout(function () {
      connectWS(onGasPrice, onCurrencyPrice);
    }, 5000);
  };

  ws.onopen = () => {
    console.log("ws connected");
  };
};
