import { Grid, Typography } from "@mui/material";
import { useOnce } from "@react-spring/shared";
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { config, useSpring } from "react-spring";
import { useToggle } from "react-use";
import GasPrice from "../components/GasPrice";
import { updateGasPrice, updateCurrencyPrice } from "../reducers";
import { getEstimatedPriceFmt, TYPE_TO_GAS } from "../utils/price";
import { setupWS } from "../websocket";

function Main() {
  const dispatch = useDispatch();

  useOnce(() => {
    setupWS(
      (gasPrice) => dispatch(updateGasPrice(gasPrice)),
      (currencyPrice) => dispatch(updateCurrencyPrice(currencyPrice))
    );
  });

  const [on, toggle] = useToggle(true);

  // @ts-ignore
  const gasPrice = useSelector((state) => state.gasPrice, shallowEqual);
  // @ts-ignore
  const { usd } = useSelector((state) => state.currencyPrice, shallowEqual);
  useEffect(() => {
    document.title = `${gasPrice?.gasPrices?.fast} Gwei | GasNow2`;
    toggle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gasPrice?.gasPrices?.fast]);

  const rapidUsedPrice = getEstimatedPriceFmt(TYPE_TO_GAS.ETH, gasPrice?.gasPrices?.rapid, usd);
  const fastUsedPrice = getEstimatedPriceFmt(TYPE_TO_GAS.ETH, gasPrice?.gasPrices?.fast, usd);

  const fillStyle = useSpring({
    reset: true,
    from: { background: `linear-gradient(0deg, #4A148C, #8E24AA 0%, #AB47BC 0%, #9C27B0)` },
    to: { background: `linear-gradient(0deg, #4A148C, #8E24AA 100%, #AB47BC 100%, #9C27B0)` },
    config: Object.assign({ duration: 5000 }, config.gentle),
  });

  return (
    <>
      <Typography variant="h3" textAlign="center" mb={3}>
        Gas Prices (Gwei)
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid
          item
          sx={{
            flexGrow: {
              xs: 1,
              sm: "unset",
            },
          }}
        >
          <GasPrice
            resetAnim={on}
            priceInGwei={gasPrice?.gasPrices?.rapid}
            title="Rapid"
            subtitle={`${rapidUsedPrice} | 15 Seconds`}
            style={fillStyle}
          />
        </Grid>
        <Grid
          item
          sx={{
            flexGrow: {
              xs: 1,
              sm: "unset",
            },
          }}
        >
          <GasPrice
            resetAnim={on}
            priceInGwei={gasPrice?.gasPrices?.fast}
            title="Fast"
            subtitle={`${fastUsedPrice} | 1 Minute`}
            style={fillStyle}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Main;
