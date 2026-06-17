import { Button, styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
} from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import SignUP from "../assets/signupimage.png";
import Image from "../components/Image";
import { Bars } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";

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
  marginTop: "30px",
  width: "60%",
  border: "0px",

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderWidth: "1px",
      borderRadius: "10px ",
    },
  },
});

const Registration = () => {
  const auth = getAuth();

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailError, setEmailError] = useState("");
  let [nameError, setNameError] = useState("");
  let [passwordError, setPasswordError] = useState("");
  let [loader, setLoader] = useState(false);

  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  let handleName = (e) => {
    setName(e.target.value);
    setNameError("");
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  let handleSignUP = () => {
    if (!email) {
      setEmailError("give me a email");
    }
    if (!emailRegex.test(email)) {
      setEmailError("vaild Email");
    }
    if (!name) {
      setNameError("Give me your name");
    }
    if (!password) {
      setPasswordError("Give me your Password");
    }
    if (email && emailRegex.test(email) && name && password) {
      setLoader(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

          sendEmailVerification(auth.currentUser).then(() => {
            console.log(userCredential.user);
            setLoader(false);
            toast.success("Registration Successfully");
          });

          
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          setLoader(false);

          if (errorCode.includes("auth/weak-password")) {
            setPasswordError("Your Password is so Week");
          }
          if (errorCode.includes("auth/email-already-in-use")) {
            setEmailError("Email Already Use");
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
              Get started with easily register
            </h2>
            <p className="text-xl text-black/50 font-normal pt-3 pb-10">
              Free register and you can enjoy it
            </p>

            <InputCustomize
              type="email"
              onChange={handleEmail}
              value={email}
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
            />
            {emailError && (
              <p className="bg-red-500 w-3/5 py-2 px-4 rounded-md text-white mt-2">
                {emailError}
              </p>
            )}

            <InputCustomize
              type="text"
              onChange={handleName}
              value={name}
              id="outlined-basic"
              label="Ful name"
              variant="outlined"
            />
            {nameError && (
              <p className="bg-red-500 w-3/5 py-2 px-4 rounded-md text-white mt-2">
                {nameError}
              </p>
            )}
            <InputCustomize
              type="type"
              onChange={handlePassword}
              value={password}
              id="outlined-basic"
              label="Password"
              variant="outlined"
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
              <ButtonCustomize onClick={handleSignUP} variant="contained">
                Sign up
              </ButtonCustomize>
            )}
            <div className="w-8/12">
              <Link to="/">
                <p className="text-sm cursor-pointer text-center text-[#03014C] font-normal">
                  Already have an account ?{" "}
                  <span className="text-[#EA6C00]">Sign In</span>
                </p>
              </Link>
            </div>
          </div>
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
      </Grid>
      <Grid size={6}>
        <Image className="w-full h-screen object-cover" src={SignUP} />
      </Grid>
    </Grid>
  );
};

export default Registration;
