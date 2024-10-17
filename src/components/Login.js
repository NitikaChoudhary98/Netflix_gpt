import React, { useState, useRef } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const [errormessage, setErrorMessage] = useState(null);
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const message = isSignIn
      ? checkValidData(email.current.value, password.current.value)
      : checkValidData(
          email.current.value,
          password.current.value,
          name.current.value
        );
    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      // Sign-up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://lh3.googleusercontent.com/a/ACg8ocIdrhMHOLX0_cpeOmMyI-4A87oiNO00jyOheibm6cH9LTY3Qcq0=s288-c-no",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          // You may want to set a user display name here, e.g., using updateProfile
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    } else {
      // Sign-in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className=" ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg"
          alt="background_image"
          className=""
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-[25%] left-[35%] p-12 bg-black bg-opacity-80   w-4/12 flex flex-col  items-center  rounded-lg"
      >
        <h1 className="text-white mb-3  text-2xl font-bold">
          {isSignIn ? "Sign In " : "Sign Up"}
        </h1>

        {!isSignIn ? (
          <input
            ref={name}
            type="text"
            placeholder="Enter Name"
            className="p-4 m-2 w-10/12 rounded-lg  bg-slate-950 bg-opacity-30 border-2  text-white"
          ></input>
        ) : (
          ""
        )}

        <input
          type="text"
          placeholder="Enter Email"
          ref={email}
          className="p-4 m-2 w-10/12 rounded-lg  bg-slate-950 bg-opacity-30 border-2 text-white"
        ></input>
        <input
          type="password"
          ref={password}
          placeholder="Enter Password"
          className="p-4 m-2 w-10/12 rounded-lg  bg-slate-950 bg-opacity-30 border-2 text-white"
        ></input>
        <button
          className="p-4 m-4 w-10/12 bg-red-600  rounded-lg text-white"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In " : "Sign Up"}
        </button>
        <p className="text-red-600">{errormessage}</p>
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
