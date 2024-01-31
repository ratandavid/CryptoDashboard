import React from "react";

function LoginHeader(props) {
  return (
    <>
      <h4>{props.title}</h4>
      <span>{props.discription}</span>
    </>
  );
}

export default LoginHeader;
