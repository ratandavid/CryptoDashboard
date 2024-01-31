import React, { useState } from "react";
import "./css/Header.css";
function Header(props) {
  const [search, setsearch] = useState("");

  function Searchvalue(e) {
    setsearch(e.target.value);
  }
  return (
    <>
      <div className="container-fluid headerContainer">
        <div className="row">
          <div className="col-sm-4">
            <div className="headerContent">
              <div className="btntoggle">
                <i className="fa-solid fa-bars" onClick={props.changewidth}></i>
              </div>
              <div className="HeaderTitle">
                <h1>{props.title}</h1>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="SearchInput">
              <div className="input-group ">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                  type="text"
                  value={search}
                  onChange={Searchvalue}
                  className="form-control header-search"
                  placeholder="Search Here..."
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
