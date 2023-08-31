import React, { Fragment } from "react";
import TablesHeader from "../../components/Header/TablesHeader";
import "./Table.css";

const Table = () => {
  return (
    <Fragment>
      <TablesHeader />
      <nav className="nav-table">
        <div className="tables">
          <span class="material-symbols-outlined">table</span>
          <p>Company Tables</p>
          <button className="material-symbols-outlined">more_vert</button>
        </div>

        <div className="add-tab">
          <button className="material-symbols-outlined">add</button>
          <p>Sekme ekle</p>
        </div>
      </nav>

      <main className="table-main">
        <div className="table-searchbox">
          <span class="material-symbols-outlined">search</span>
          <input type="Searchbar" placeholder="Ara" />
        </div>

        <div className="table-filter">
          <p>Filter</p>
          <span class="material-symbols-outlined">filter_list</span>
        </div>
      </main>
    </Fragment>
  );
};

export default Table;
