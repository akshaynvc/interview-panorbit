import { Box, Typography } from "@mui/material";
import MapView from "./mapView";
import {memo} from 'react';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  mapContainer: {
    width: "100%",
    height: "340px",
    padding: "10px 20px 10px 80px",
    borderRadius: "1rem",
  },
  mapView: {
    width: "100%",
    height: "100%",
    borderRadius: "2rem",
  },
  locationContainer: {
    display: "flex",
    justifyContent: "right",
  },
  cordContainer: {
    display: "flex",
    marginTop: ".5rem",
  },
  chordText: {
    "&.MuiTypography-root": {
      marginLeft: "1rem",
      color: "#B6B6B6",
    },
  },
  chordValue: {
    "&.MuiTypography-root": {
      marginLeft: "1rem",
      color: "#555555",
    },
  },
}));

type MapInfoProps = {
  user: User;
};

const MapInfo = memo(({ user }: MapInfoProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.mapContainer}>
      <Box className={classes.mapView}>
        <MapView lat={user.address.geo.lat} lng={user.address.geo.lng} />
        <Box className={classes.locationContainer}>
          <Box className={classes.cordContainer}>
            <Typography className={classes.chordText}>Lat:</Typography>
            <Typography className={classes.chordValue}>
              {user.address.geo.lat}
            </Typography>
          </Box>
          <Box className={classes.cordContainer}>
            <Typography className={classes.chordText}>Lng:</Typography>
            <Typography className={classes.chordValue}>
              {user.address.geo.lng}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
});

export default MapInfo;
