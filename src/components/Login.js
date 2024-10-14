import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className=" ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg"
          alt="backgound_image"
        ></img>
      </div>
      <form className="absolute top-[25%] left-[35%] p-12 bg-black bg-opacity-80   w-4/12 flex flex-col  items-center  rounded-lg">
        <h1 className="text-white mb-3  text-2xl font-bold">
          {isSignIn ? "Sign In " : "Sign Up"}
        </h1>

        {!isSignIn ? (
          <input
            type="text"
            placeholder="Enter Name"
            className="p-4 m-2 w-10/12 rounded-lg  bg-slate-950 bg-opacity-30 border-2"
          ></input>
        ) : (
          ""
        )}

        <input
          type="text"
          placeholder="Enter Email"
          className="p-4 m-2 w-10/12 rounded-lg  bg-slate-950 bg-opacity-30 border-2 text-white"
        ></input>
        <input
          type="password"
          placeholder="Enter Password"
          className="p-4 m-2 w-10/12 rounded-lg  bg-slate-950 bg-opacity-30 border-2"
        ></input>
        <button className="p-4 m-4 w-10/12 bg-red-600  rounded-lg text-white">
          {isSignIn ? "Sign In " : "Sign Up"}
        </button>
        <p className="text-white cursor-pointer" onClick={handleSignIn}>
          {isSignIn
            ? " New to Netflix ? Sign Up Now"
            : " Already a User? SignIn here "}
        </p>
      </form>
    </div>
  );
};

export default Login;
