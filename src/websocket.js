import { WS_URL } from "./constants";

const ws = new WebSocket(WS_URL);

export const setupWS = (onPrice) => {
  ws.onopen = function () {
    console.log("Connected");
  };

  ws.onmessage = function (evt) {
    onPrice(JSON.parse(evt.data));
  };
};
