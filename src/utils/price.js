import Big from "big.js";

// TODO remove hard-coded values (get from server)
export const TYPE_TO_GAS = {
  ETH: 21000,
  USDT: 46109,
  USDC: 48481,
};

export function getEstimatedPriceFmt(gasUsed, gweiPrice, ethPrice) {
  let price = 0;
  if (!isNaN(gasUsed) && !isNaN(gweiPrice) && !isNaN(ethPrice)) {
    price = Big(gasUsed).mul(gweiPrice).mul(ethPrice).div(1e9).toNumber();
  }
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);
}
