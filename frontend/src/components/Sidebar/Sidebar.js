import React, { Fragment } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <Fragment>
      {/* SIDEBAR */}
      <div className="sidebar">

        <div className="table-creat">
          <button className="first-button">Tablo oluştur</button>
        </div>

        <div className="alltable">
          <p>Tablolarım</p>
          <button className="general-buttons">Tüm tablolar</button>
        </div>

        <div className="alltable">
          <p>Takımlarım</p>
          <button className="general-buttons icon-buttons"><span class="material-symbols-outlined icons-margin">add_circle</span>
            Takım oluştur</button>
        </div>

        <div className="bottom-buttons">
          <div className="group-buttons">
            <button className="general-buttons">Benimle paylaşılanlar</button>
          </div>

          <div className="group-buttons">
            <button className="general-buttons icon-buttons"><span class="material-symbols-outlined favorites-icon">star</span>
              Favoriler</button>
          </div>

          <div className="group-buttons">
            <button className="general-buttons">Arşiv</button>
          </div>

          <div className="group-buttons">
            <button className="general-buttons icon-buttons"><span class="material-symbols-outlined icons-margin">delete</span>
              Çöp kutusu</button>
          </div>
        </div>

      </div>
      {/* SIDEBAR */}
    </Fragment>
  );
};

export default Sidebar;
