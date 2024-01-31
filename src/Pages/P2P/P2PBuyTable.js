import React, { useState } from "react";
import { Link } from "react-router-dom";

import BuyTableData from "./P2PBuyTabledata";
function P2PBuyTable() {
  const [deletedata, setDeleteData] = useState(BuyTableData);
  const handleDeleteClick = (tablerow) => {
    const addnewrow = [...BuyTableData];

    const index = BuyTableData.findIndex(
      (tablerow) => tablerow.id === tablerow
    );
    addnewrow.pop(index, 1);
    console.log("click delete", tablerow);
    setDeleteData(addnewrow);
  };
  return (
    <>
      <div className="table-responsive mt-2">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Pair</th>
              <th>Side</th>
              <th>Order</th>
              <th>Filled</th>
              <th>Price</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {deletedata.map((e) => {
              const { id, date, pair, side, order, filled, price, total } = e;
              return (
                <tr key={id}>
                  <td>{date}</td>
                  <td>{pair}</td>
                  <td>{side}</td>
                  <td>{order}</td>
                  <td>{filled}</td>
                  <td>{price}</td>
                  <td>{total}</td>
                  <td>
                    <div className="deletebtn">
                      <Link onClick={() => handleDeleteClick(id)}>
                        <i className="fa fa-trash"></i>
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default P2PBuyTable;
