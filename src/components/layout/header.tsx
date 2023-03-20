import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SignOut from "./signout";

const useStyles = makeStyles(() => ({
  headerContainer: {
    width: "100%",
    height: "60px",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    color: "black",
    paddingBottom: "10px",
    borderBottom: "2px solid rgba(109,109,109,.1)",
  },
  title: {
    "&.MuiTypography-root": {
      fontWeight: 600,
      fontSize: "1.5rem",
      color: "#6D6D6D",
    },
  },
  ProfilePicContainer: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    marginRight:"20px"
  },
  profilePic: {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
    cursor: "pointer",
  },
  username: {
    "&.MuiTypography-root": {
      marginLeft: "20px",
      fontWeight: 500,
      fontSize: "1rem",
      color: "#6D6D6D",
      cursor: "pointer",
    },
  },
}));

type HeaderProps = {
  pagename: string;
  user: User;
};

const Header = ({ pagename, user }: HeaderProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const title = pagename.charAt(0).toUpperCase() + pagename.slice(1);

  return (
    <Box className={classes.headerContainer}>
      <Box>
        <Typography className={classes.title}>{title}</Typography>
      </Box>
      <Box className={classes.ProfilePicContainer}>
        <Box
          component="img"
          src={user.profilepicture}
          alt="profilePic"
          className={classes.profilePic}
          onClick={() => setOpen(!open)}
        />
        <Box onClick={() => setOpen(!open)}>
          <Typography className={classes.username}>{user.name}</Typography>
        </Box>
      </Box>
      <SignOut open={open} setOpen ={setOpen} user={user}/>
    </Box>
  );
};

export default Header;
