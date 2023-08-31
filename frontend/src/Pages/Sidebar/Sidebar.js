import React, { Fragment } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <Fragment>
      {/* SIDEBAR */}
      <div className="sidebar">

        <div className="table-creat ">
          <button className="first-button">Tablo oluştur</button>
        </div>
        
        

        <div className="all-section">
          <p>Tablolarım</p>
          <button className="all-buttons"><span class="material-symbols-outlined table-logo">table_rows_narrow</span>
          Tüm tablolar
          </button>
        </div>

        <div className="all-section">
          <p>Takımlarım</p>
          <button className="all-buttons">
            <span class="material-symbols-outlined">add_circle</span>
            Takım oluştur
          </button>
        </div>

        <div className="all-section">
          <button className="all-buttons">Benimle paylaşılanlar</button>
        </div>

        <div className="side-bottom">
          <div className="side-bottom-content">
            <button className="all-buttons">
              <span class="material-symbols-outlined favorites-icon">star</span>
              Favoriler
            </button>
          </div>

          <div className="side-bottom-content">
            <button className="all-buttons">
              <span class="material-symbols-outlined">inbox</span>Arşiv
            </button>
          </div>

          <div className="side-bottom-content">
            <button className="all-buttons">
              <span class="material-symbols-outlined">delete</span>
              Çöp kutusu
            </button>
          </div>
        </div>
      </div>
      {/* SIDEBAR */}
    </Fragment>
  );
};

export default Sidebar;
