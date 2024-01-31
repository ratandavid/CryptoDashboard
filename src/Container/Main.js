import React, { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboardpage/Dashboard";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Market from "../Pages/MarketPage/Market.js";
import Footer from "../Component/Footer/Footer";

import "./Sidebar/css/Main.css";
import IcoListing from "../Pages/ICOListing/IcoListing";
import P2P from "../Pages/P2P/P2P";
import FutureTrading from "../Pages/FutureTrading/FutureTrading";

function Home() {
  const [navValue, setValue] = useState("");

  function GetValue(value) {
    setValue(value);
    console.log(value);
  }
  return (
    <div className="maincontainer">
      <Sidebar getvalue={GetValue} />

      <div className="dashbody">
        <Header title={navValue} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

function Main() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="market" element={<Market />} />
        <Route path="icolisting" element={<IcoListing />} />
        <Route path="p2p" element={<P2P />} />
        <Route path="futuretrading" element={<FutureTrading />} />
      </Route>
    </Routes>
  );
}

export default Main;
