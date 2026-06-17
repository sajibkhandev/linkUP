import { Button, styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import LoginImage from "../assets/loginimage.png";
import Image from "../components/Image";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { Bars } from "react-loader-spinner";

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
  const auth = getAuth();
  const navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [emailError, setEmailError] = useState("");
  let [passwordError, setPasswordError] = useState("");
  let [loader, setLoader] = useState(false);

  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  let handleLogin = () => {
    if (!email) {
      setEmailError("Give me a email");
    } else if (!emailRegex.test(email)) {
      setEmailError("vaild Email");
    }
    if (!password) {
      setPasswordError("Give me your Password");
    }
    if (email && password && emailRegex.test(email)) {
      // firebase code
      setLoader(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          if (userCredential.user.emailVerified) {
            // console.log(userCredential.user);

            toast.success("Login Successfully");
            setLoader(false);
            navigate("/home");
          } else {
            toast.error("Please Verify Your Email");
            setLoader(false);
          }
        })
        .catch((error) => {
          setLoader(false);
          const errorCode = error.code;
          if (errorCode.includes("auth/invalid-credential")) {
            toast.error("Invalid Credential");
          }
        });
    }
  };
  return (
    <Grid container>
      <Grid size={6}>
        <div className="flex justify-end h-screen items-center">
          <div className="w-140">
            <h2 className="text-[34px] text-[#11175D] font-bold ">
              Login to your account!
            </h2>
            <div>
              <Button
                sx={{ padding: "12px 30px", marginTop: "20px" }}
                variant="outlined"
                startIcon={<FcGoogle />}
              >
                Login with Google
              </Button>
            </div>

            <InputCustomize
              onChange={handleEmail}
              value={email}
              type="email"
              id="standard-basic"
              label="Email"
              variant="standard"
            />
            {emailError && (
              <p className="bg-red-500 w-3/5 py-2 px-4 rounded-md text-white mt-2">
                {emailError}
              </p>
            )}

            <InputCustomize
              onChange={handlePassword}
              value={password}
              type="password"
              id="standard-basic"
              label="Password"
              variant="standard"
            />
            {passwordError && (
              <p className="bg-red-500 w-3/5 py-2 px-4 rounded-md text-white mt-2">
                {passwordError}
              </p>
            )}

            <br />
            {loader ? (
              <Bars
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{ textAlign: "center" }}
                wrapperClass=""
                visible={true}
              />
            ) : (
              <ButtonCustomize onClick={handleLogin} variant="contained">
                Login to Continue
              </ButtonCustomize>
            )}
            <p className="ml-24 mb-10 text-base font-bold cursor-pointer text-[#03014C] ">
              Forget Password
            </p>

            <Link to="/registration">
              <p className="ml-16 text-sm cursor-pointer text-[#03014C] font-normal">
                Don’t have an account ?{" "}
                <span className="text-[#EA6C00]">Sign up</span>
              </p>
            </Link>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
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
