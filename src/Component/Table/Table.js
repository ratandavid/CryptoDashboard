import React, { useState } from "react";
import MarketTableData from "../../Component/MarketTable/MarketTableData";
function Table({ id }) {
  console.log("erel==>", id);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Change</th>
          <th>24 High / 24 Low</th>
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
            highlow,
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
                <td>{highlow}</td>
                <td>{volume}</td>
                <td>{marketCap}</td>
                <td>{action}</td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
