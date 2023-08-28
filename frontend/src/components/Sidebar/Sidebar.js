import React, { Fragment } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <Fragment>
<<<<<<< Updated upstream
      {/* SIDEBAR */}
      <div className="sidebar">

        <div className="table-creat">
          <button className="first-button">Tablo oluştur</button>
=======
      <aside>
        <button>Tablo oluştur</button>
        <div>
          <p>Tablolarım</p>
          <button>Tüm tablolar</button>
        </div>
        <div>
          <p>Takımlarım</p>
          <button>Takım oluştur</button>
          <span class="material-symbols-outlined">add_circle</span>
        </div>
        <button>Benimle paylaşılanlar</button>
        <div>
          <button>Favoriler</button>
          <span class="material-symbols-outlined">star</span>
>>>>>>> Stashed changes
        </div>

        <div className="alltable">
          <p>Tablolarım</p>
          <button className="general-buttons">Tüm tablolar</button>
        </div>
<<<<<<< Updated upstream

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
=======
      </aside>
>>>>>>> Stashed changes
    </Fragment>
  );
};

export default Sidebar;
