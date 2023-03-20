import { Box, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import {
  CloseSharp as Close,
  ArrowDownwardSharp as DownArrow,
  SendSharp as SendIcon,
} from "@mui/icons-material";

const useStyles = makeStyles(() => ({
  container: {
    position: "absolute",
    right: 380,
    bottom: 0,
    height: "300px",
    width: "300px",
    background: "white",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderLeft: "1px solid #2C65C8",
    borderRight: "1px solid #2C65C8",
  },
  chatContainer: {
    position: "relative",
  },
  chat: {
    background: "#2C65C8",
    height: "40px",
    width: "100%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    zIndex: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 1rem",
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
  },
  profilePic: {
    height: "25px",
    width: "25px",
    borderRadius: "50%",
  },
  name: {
    "&.MuiTypography-root": {
      marginLeft: "1rem",
      color: "#fff",
    },
  },
  icon: {
    color: "#fff",
    marginLeft: "10px",
  },
  messageContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "100%",
    height: "50px",
    background: "#f7f7f7",
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
  },
  sendIcon:{
    color: "#2C65C8",
    marginRight: "10px",
  }
}));

type ChatBoxProps = {
  userDetails: {
    name: string;
    profilePic: string;
  };
  active: boolean;
  setActive: Function;
};

const ChatBox = ({ userDetails, active, setActive }: ChatBoxProps) => {
  const classes = useStyles();

  const handleClose = () => {
    setActive(false);
  };
  return active ? (
    <Box className={classes.container}>
      <Box className={classes.chatContainer}>
        <Box className={classes.chat}>
          <Box className={classes.profileContainer}>
            <Box
              component={"img"}
              src={userDetails.profilePic}
              alt="image"
              className={classes.profilePic}
            />
            <Typography className={classes.name}>{userDetails.name}</Typography>
          </Box>
          <Box className={classes.profileContainer}>
            <DownArrow onClick={handleClose} className={classes.icon} />
            <Close onClick={handleClose} className={classes.icon} />
          </Box>
        </Box>
      </Box>
      <Box className={classes.messageContainer}>
        <SendIcon className={classes.sendIcon}/>
      </Box>
    </Box>
  ) : null;
};

export default ChatBox;
