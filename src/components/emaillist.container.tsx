import { Typography, Grid, Box } from "@mui/material";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import Loader from "./base/loader";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles<Theme>((theme) => ({
  container: {
    position: "relative",
    background: "#F6F6F6",
    height: "100vh",
  },
  gridContainer: {
    position: "absolute",
    top: "10%",
    left: "30%",
    height: "75vh",
    "&.MuiGrid-root": {
      width: "40%",
    },
  },
  gridItem: {
    background: "#fff",
    width: "100%",
    height: "600px",
    borderRadius: "30px",
  },
  titleContainer: {
    background: "#F6F6F6",
    height: "15%",
    borderRadius: "20px 20px 0 0",
    textAlign: "center",
    position: "static",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    "&.MuiTypography-root": {
      fontSize: "20px",
      fontWeight: 800,
    },
    color: "#727272",
  },
  emailListContainer: {
    height: "500px",
    overflow: "auto",
    padding: "10px 30px",
  },
  emailListItem: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    marginBottom: "8px",
    width: "100%",
    padding: "10px 20px",
    borderRadius: 0,
    borderBottom: "1px solid #ccc",
  },
  emailListItemImage: {
    marginRight: "8px",
    borderRadius: "50%",
    height: "40px",
    width: "40px",
  },
  emailListItemText: {
    textDecoration: "none",
    color: "#727272",
    "&:hover": {
      color: "#727272",
    },
    marginLeft: "10px",
    "&.MuiTypography-root": {
      fontWeight: 800,
    },
  },
}));

type EmailListModalProps = {
  isLoading: boolean;
  users: User[];
};

const EmailListModal = memo(({ isLoading, users }: EmailListModalProps) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.gridContainer}>
      <Grid item className={classes.gridItem}>
        <Box className={classes.titleContainer}>
          <Typography className={classes.titleText}>
            Select an account
          </Typography>
        </Box>
        <Grid container className={classes.emailListContainer}>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {users?.map((e: User) => (
                <Grid className={classes.emailListItem} key={e.id}>
                  <Link to={`/profile/${e.username}`}>
                    <Box
                      component="img"
                      src={e.profilepicture}
                      className={classes.emailListItemImage}
                    />
                  </Link>
                  <Link
                    to={`/profile/${e.username}`}
                    className={classes.emailListItemText}
                  >
                    <Typography>{e.name}</Typography>
                  </Link>
                </Grid>
              ))}
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
});

export default EmailListModal;
