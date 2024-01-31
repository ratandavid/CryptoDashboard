import React, { useState } from "react";

function InputGrouptext(props) {
  const [grouptextval, setgrouptextval] = useState("");
  function changehandler(e) {
    setgrouptextval(e.target.value);
  }
  return (
    <div className="col-12 mb-3">
      <label className="visually-hidden" htmlFor={props.name}>
        {props.name}
      </label>
      <div className="input-group">
        <div className="input-group-text">{props.name}</div>
        <input
          type={props.type}
          className="form-control"
          id={props.name}
          value={grouptextval}
          onChange={changehandler}
          required
        />
      </div>
    </div>
  );
}

export default InputGrouptext;
