import { Button, styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import LoginImage from "../assets/loginimage.png";
import Image from "../components/Image";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const ButtonCustomize = styled(Button)({
  padding: "20px 0px",
  width: "60%",
  background: "#5F35F5",
  fontSize: "20px",
  fontWeight: "600",
  fontFamily: "",
  borderRadius: "86px",
  textTransform: "capitalize",
  marginTop: "51px",
  marginBottom: "31px",
});
const InputCustomize = styled(TextField)({
  marginTop: "50px",
  width: "60%",
  border: "0px",

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderWidth: "1px",
      borderRadius: "10px ",
    },
  },
});

const Login = () => {
  return (
    <Grid container>
      <Grid size={6}>
        <div className="flex justify-end h-screen items-center">
          <div className="w-140">
            <h2 className="text-[34px] text-[#11175D] font-bold ">
              Login to your account!
            </h2>
            <div>
              <Button sx={{padding:"12px 30px",marginTop:"20px"}} variant="outlined" startIcon={<FcGoogle />}>
              Login with Google
            </Button>
            </div>

            <InputCustomize
              type="email"
              id="standard-basic"
              label="Email"
              variant="standard"
            />

            <InputCustomize
              type="password"
              id="standard-basic"
              label="Password"
              variant="standard"
            />

            <br />
            <ButtonCustomize variant="contained">
              Login to Continue
            </ButtonCustomize>
            <p className="ml-24 mb-10 text-base font-bold cursor-pointer text-[#03014C] ">Forget Password</p>
            
            <Link to="/registration">
            <p className="ml-16 text-sm cursor-pointer text-[#03014C] font-normal">
              Don’t have an account ?{" "}
              <span className="text-[#EA6C00]">Sign up</span>
            </p>
            </Link>

            
          </div>
        </div>
      </Grid>
      <Grid size={6}>
        <Image className="w-full h-screen object-cover" src={LoginImage} />
      </Grid>
    </Grid>
  );
};

export default Login;
