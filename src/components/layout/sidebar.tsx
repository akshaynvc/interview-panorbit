import React, { useState,memo } from "react";
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  appBar: {
    flex: "0 0 240px ",
    background: "linear-gradient(to bottom, #395AC8, #603AC8)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    borderRadius: "20px",
  },
  list: {
    width: "80%",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  listItemButton: {
    width: "100%",
    textAlign: "left",
  },
  listItemText: {
    padding: "5px 0",
    opacity: 0.8,
  },
  selectedListItemText: {
    padding: "5px 0",
    opacity: 1,
  },
  divider: {
    background: "white",
    opacity: 0.8,
  },
}));

type SidebarProps = {
  navItems: {
    id: string;
    route: string;
    item: string;
  }[];
  username:string
};

const SideBar = memo(({ navItems,username }: SidebarProps) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Box className={classes.appBar}>
      <List component="nav" className={classes.list}>
        {navItems?.map((e, i) => (
          <Link
            key={e.id}
            to={`${e.route}/${username}`}
            className={classes.link}
          >
            <ListItemButton
              className={classes.listItemButton}
              disableRipple
              sx={{
                '&:hover':{
                  background:'transparent'
                }
              }}
              selected={selectedIndex === i}
              onClick={() => handleListItemClick(i)}
            >
              <ListItemText
                primary={e.item}
                className={
                  selectedIndex === i
                    ? classes.selectedListItemText
                    : classes.listItemText
                }
              />
            </ListItemButton>
            {i !== navItems.length - 1 && (
              <Divider className={classes.divider} />
            )}
          </Link>
        ))}
      </List>
    </Box>
  );
});

export default SideBar;
