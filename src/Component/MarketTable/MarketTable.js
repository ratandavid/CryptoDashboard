import React from "react";
import Table from "../Table/Table";
import "./css/markettable.css";

function MarketTable() {
  return (
    <>
      <div className="col-sm-12 col-12">
        <div className="card markettablecard">
          <div className="card-header">
            <ul className="nav nav-tabs " id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="allcryptotab"
                  data-bs-toggle="tab"
                  data-bs-target="#allcrypto"
                  type="button"
                  role="tab"
                  aria-controls="allcrypto"
                  aria-selected="true"
                >
                  All Cryptos
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="spotMarketstab"
                  data-bs-toggle="tab"
                  data-bs-target="#spotMarkets"
                  type="button"
                  role="tab"
                  aria-controls="spotMarkets"
                  aria-selected="false"
                >
                  Spot Markets
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="futureMarketstab"
                  data-bs-toggle="tab"
                  data-bs-target="#futureMarkets"
                  type="button"
                  role="tab"
                  aria-controls="futureMarkets"
                  aria-selected="false"
                >
                  Future Markets
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="newListingstab"
                  data-bs-toggle="tab"
                  data-bs-target="#newListing"
                  type="button"
                  role="tab"
                  aria-controls="newListing"
                  aria-selected="false"
                >
                  New Listing
                </button>
              </li>
            </ul>
          </div>
          <div className="card-body pt-0">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="allcrypto"
                role="tabpanel"
                aria-labelledby="allcryptotab"
              >
                <div className="table-responsive">
                  {/* <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>24 Volume</th>
                        <th>Market Cap</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {MarketTableData.map((e) => {
                        const {
                          id,
                          svg,
                          token,
                          tokenName,
                          price,
                          change,
                          volume,
                          marketCap,
                          action,
                        } = e;
                        return (
                          <>
                            <tr key={id}>
                              <td>
                                <div className="market-title">
                                  <div className="icon">{svg}</div>
                                  <span>{token}</span>&nbsp;
                                  <span className="coin">{tokenName}</span>
                                </div>
                              </td>
                              <td>{price}</td>
                              <td>{change}</td>
                              <td>{volume}</td>
                              <td>{marketCap}</td>
                              <td>{action}</td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table> */}
                  <Table />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="spotMarkets"
                role="tabpanel"
                aria-labelledby="spotMarketstab"
              >
                <div className="table-responsive">
                  <Table />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="futureMarkets"
                role="tabpanel"
                aria-labelledby="futureMarketstab"
              >
                <div className="table-responsive">
                  <Table />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="newListing"
                role="tabpanel"
                aria-labelledby="newListingstab"
              >
                <div className="table-responsive">
                  <Table />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MarketTable;
