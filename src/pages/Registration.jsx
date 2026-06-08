import React from "react";
import Grid from "@mui/material/Grid";
import Image from "../components/Image";
import SignUP from "../assets/signupimage.png";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Registration = () => {
  return (
    <Grid container>
      <Grid size={6}>
        <div className="flex justify-end h-screen items-center">
          <div className="w-130">
            <h2 className="text-[34px] text-[#11175D] font-bold ">
              Get started with easily register
            </h2>
            <p className="text-xl text-black/50 font-normal pt-3 pb-10">
              Free register and you can enjoy it
            </p>

            <TextField
              sx={{ width: "60%" }}
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
            />
            <TextField
              sx={{ width: "60%" }}
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
            />
            <TextField
              sx={{ width: "60%" }}
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
            />
            <br />
            <Button variant="contained">Sign up</Button>
            <p>Already  have an account ? Sign In</p>

          </div>
        </div>
      </Grid>
      <Grid size={6}>
        <Image className="w-full h-screen object-cover" src={SignUP} />
      </Grid>
    </Grid>
  );
};

export default Registration;
