import React, { Fragment } from "react";
import myImage from "../../../src/assets/profilepicture.jpg";
import logo from "../../../src/assets/jotformLogo.svg";

const TablesHeader = () => {
  return (
    <Fragment>
      {/* HEADER BEGIN */}
      <header className="header">
        {/* LOGO BEGIN */}
        <div className="logo-container">
          <span className="logo-side">
            <img src={logo} alt="company logo" />
          </span>
          <div className="logo-divider"></div>
          <div className="logo-side-text">
            <p>Tablolar</p>
            <span class="material-symbols-outlined">expand_circle_down</span>

            {/* Buraya ikon ekle */}
          </div>
        </div>
        {/* LOGO END*/}
        <div>
          {/* <img src={myImage} alt="users profile " />*/}
          <p>Company Tables</p>
          <span class="material-symbols-outlined">expand_circle_down</span>
        </div>

        <div className="header-right-content">
          <button>Paylaş</button>
          <button>Yardım</button>
          <img src={myImage} alt="users profile " />
        </div>
      </header>
      {/* HEADER END */}
    </Fragment>
  );
};

export default TablesHeader;
