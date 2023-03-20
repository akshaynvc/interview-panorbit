import React, { memo } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    "&.MuiTypography-root": {
      fontSize: "100px",
      fontWeight: 800,
      color:'#F2F2F2'
    },
  },
}));

const ComingSoon = memo(() => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.text}>Coming Soon</Typography>
    </Box>
  );
});

export default ComingSoon;
