import { Box, Typography } from "@mui/material";
import UserInfo from "../base/info";
import {memo } from 'react';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  imageContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  profilePicture: {
    height: "180px",
    width: "180px",
    borderRadius: "50%",
  },
  name: {
    "&.MuiTypography-root": {
      fontWeight: 600,
      fontSize: "1.5rem",
      color: "#555555",
      marginTop: ".5rem",
    },
  },
  personalInfo: {
    marginBottom: "10px",
  },
}));

type PersonalInfoProps = {
  user: User;
};

const PersonalInfo = memo(({ user }: PersonalInfoProps) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.imageContainer}>
        <Box
          component={"img"}
          src={user.profilepicture}
          alt="profilePic"
          className={classes.profilePicture}
        />
        <Typography className={classes.name}>{user.name}</Typography>
      </Box>
      <Box className={classes.personalInfo}>
        <UserInfo title="username" details={user.username} />
        <UserInfo title="e-mail" details={user.email} />
        <UserInfo title="phone" details={user.phone} />
        <UserInfo title="website" details={user.website} />
      </Box>
    </>
  );
});

export default PersonalInfo;
