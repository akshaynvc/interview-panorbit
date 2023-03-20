import React,{memo} from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import UserInfo from "../base/info";


const useStyles = makeStyles(() => ({
    companyTitle: {
      "&.MuiTypography-root": {
        fontWeight: 400,
        fontSize: "1.5rem",
        color: "#B6B6B6",
        marginTop: ".5rem",
      },
      textAlign: "center",
    },
  }));

type PersonalInfoProps = {
  user: User;
};
const CompanyInfo = memo(({ user }: PersonalInfoProps) => {
  const classes = useStyles();
  return (
    <Box >
      <Typography className={classes.companyTitle}>Company</Typography>
      <UserInfo title="Name" details={user.company.name} />
      <UserInfo title="catchphrase" details={user.company.catchPhrase} />
      <UserInfo title="bs" details={user.company.bs} />
    </Box>
  );
});

export default CompanyInfo;
