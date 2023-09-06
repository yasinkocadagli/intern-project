import React, { Fragment } from "react";
import myImages from "../../../src/assets/profilepicture.jpg";
import tablelogo from "../../../src/assets/jotformLogo.svg";
import "./TablesHeader.css";
import { Link } from "react-router-dom";

const TablesHeader = () => {
  return (
    <Fragment>
      <header className="table-header">
        {/* LOGO BEGIN */}
        <div className="table-logo-container">
          <span className="table-logo-side">
            <img src={tablelogo} alt="company logo" />
          </span>
          <div className="table-logo-divider"></div>

          <div className="table-logo-side-text">
            <p>Tablolar</p>
            <span class="material-symbols-outlined">expand_circle_down</span>
          </div>
        </div>
        {/* LOGO END*/}

        <div className="table-mid-content">
          <Link to="/layout">
            {" "}
            <img
              src={
                "https://plus.unsplash.com/premium_photo-1677620678338-81c1a71baff7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              }
              alt="users profile "
            />
          </Link>
          <p>Company Tables</p>
          <span class="material-symbols-outlined">expand_circle_down</span>
        </div>

        <div className="table-header-right-content">
          <button>
            <span class="material-symbols-outlined">share</span>
            Paylaş
          </button>
          <button>
            <span class="material-symbols-outlined">help</span>
            Yardım
          </button>

          <img src={myImages} alt="users profile " />
        </div>
      </header>
    </Fragment>
  );
};

export default TablesHeader;
