import React from "react";
import { RevolvingDot } from "react-loader-spinner";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles(() => ({
  spinnerContainer: {
    heigth: "100%",
    width:'100%',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Loader = () => {
  const classes = useStyles();
  return (
    <Box className={classes.spinnerContainer}>
      <RevolvingDot
        height="100"
        width="100"
        color="#355DC8"
        secondaryColor=""
        ariaLabel="revolving-dot-loading"
        visible={true}
      />
    </Box>
  );
};

export default Loader;
