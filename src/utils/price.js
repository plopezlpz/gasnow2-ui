import Big from "big.js";

// TODO remove hard-coded gasUsed values (get from server)
export const TX_TYPES = [
  {
    gasUsed: 21000,
    code: "ETH",
    name: "ETH",
    type: "",
    interaction: "Transfer",
    iconSrc: "./img/eth.svg",
  },
  {
    gasUsed: 46000,
    code: "USDT",
    name: "USDT",
    type: "ERC-20",
    interaction: "Transfer",
    iconSrc: "./img/usdt.svg",
  },
  {
    gasUsed: 48500,
    code: "USDC",
    name: "USDC",
    type: "ERC-20",
    interaction: "Transfer",
    iconSrc: "./img/usdc.svg",
  },
  {
    gasUsed: 130000,
    code: "UNISWAPV3",
    name: "Uniswap v3",
    type: "DEX",
    interaction: "Swap",
    iconSrc: "./img/uni.svg",
  },
  {
    gasUsed: 106000,
    code: "UNISWAPV2",
    name: "Uniswap v2",
    type: "DEX",
    interaction: "Swap",
    iconSrc: "./img/uni.svg",
  },
  {
    gasUsed: 86000,
    code: "BITGO_MULTISIG_TX",
    name: "BitGo Multisig ETH",
    type: "Multisig",
    interaction: "Transfer",
    iconSrc: "./img/bitgo.svg",
  },
  {
    gasUsed: 133000,
    code: "BITGO_MULTISIG_ERC_TX",
    name: "BitGo Multisig ERC-20",
    type: "Multisig",
    interaction: "Transfer",
    iconSrc: "./img/bitgo.svg",
  },
];

export function getEstimatedPriceFmt(gweiPrice, ethPrice, txType = TX_TYPES[0]) {
  const gasUsed = txType.gasUsed;
  let price = 0;
  if (!isNaN(gasUsed) && !isNaN(gweiPrice) && !isNaN(ethPrice)) {
    price = Big(gasUsed).mul(gweiPrice).mul(ethPrice).div(1e9).toNumber();
  }
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);
}
