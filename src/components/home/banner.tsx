import React, { memo } from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles(() => ({
  svgContainer: {
    height: "100vh",
  },
  wave1: {
    fill: "url(#gradient)",
    opacity: 1,
  },
  wave2: {
    fill: "url(#gradient)",
    opacity: 0.2,
  },
}));

const BannerSVG = memo(() => {
  const classes = useStyles();
  return (
    <Box className={classes.svgContainer}>
      <Box
        component={"svg"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <Box component={"defs"}>
          <Box
            component={"linearGradient"}
            id="gradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <Box component={"stop"} offset="0%" stopColor="#355DC8" />
            <Box component={"stop"} offset="100%" stopColor="#702CC8" />
          </Box>
        </Box>
        <Box
          component={"path"}
          className={classes.wave1}
          d="M0,224L34.3,234.7C68.6,245,137,267,206,282.9C274.3,299,343,309,411,266.7C480,224,549,128,617,101.3C685.7,75,754,117,823,117.3C891.4,117,960,75,1029,101.3C1097.1,128,1166,224,1234,261.3C1302.9,299,1371,277,1406,266.7L1440,256L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        />
        <Box
          component={"path"}
          className={classes.wave2}
          d="M0,234L34.3,244.7C68.6,255,137,277,206,292.9C274.3,309,343,319,411,276.7C480,234,549,138,617,111.3C685.7,85,754,127,823,127.3C891.4,127,960,85,1029,111.3C1097.1,138,1166,234,1234,271.3C1302.9,309,1371,287,1406,276.7L1440,266L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        />
      </Box>
    </Box>
  );
});

export default BannerSVG;
