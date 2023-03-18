import React, { ReactNode } from "react";
import { Grid } from "@mui/material";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={4}>
        hello
      </Grid>
      <Grid item lg={12}>{children}</Grid>
    </Grid>
  );
};

export default Layout;
