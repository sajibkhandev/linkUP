import { Button, styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import SignUP from "../assets/signupimage.png";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import { useState } from "react";

const ButtonCustomize= styled(Button)({
  padding: '20px 0px',
  width:'60%',
  background:'#5F35F5',
  fontSize:"20px",
  fontWeight:"600",
  fontFamily:"",
  borderRadius:"86px",
  textTransform:"capitalize",
  marginTop:"51px",
  marginBottom:"31px"

})
const InputCustomize= styled(TextField)({
  marginTop:"30px",
  width:"60%",
  border:"0px",
 
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderWidth: '1px',
      borderRadius:"10px ",
  },
}
 
 

})

const Registration = () => {
  let [name,setName]=useState("")
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")

  let handleSignUP=()=>{
    if(!email){
      console.log("give me a email");
      

    }
    console.log(name);
    console.log(email);
    console.log(password);
    
  }
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
            onChange={(e)=>setEmail(e.target.value)}
              value={email}
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
            />
            <InputCustomize
             type="text"
              onChange={(e)=>setName(e.target.value)}
             value={name}
              id="outlined-basic"
              label="Ful name"
              variant="outlined"
            />
            <InputCustomize
            type="password"
             onChange={(e)=>setPassword(e.target.value)}
              value={password}
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
            <br />
            <ButtonCustomize onClick={handleSignUP} variant="contained">Sign up</ButtonCustomize>
            <div className="w-8/12">
            <Link to="/login">
            <p className="text-sm cursor-pointer text-center text-[#03014C] font-normal">Already  have an account ? <span className="text-[#EA6C00]">Sign In</span></p>
            </Link>
              
            </div>

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
