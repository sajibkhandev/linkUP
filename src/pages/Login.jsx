import { Button, styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import LoginImage from "../assets/loginimage.png";
import Image from "../components/Image";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail 
} from "firebase/auth";
import { getDatabase, push, ref, set } from "firebase/database";
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
const ForgetButtonCustomize = styled(Button)({
  padding: "10px 0px",
  width: "40%",
  background: "#5F35F5",
  fontSize: "16px",
  fontWeight: "500",
  fontFamily: "",
  borderRadius: "86px",
  textTransform: "capitalize",
  marginTop: "51px",
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
  const db = getDatabase();

  const navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [forgetEmail, setForgetEmail] = useState("");

  let [emailError, setEmailError] = useState("");
  let [passwordError, setPasswordError] = useState("");
  let [loader, setLoader] = useState(false);
  let [show, setShow] = useState(false);

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
            // localStorage.setItem()

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

  let handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        set(push(ref(db, "userlist/" )), {
              username: result.user.displayName,
              email: result.user.email,
              profileurl: "https://i.ibb.co.com/s9DhwbXD/avater.webp",
            });
        console.log(result);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  let handleSend=()=>{

    sendPasswordResetEmail(auth, forgetEmail)
  .then((result) => {
    console.log(result);
    if(result==null){
      toast.error("Invalid Credential")
    }else{
      navigate("/")
    }
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    if(errorCode.includes("auth/invalid-email")){
      toast.error("Invalid Credential")

    }
    console.log(errorCode);
  });
    

  }
  return (
    <>
  

    
      
       <Grid container>
        <Grid size={6}>
          <div className="flex justify-end h-screen items-center">
            <div className="w-140">
              <h2 className="text-[34px] text-[#11175D] font-bold ">
                Login to your account!
              </h2>
              <div onClick={handleGoogle}>
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
              <p
                onClick={()=>setShow(true)}
                className="ml-24 mb-10 text-base font-bold cursor-pointer text-[#03014C] "
              >
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
      {
        show
        &&
          <div className="absolute top-0 left-0 w-full h-screen bg-black/60 flex justify-center items-center ">
        <div className="w-[600px]  py-[100px] px-20 bg-white rounded-md">
          <h2 className="text-3xl font-medium">Forget Your Password</h2>
          <InputCustomize
          onChange={(e)=>setForgetEmail(e.target.value)}
            type="email"
            id="standard-basic"
            label="Reset Email"
            variant="standard"
          />
          <div className="flex gap-x-5">
             <ForgetButtonCustomize onClick={()=>setShow(false)}  variant="contained">Back To Login</ForgetButtonCustomize>
           <ForgetButtonCustomize onClick={handleSend}  variant="contained">Send</ForgetButtonCustomize>
          </div>
        </div>
      </div>
        
      }
      
     
   
      

    </>
  );
};

export default Login;
