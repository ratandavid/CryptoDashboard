import React, { useState } from "react";

function InputDropdown(props) {
  const [inputval, setinputval] = useState("");
  function changeval(e) {
    setinputval(e.target.value);
  }
  const [dropdownval, setdropdownval] = useState("");
  function changedropdownval(e) {
    setdropdownval(e.target.value);
  }
  return (
    <div className="input-group mb-3 inputdropdown">
      <input
        type="text"
        className="form-control"
        placeholder={props.placeholder}
        value={inputval}
        onChange={changeval}
        required
      />
      <select
        className="btn btn-outline-secondary dropdown-toggle"
        value={dropdownval}
        onChange={changedropdownval}
      >
        <option value="Mark">Mark</option>
        <option value="Last">Last</option>
      </select>
    </div>
  );
}

export default InputDropdown;
