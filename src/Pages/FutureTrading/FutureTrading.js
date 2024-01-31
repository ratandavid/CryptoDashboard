import React from "react";
import InputDropdown from "../../Component/Inputgrouptext/InputDropdown";
import InputGrouptext from "../../Component/Inputgrouptext/InputGrouptext";
import "./css/futuretrading.css";
function FutureTrading() {
  return (
    <div className="container-fluid futuretradingcontainer">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="card markettablecard">
            <div className="card-header">
              <h4>Future Trade</h4>
            </div>
            <div className="card-body">
              <div className="availablebalance d-flex align-items-center justify-content-between mb-2">
                <span>Avbl Balance</span>
                <span>210,800 USDT</span>
              </div>
              <form className="row formrow">
                <InputGrouptext name={"Price"} type={"text"} />
                <InputGrouptext name={"Size"} type={"number"} />
                <div className="takeprofitheading">
                  <span>TP/SL</span>
                </div>
                <InputDropdown placeholder={"Take Profit"} />
                <InputDropdown placeholder={"Stop Loss"} />
                <InputDropdown placeholder={"Stop Price"} />

                <div className="costprice availablebalance d-flex align-items-center justify-content-between mb-2">
                  <span>Cost 0.00 USDT</span>
                  <span>Max 6.00 USDT</span>
                </div>

                <div className="formbtn d-flex align-items-center justify-content-between">
                  <button type="submit" className="btn">
                    Buy
                  </button>
                  <button type="button" className="btn sellbtn">
                    Sell
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FutureTrading;
