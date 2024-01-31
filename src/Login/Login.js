import React, { useState } from "react";
import "./css/login.css";
import Loginlogo from "../assets/logo-full.png";
import LoginInput from "./LoginInput";
import Button from "../Component/Buttons/Button";

import LoginHeader from "./LoginHeader";
import { Link } from "react-router-dom";
function Login() {
  const [show, setshow] = useState(true);

  function showhide() {
    setshow(false);
    console.log(show);
  }
  function backtoform() {
    setshow(true);
    console.log(show);
  }

  const [checked, setchecked] = useState(false);
  const checkHandler = () => {
    setchecked(checked);
  };
  const [regis, setregis] = useState(true);
  function bcktoform() {
    setregis(true);
  }
  return (
    <div className="loginformholder">
      <div className="row gx-0 vh-100 formholderrow">
        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 col-12 vh-100 bg-white ">
          {regis ? (
            <>
              {show ? (
                <>
                  <form className="loginform">
                    <div className="formlogo">
                      <img src={Loginlogo} className="img-fluid" />
                    </div>
                    <div className="formheading">
                      <LoginHeader
                        title={"Personal Information"}
                        discription={
                          "Enter your e-mail address and your password."
                        }
                      />
                    </div>
                    <div className="formbody mt-4">
                      <LoginInput type={"text"} placeholder={"User Name"} />
                      <LoginInput type={"password"} placeholder={"Password"} />
                      <div className="loginremember">
                        <Button type={"submit"} BtnName={"Login"} />
                        <input
                          type="checkbox"
                          onChange={checkHandler}
                          id="remembercheck"
                        />
                        &nbsp;<label htmlFor="remembercheck">Remember Me</label>
                      </div>

                      <div className="row">
                        <div className="col-12 mt-3">
                          <div className="forgetpass">
                            <button
                              className="btn"
                              type="button"
                              onClick={showhide}
                            >
                              Forget Password ?
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="formheading mt-3">
                        <div className="row">
                          <div className="Socailicons mb-3">
                            <LoginHeader title={"Sign In With"} />
                            <div className="socialiconsholder">
                              <ul>
                                <li>
                                  <Link to="https://www.facebook.com/">
                                    <i className="fab fa-facebook-f btn-facebook"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="https://www.google.com/">
                                    <i className="fab fa-google-plus-g btn-google-plus"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="https://www.linkedin.com/">
                                    <i className="fab fa-linkedin-in btn-linkedin"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="https://twitter.com/">
                                    <i className="fab fa-twitter btn-twitter"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <button
                            type="button"
                            className="btn"
                            onClick={() => setregis(false)}
                          >
                            Create Account
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <form className="loginform">
                    <div className="formlogo">
                      <img src={Loginlogo} className="img-fluid" />
                    </div>
                    <div className="formheading">
                      <LoginHeader
                        title={"Forget Password ?"}
                        discription={
                          "Enter your e-mail address below to reset your password."
                        }
                      />
                    </div>
                    <div className="formbody mt-4">
                      <LoginInput
                        type={"email"}
                        placeholder={"Enter Your Email"}
                      />

                      <div className="btn-groups">
                        <button
                          type="button"
                          className="backbtn"
                          onClick={backtoform}
                        >
                          Back
                        </button>

                        <Button type={"submit"} BtnName={"Submit"} />
                      </div>
                    </div>
                  </form>
                </>
              )}
            </>
          ) : (
            <>
              <form className="loginform">
                <div className="formlogo">
                  <img src={Loginlogo} className="img-fluid" />
                </div>
                <div className="formheading">
                  <LoginHeader
                    title={"Sign Up"}
                    discription={"Enter your personal details below:"}
                  />
                </div>
                <div className="formbody mt-4">
                  <LoginInput type={"text"} placeholder={"Full Name"} />
                  <LoginInput type={"text"} placeholder={"User Name"} />
                  <LoginInput type={"email"} placeholder={"Email Address"} />
                  <LoginInput type={"password"} placeholder={"Password"} />
                  <LoginInput
                    type={"password"}
                    placeholder={"Re-Type Your Password"}
                  />
                  <div className="btn-groups">
                    <button
                      type="button"
                      className="backbtn"
                      onClick={bcktoform}
                    >
                      Back
                    </button>

                    <Button type={"submit"} BtnName={"Submit"} />
                  </div>
                </div>
              </form>
              ;
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
