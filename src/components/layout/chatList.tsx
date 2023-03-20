import { useState,memo } from "react";
import { Box, Typography } from "@mui/material";
import {
  Chat as ChatIcon,
  ArrowDownwardSharp as DownArrow,
  ArrowUpwardSharp as UpArrow,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import ChatBox from "./chatBox";

const useStyles = makeStyles(() => ({
  mainContainer: {
    position: "relative",
  },
  container: {
    position: "fixed",
    bottom: 0,
    right: 50,

    width: "300px",
    borderLeft: "1px solid #2C65C8",
    borderRight: "1px solid #2C65C8",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    transition: "height 0.3s ease",
  },
  chatBox: {
    background: "#2C65C8",
    height: "40px",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    zIndex: 200,
  },
  chatIconContainer: {
    display: "flex",
    alignItem: "center",
    justifyContent: "space-between",
    padding: ".5rem",
  },
  chatTextContainer: {
    display: "flex",
  },
  chatText: {
    color: "#fff ",
    "&.MuiTypography-root": {
      marginLeft: "1rem",
    },
  },
  chatListContainer: {
    padding: " .5rem 1rem",
    background: "white",
    height: "100%",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "8px",
      backgroundColor: "#F6F6F6",
    },
    "&::-webkit-scrollbar-track": {
      marginRight: "20px",
    },
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "10px",
    overflow: "auto",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
  },
  name: {
    "&.MuiTypography-root": {
      marginLeft: "1rem",
    },
    cursor:'pointer'
  },
  chatActive: {
    height: "10px",
    width: "10px",
    borderRadius: "50%",
  },
  profilePic: {
    height: "2rem",
    width: "2rem",
    borderRadius: "50%",
    cursor:'pointer'
  },
  icon: {
    color: "#fff",
  },
}));

type ChatListProps = {
  users: User[];
};

type StateProps = {
  name: string;
  profilePic: string;
};

const ChatList = memo(({ users }: ChatListProps) => {
  const [expanded, setExpanded] = useState(false);
  const [details, setDetails] = useState<StateProps>({
    name: "",
    profilePic: "",
  });
  const [active, setActive] = useState(false);
  const classes = useStyles();
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const handleClick = (name: string, profilePic: string) => {
    setDetails({
      name: name,
      profilePic: profilePic,
    });
    setActive(true);
  };
  return (
    <>
      <Box className={classes.mainContainer}>
        <Box
          className={classes.container}
          sx={{
            height: expanded ? "300px" : "40px",
          }}
        >
          <Box className={classes.chatBox} onClick={toggleExpanded}>
            <Box className={classes.chatIconContainer}>
              <Box className={classes.chatTextContainer}>
                <ChatIcon className={classes.icon} />
                <Typography className={classes.chatText}>chat</Typography>
              </Box>
              {expanded ? (
                <DownArrow className={classes.icon} />
              ) : (
                <UpArrow className={classes.icon} />
              )}
            </Box>
          </Box>
          <Box className={classes.chatListContainer}>
            {users?.map((e: User) => (
              <Box className={classes.listItem} key={e.id}>
                <Box className={classes.imageContainer}>
                  <Box
                    component={"img"}
                    src={e.profilepicture}
                    className={classes.profilePic}
                    onClick={() => handleClick(e.name, e.profilepicture)}
                  />
                  <Box  onClick={() => handleClick(e.name, e.profilepicture)}>
                    <Typography className={classes.name}>{e.name}</Typography>
                  </Box>
                </Box>
                <Box
                  className={classes.chatActive}
                  sx={{
                    background: e.name.includes("a") ? "#D4D4D4" : "green",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <ChatBox userDetails={details} active={active} setActive={setActive}/>
    </>
  );
});

export default ChatList;
