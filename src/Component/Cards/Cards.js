import React from "react";
import "./css/card.css";

function Cards(props) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4>
            {props.SVG} {props.Title}
          </h4>
        </div>
        <div className="card-body">{props.CrdBody}</div>
      </div>
    </>
  );
}

export default Cards;
