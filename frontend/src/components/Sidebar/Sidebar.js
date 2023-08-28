import React, { Fragment } from "react";

const Sidebar = () => {
  return (
    <Fragment>
      <div>
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
        </div>

        <button>Arşiv</button>
        <div>
          <button>Çöp kutusu</button>
          <span class="material-symbols-outlined">delete</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
