import React, { Fragment } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <Fragment>
      {/* SIDEBAR */}
      <div className="sidebar">

        <div className="table-creat ">
          <button className="first-button">CREATE TABLE</button>
        </div>



        <div className="all-section">
          <p>MY GROUPS</p>
          <button className="all-buttons"><span class="material-symbols-outlined table-logo">table_rows_narrow</span>
            All Forms
          </button>
        </div>

        <div className="all-section">
          <p>MY TEAMS</p>
          <div className="teams">
            <img src={"https://images.unsplash.com/photo-1630673377706-2a47ace78319?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMHRlYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"} alt="users profile " />
            <div className="teams-text">
              <h1>JR Builder Team</h1>
              <h2>1 Member</h2>
            </div>
          </div>

          <div className="teams">
            <img src={"https://images.unsplash.com/photo-1569098644584-210bcd375b59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3QlMjB0ZWFtfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"} alt="users profile " />
            <div className="teams-text">
              <h1>Product Team</h1>
              <h2>1 Member</h2>
            </div>
          </div>

          <button className="all-buttons">
            <span class="material-symbols-outlined">add_circle</span>
            Create Team
          </button>
        </div>

        <div className="all-section">
          <button className="all-buttons">SHARED WITH ME</button>
        </div>

        <div className="side-bottom">
          <div className="side-bottom-content">
            <button className="all-buttons">
              <span class="material-symbols-outlined favorites-icon">star</span>
              <p>Favorites</p>
            </button>
          </div>

          <div className="side-bottom-content">
            <button className="all-buttons">
              <span class="material-symbols-outlined">inbox</span><p>Archive</p>
            </button>
          </div>

          <div className="side-bottom-content">
            <button className="all-buttons">
              <span class="material-symbols-outlined">delete</span>
              <p>Trash</p>
            </button>
          </div>
        </div>
      </div>
      {/* SIDEBAR */}
    </Fragment>
  );
};

export default Sidebar;
