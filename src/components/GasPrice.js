import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { animated } from "react-spring";

function GasPrice({ priceInGwei = "N/A", title, subtitle, style = {}, resetAnim }) {
  const AnimatedCard = animated(Card);

  return (
    <AnimatedCard variant="elevation" style={style} key={resetAnim}>
      <CardContent>
        <Grid container columnSpacing={2} alignItems="center">
          <Grid item xs={4} sm={12}>
            <Typography
              textAlign="center"
              variant="h6"
              color="text.secondary"
              noWrap
              sx={{
                fontWeight: "bold",
              }}
            >
              {getEmoji(title)} {title}
            </Typography>
          </Grid>
          <Grid item xs={4} sm={12}>
            <Typography
              textAlign="center"
              variant="h3"
              component="div"
              sx={{
                fontWeight: "bold",
              }}
            >
              {priceInGwei}
            </Typography>
          </Grid>
          <Grid item xs={4} sm={12}>
            <Typography textAlign="center" variant="body2" noWrap>
              {subtitle}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </AnimatedCard>
  );
}

export default GasPrice;

function getEmoji(name = "") {
  name = name.toLowerCase();
  switch (name) {
    case "rapid":
      return "🚀";
    case "fast":
      return "🛫";
    default:
      return "🤷‍♀️";
  }
}
