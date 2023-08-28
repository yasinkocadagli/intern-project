import React, { Fragment } from "react";
import Home from "../Home/Home";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.css";

const Layout = () => {
  return (
    <Fragment>
      <div className="layout">
        <Sidebar />
        <Home />
      </div>
    </Fragment>
  );
};

export default Layout;
