import React from "react";

function Button(props) {
  return (
    <>
      <button className="btn" type={props.type}>
        {props.BtnName}
      </button>
    </>
  );
}

export default Button;
