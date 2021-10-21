import { Avatar, Grid } from "@mui/material";
import React from "react";

function TextIcon(props) {
  const { src } = props;
  return (
    <Grid container item direction="row" spacing={1} alignItems="center" wrap="nowrap">
      <Grid item>
        <Avatar
          sx={{
            display: "flex",
            height: 24,
            width: 24,
          }}
          src={src}
        />
      </Grid>
      <Grid item>{props.children}</Grid>
    </Grid>
  );
}

export default TextIcon;
