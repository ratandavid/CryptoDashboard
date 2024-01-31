import React from "react";
import ICOListData from "./ICOListCardsData";
function ICOListCards() {
  return (
    <>
      {ICOListData.map((e) => {
        const { id, icon, title, titlespan, price, interest, pricespan, date } =
          e;
        return (
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 ">
            <div className="card icolistcard" key={id}>
              <div className="card-body">
                <div className="title mb-4">
                  {icon}
                  <div className="crd-title">
                    <h4>{title}</h4>
                    <span>{titlespan}</span>
                  </div>
                </div>
                <div className="crd-content">
                  <div className="leftside">
                    <p className="textblack">{price}</p>
                    <span>{pricespan}</span>
                  </div>
                  <div className="rightside">
                    <p className="textblack">{interest}</p>
                    <span>{date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ICOListCards;
