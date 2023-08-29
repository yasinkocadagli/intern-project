import React, { Fragment } from "react";


import "./Layout.css";
import Sidebar from "../../Pages/Sidebar/Sidebar";
import Home from "../../Pages/Home/Home";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <Fragment>
    <Header/>
      <div className="layout">
        <Sidebar />
        <Home/>
      </div>
    </Fragment>
  );
};

export default Layout;
