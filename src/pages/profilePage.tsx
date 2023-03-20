import React from "react";
import Layout from "../components/layout";
import { useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { selector } from "../redux/selector";
import { AddressInfo, CompanyInfo, PersonalInfo } from "../components/profile";

const useStyles = makeStyles(() => ({
  profileContainer: {
    marginTop: "1rem",
    width: "100%",
  },
  gridContainer: {
    height: "100%",
  },
  leftGrid: {
    width: "100%",
    borderRight: "2px solid rgba(109,109,109,.1)",
    height: "100%",
  },
  dividerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    borderBottom: "2px solid rgba(109,109,109,.1)",
    width: "80%",
  },
  rightGrid: {
    margin: "0 1rem",
    width: "100%",
  },
}));

const Divider = () => {
  const classes = useStyles();
  return (
    <Box className={classes.dividerContainer}>
      <Box className={classes.divider} />
    </Box>
  );
};

const ProfilePage = () => {
  const { id } = useParams();
  const classes = useStyles();
  const { users } = useSelector(selector);
  const userDetails = users.filter((e: User) => e.username === id);
  const user = userDetails[0];

  return (
    <Layout>
      <Box className={classes.profileContainer}>
        <Grid container className={classes.gridContainer}>
          <Grid item lg={5} className={classes.leftGrid}>
            <PersonalInfo user={user} />
            <Divider />
            <CompanyInfo user={user} />
          </Grid>
          <Grid item lg={7} className={classes.rightGrid}>
            <AddressInfo user={user} />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default ProfilePage;
