import React from "react";
import MarketCards from "../../Component/MarketCards/MarketCards";
import MarketTable from "../../Component/MarketTable/MarketTable";

function Market() {
  return (
    <>
      <div className="container-fluid marketcontainer">
        <div className="row">
          <MarketCards />
          <MarketTable />
        </div>
      </div>
    </>
  );
}

export default Market;
