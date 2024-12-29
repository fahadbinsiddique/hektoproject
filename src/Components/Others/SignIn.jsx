import React from "react";
import SponserLogo from "../HomePage/SponserLogo";
import { Link } from "react-router-dom";


const SignIn = () => {
  return (
    <>
      <div className="mx-auto container">
        
<div className="py-12 ">
        <div className="   justify-center mx-auto shadow-lg rounded-sm    items-center text-center w-[544px] h-[474] bg-white   ">

          <h1 className="font-josef font-bold text-[32px] pt-16 ">Login</h1>

          <p className="font-Lato text-[17px] pb-12   text-[#9096B2]">
            Please login using account detail bellow.
          </p>

          <div className="space-y-7 pb-4">

          <input
            type="email"
            name=""
            placeholder="Email Address"
            id=""
            className="border-2  p-2 placeholder:font-Lato placeholder:text-[16px]  w-[432px] h-[52px] "
          />

          <input
            type="password"
            name=""
            placeholder="Password"
            id=""
            className="border-2 p-2 placeholder:font-Lato placeholder:text-[16px]  w-[432px] h-[52px] "
          />
          </div>

        <p className="font-Lato text-[17px] text-[#9096B2] text-left pl-[60px]  ">Forgot your password?</p>
        <div className="py-4 ">
        <button className="w-[432px]   rounded h-[47px] bg-[#FB2E86] text-white font-Lato font-bold text-[17px]">Sign In</button>
        </div>
        <p className="font-Lato pb-6 text-[17px] hover:scale-105 text-[#9096B2]">Don’t have an Account?<Link to={'/signup'}><span className="hover:underline"> Create account</span></Link></p>
        </div>

        </div>
        </div>
      

      <SponserLogo />
    </>
  );
};

export default SignIn;
