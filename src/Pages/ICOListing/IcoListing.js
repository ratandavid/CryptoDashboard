import React from "react";
import ICOListCards from "../../Component/ICOListCards/ICOListCards";

import "./css/icolisting.css";

function IcoListing() {
  return (
    <div className="container-fluid icolistcontainer">
      <div className="row">
        <ICOListCards />
      </div>
    </div>
  );
}

export default IcoListing;
