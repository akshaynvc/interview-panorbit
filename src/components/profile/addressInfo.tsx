import { Box, Typography } from "@mui/material";
import {memo} from 'react';
import UserInfo from "../base/info";
import MapInfo from "./mapInfo";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  addressTitle: {
    "&.MuiTypography-root": {
      fontWeight: 400,
      fontSize: "1.5rem",
      color: "#B6B6B6",
      marginTop: ".5rem",
    },
  },
  addressContainer: {
    margin: "0 3rem",
  },
}));

type AddressInfoProps = {
  user: User;
};

const AddressInfo = memo(({ user }: AddressInfoProps) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.addressContainer}>
        <Typography className={classes.addressTitle}>Address :</Typography>
        <UserInfo title="Street" details={user.address.street} />
        <UserInfo title="Suite" details={user.address.suite} />
        <UserInfo title="City" details={user.address.city} />
        <UserInfo title="Zipcode" details={user.address.zipcode} />
      </Box>
      <MapInfo user={user} />
    </>
  );
});

export default AddressInfo;
