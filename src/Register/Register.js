import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-full.png";
import "./css/registration.css";
import Registerationinput from "./Registerationinput";
function Register() {
  return (
    <div className="container-fluid registerform">
      <div className="row justify-content-center vh-100 align-items-center">
        <form className="registration">
          <div className="registrationlogo mb-3">
            <img src={Logo} className="img-fluid" />
          </div>
          <div className="formheading mb-4">
            <h4>Sign up Your Account</h4>
          </div>
          <div className="registerformbody">
            <Registerationinput
              type={"text"}
              Name={"User Name"}
              placeholder={"Enter Your Name"}
            />
            <Registerationinput
              type={"email"}
              Name={"Email"}
              placeholder={"Enter Your Email"}
            />
            <Registerationinput
              type={"password"}
              Name={"Password"}
              placeholder={"Enter Your Password"}
            />
            <div className="registrationsubmit mb-3">
              <button className="btn registersubmit" type="submit">
                Submit
              </button>
            </div>
            <div className="alreadyaccount">
              <span>Already have an account? </span>
              <Link to="/login">Sign In</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
