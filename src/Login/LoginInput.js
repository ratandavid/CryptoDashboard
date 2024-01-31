import React, { useState } from "react";

function LoginInput(props) {
  const [val, setval] = useState("");
  function Setinputval(e) {
    setval(e.target.value);
  }
  return (
    <>
      <input
        onChange={Setinputval}
        value={val}
        type={props.type}
        className="form-control mb-3"
        placeholder={props.placeholder}
        required
      ></input>
    </>
  );
}

export default LoginInput;
