import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useRef, memo } from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  Container: {
    width: "15rem",
    height: "18rem",
    borderRadius: "2rem",
    background: "#f7f7f7",
    position: "absolute",
    right: "30px",
    top: "100px",
    zIndex: 50,
    padding: "0 20px",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "60%",
    borderBottom: "1px solid rgba(109,109,109,.3)",
  },
  profilePic: {
    width: "6rem",
    height: "6rem",
    borderRadius: "50%",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40%",
  },
  button: {
    "&.MuiButton-root": {
      background: "red",
      border: "1px solid red",
      padding: "10px 20px",
      borderRadius: "20px",
      color: "#f7f7f7",
      "&:hover": {
        background: "#fff",
        color: "red",
        border: "1px solid #fff",
      },
    },
  },
  userDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
  },
}));

type SignOutProps = {
  open: boolean;
  setOpen: Function;
  user: User;
};

const SignOut = memo(({ open, setOpen, user }: SignOutProps) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    navigate("/");
  };

  return open ? (
    <Box
      component={"div"}
      id="signoutDiv"
      className={classes.Container}
      ref={ref}
    >
      <Box className={classes.profileContainer}>
        <Box
          component="img"
          src={user.profilepicture}
          alt="profilePic"
          className={classes.profilePic}
          onClick={() => setOpen(!open)}
        />
        <Box className={classes.userDetails}>
          <Typography color={"#555555"}>{user.email}</Typography>
          <Typography color={"#6d6d6d"}>{user.username}</Typography>
        </Box>
      </Box>
      <Box className={classes.buttonContainer}>
        <Button
          variant="outlined"
          className={classes.button}
          disableRipple
          disableFocusRipple
          onClick={handleClick}
        >
          signout
        </Button>
      </Box>
    </Box>
  ) : null;
});

export default SignOut;
