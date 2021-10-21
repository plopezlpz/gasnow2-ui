import { Avatar, IconButton, Link, Stack } from "@mui/material";
import { TWITTER_LINK, GITHUB_LINK } from "../constants";
import { Box } from "@mui/system";
import React from "react";

function Footer() {
  console.log(TWITTER_LINK);
  return (
    <>
      <Box sx={{ mb: "3rem" }} />
      <Stack direction="row" spacing={2} justifyContent="center">
        <IconButton size="small" component={Link} href={GITHUB_LINK} target="_blank">
          <Avatar src="./img/github.svg" sx={{ width: 28, height: 28 }}>
            PL
          </Avatar>
        </IconButton>
        <IconButton size="small" component={Link} href={TWITTER_LINK} target="_blank">
          <Avatar src="./img/twitter.svg" sx={{ width: 28, height: 28 }}>
            PL
          </Avatar>
        </IconButton>
      </Stack>
      <Box sx={{ mb: "2rem" }} />
    </>
  );
}

export default Footer;
