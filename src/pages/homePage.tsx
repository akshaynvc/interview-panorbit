import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import { Box } from "@mui/material";
import BannerSVG from "../components/home/banner";
import { fetchUsers } from "../redux/thunk";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { selector } from "../redux/selector";
import EmailListModal from "../components/home/emaillistContainer";

const useStyles = makeStyles<Theme>(() => ({
  container: {
    position: "relative",
    background: "#F6F6F6",
    height: "100vh",
  }
}));

const HomePage: React.FC = () => {
  const classes = useStyles();
  const dispatch: AppDispatch = useDispatch();
  const { users, isLoading } = useSelector(selector);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Box className={classes.container}>
      <BannerSVG />
      <EmailListModal users={users} isLoading={isLoading} />
    </Box>
  );
};

export default HomePage;
