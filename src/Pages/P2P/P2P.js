import React, { useState } from "react";

import "./css/p2p.css";
import P2PBuyTable from "./P2PBuyTable";
function P2P() {
  const [inrselect, setinrselect] = useState("INR");
  function onSelecthandler(e) {
    setinrselect(e.target.value);
    console.log(e.target.value);
  }
  return (
    <div className="container-fluid p2pcontainer">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="card markettablecard">
            <div className="card-header">
              <div className="crdcontent">
                <h4>Buy & Sell Bitcoin</h4>
                <nav>
                  <div className="nav nav-tabs " id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="buybitcoin-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#buybitcoin"
                      type="button"
                      role="tab"
                      aria-controls="buybitcoin"
                      aria-selected="true"
                    >
                      Buy
                    </button>
                    <button
                      className="nav-link"
                      id="sellbitcoin-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#sellbitcoin"
                      type="button"
                      role="tab"
                      aria-controls="sellbitcoin"
                      aria-selected="false"
                    >
                      Sell
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="card p2ptabcontentcard markettablecard">
            <div className="card-header">
              <div className="paymentarea">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Amount"
                />

                <select
                  className="form-select"
                  onChange={onSelecthandler}
                  value={inrselect}
                >
                  <option defaultValue="INR">INR</option>
                  <option value="JPY">JPY</option>
                  <option value="KES">KES</option>
                  <option value="KHR">KHR</option>
                  <option value="KWD">KWD</option>
                  <option value="KZT">KZT</option>
                  <option value="LAK">LAK</option>
                  <option value="LBP">LBP</option>
                  <option value="LKR">LKR</option>
                </select>

                <select className="form-select">
                  <option defaultValue="All Payments">All Payments</option>
                  <option value="UPI">UPI</option>
                  <option value="IMPS">IMPS</option>
                  <option value="RTGS">RTGS</option>
                  <option value="Gpay">Gpay</option>
                  <option value="Paytm">Paytm</option>
                  <option value="Phonepay">Phonepay</option>
                  <option value="Mokwikbi">Mokwikbi</option>
                </select>
              </div>
            </div>
            <div className="card-body">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="buybitcoin"
                  role="tabpanel"
                  aria-labelledby="buybitcoin-tab"
                >
                  <div className="buy-content">
                    <div className="buy-content_header">
                      <h4>P2P:BUY</h4>
                      <nav>
                        <div
                          className="nav nav-tabs "
                          id="nav-tab"
                          role="tablist"
                        >
                          <button
                            className="nav-link active"
                            id="bthcoin-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#bthcoin"
                            type="button"
                            role="tab"
                            aria-controls="bthcoin"
                            aria-selected="true"
                          >
                            BTH
                          </button>
                          <button
                            className="nav-link"
                            id="ethcoin-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#ethcoin"
                            type="button"
                            role="tab"
                            aria-controls="ethcoin"
                            aria-selected="false"
                          >
                            ETH
                          </button>
                          <button
                            className="nav-link"
                            id="bnbcoin-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#bnbcoin"
                            type="button"
                            role="tab"
                            aria-controls="bnbcoin"
                            aria-selected="false"
                          >
                            BNB
                          </button>
                        </div>
                      </nav>
                    </div>
                  </div>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="bthcoin"
                      role="tabpanel"
                      aria-labelledby="bthcoin-tab"
                    >
                      <P2PBuyTable />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="ethcoin"
                      role="tabpanel"
                      aria-labelledby="ethcoin-tab"
                    >
                      <P2PBuyTable />
                    </div>
                    <div
                      className="tab-pane fade "
                      id="bnbcoin"
                      role="tabpanel"
                      aria-labelledby="bnbcoin-tab"
                    >
                      <P2PBuyTable />
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="sellbitcoin"
                  role="tabpanel"
                  aria-labelledby="sellbitcoin-tab"
                >
                  <div className="buy-content">
                    <div className="buy-content_header">
                      <h4>P2P:Sell</h4>
                      <nav>
                        <div
                          className="nav nav-tabs "
                          id="nav-tab"
                          role="tablist"
                        >
                          <button
                            className="nav-link active"
                            id="sellbthcoin-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#sellbthcoin"
                            type="button"
                            role="tab"
                            aria-controls="sellbthcoin"
                            aria-selected="true"
                          >
                            BTH
                          </button>
                          <button
                            className="nav-link"
                            id="sellethcoin-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#sellethcoin"
                            type="button"
                            role="tab"
                            aria-controls="sellethcoin"
                            aria-selected="false"
                          >
                            ETH
                          </button>
                          <button
                            className="nav-link"
                            id="sellbnbcoin-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#sellbnbcoin"
                            type="button"
                            role="tab"
                            aria-controls="sellbnbcoin"
                            aria-selected="false"
                          >
                            BNB
                          </button>
                        </div>
                      </nav>
                    </div>
                  </div>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="sellbthcoin"
                      role="tabpanel"
                      aria-labelledby="sellbthcoin-tab"
                    >
                      <P2PBuyTable />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="sellethcoin"
                      role="tabpanel"
                      aria-labelledby="sellethcoin-tab"
                    >
                      <P2PBuyTable />
                    </div>
                    <div
                      className="tab-pane fade "
                      id="sellbnbcoin"
                      role="tabpanel"
                      aria-labelledby="sellbnbcoin-tab"
                    >
                      <P2PBuyTable />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default P2P;
