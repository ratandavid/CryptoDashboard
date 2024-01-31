import React from "react";
import "./css/marketcards.css";
import MarketCardsData from "./MarketCardsData";
function MarketCards() {
  return (
    <>
      {MarketCardsData.map((e) => {
        const { id, title } = e;
        return (
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12" key={id}>
            <div className="card Marketcards">
              <div className="card-body py-3">
                <h4 className="mb-3">{title}</h4>

                {e.child &&
                  e.child.length > 0 &&
                  e.child.map((e) => {
                    const { cointitle, coin, interest, icon, background } = e;
                    return (
                      <>
                        <div className="marketlist mb-2">
                          <a className="cryptoprice">
                            <div
                              className="icon"
                              style={{ backgroundColor: `${background}` }}
                            >
                              {icon}
                            </div>

                            <h5>{cointitle}</h5>
                          </a>
                          <span className="coins">{coin}</span>
                          <span className="interest ">{interest}</span>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default MarketCards;
