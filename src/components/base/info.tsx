import React ,{memo}from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    padding: "2.5px 0",
  },
  title: {
    color: "#B6B6B6",
    minWidth: "120px",
    textAlign: "right",
    "&.MuiTypography-root": {
      fontSize: "1.3rem",
      fontWeight: 400,
      flexGrow: 0,
    },
  },
  colon: {
    "&.MuiTypography-root": {
      margin: "0 10px",
      flexGrow: 0,
    },
    color: "#B6B6B6",
  },
  details: {
    color: "#555555",
    "&.MuiTypography-root": {
      fontSize: "1.3rem",
      fontWeight: 600,
      flexGrow: 1,
    },
    wordWrap: "break-word",
  },
}));

type UserInfoProps = {
  title: string;
  details: string;
};

const UserInfo = memo(({ title, details }: UserInfoProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>{title}</Typography>
      <Typography className={classes.colon}>:</Typography>
      <Box>
      <Typography className={classes.details}>
        {details}
      </Typography>
      </Box>
    
    </Box>
  );
});

export default UserInfo;
