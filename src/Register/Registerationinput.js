import React, { useState } from "react";

function Registerationinput(props) {
  const [value, setvalue] = useState("");
  function changeHandler(e) {
    setvalue(e.target.value);
  }
  console.log(value);
  return (
    <>
      <div class="mb-3">
        <label htmlFor={props.Name} className="form-label">
          {props.Name}
        </label>
        <input
          onChange={changeHandler}
          type={props.type}
          value={value}
          className="form-control"
          id={props.Name}
          placeholder={props.placeholder}
          required
        />
      </div>
    </>
  );
}

export default Registerationinput;
