import React, { Fragment } from "react";
import TablesHeader from "../../components/Header/TablesHeader";

const Table = () => {
  return (
    <Fragment>
      <TablesHeader />
      <nav>
        <div>
          <span class="material-symbols-outlined">table</span>
          <p>Company Tables</p>
          <button className="material-symbols-outlined">more_vert</button>
        </div>
        <div>
          <button className="material-symbols-outlined">add</button>
          <p>Sekme ekle</p>
        </div>
      </nav>
      <main>
        <div>
          <span class="material-symbols-outlined">search</span>
          <input type="Searchbar" placeholder="Ara" />
        </div>
        <div>
          <p>Filter</p>
          <span class="material-symbols-outlined">filter_list</span>
        </div>
      </main>
    </Fragment>
  );
};

export default Table;
