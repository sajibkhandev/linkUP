import React from "react";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Sideber from '../components/Sideber'

const Rootlayout = () => {
  return (
    <div>
      
      <Grid container spacing={2}>
        <Grid size={2}>
            <Sideber/>
        </Grid>
        <Grid size={10}>
            <Outlet/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Rootlayout;
