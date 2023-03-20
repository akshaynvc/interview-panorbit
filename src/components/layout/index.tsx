import React, { ReactNode, useEffect } from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { navItems } from "./data";
import { useLocation } from "react-router-dom";
import SideBar from "./sidebar";
import Header from "./header";
import { selector } from "../../redux/selector";
import { useSelector } from "react-redux";
import ChatList from "./chatList";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    padding: "30px",
    position: "relative",
  },
  sectionContainer: {
    display: "flex",
    bgcolor: "white",
    width: "100%",
    flexDirection: "column",
    marginLeft: "50px",
  },
  pageContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    color: "black",
  },
  chatContainer:{
    position:'absolute',
    bottom:0,
    right:0,
    width:'300px',
    height:'200px'
  }
}));

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const classes = useStyles();
  const location = useLocation();
  const { users } = useSelector(selector);
  const route = location.pathname;
  const pagename: string = route.split("/")[1];
  const username: string = route.split("/")[2];

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      if (username) {
        localStorage.setItem("username", username);
      }
    }
  }, [username]);

  const userDetails = users.filter((e: User) => e.username === username);
  const user = userDetails[0];
  return (
    <>
      <Box className={classes.container}>
        <SideBar navItems={navItems} username={username} />
        <Box className={classes.sectionContainer}>
          <Header pagename={pagename} user={user} />
          <Box className={classes.pageContainer}>{children}</Box>
        </Box>
      </Box>
      <Box className={classes.chatContainer} >
        <ChatList  users={users}/>
      </Box>
    </>
  );
};

export default Layout;
