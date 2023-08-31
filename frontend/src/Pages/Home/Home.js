import React, { Fragment, useState } from "react";

import "./Home.css";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [selectedTableIds, setSelectedTableIds] = useState([]);

  const showNavbarHandler = (index) => {
    const newSelectedTableIds = selectedTableIds.includes(index)
      ? selectedTableIds.filter((id) => id !== index)
      : [...selectedTableIds, index];
    setSelectedTableIds(newSelectedTableIds);

    setShowNavbar(
      newSelectedTableIds.length === 0 ? false : true 
    );
  };

  const tableContents = [
    { name: "Company Tables", checked: false },
    { name: "Music Tables", checked: false },
  ];

  return (
    <Fragment>
      <div className="main">
        {!showNavbar ? (
          <div className="up-content">
            <div className="update-button">
              <button>
                <span className="material-symbols-outlined">notes</span> Son
                güncelleme
              </button>
            </div>

            <div className="search-box">
              <span className="material-symbols-outlined">search</span>
              <input type="search" placeholder="Tablolarımı ara" />
            </div>
          </div>
        ) : (
          <div className="mid-buttons">
            <button>
              <span className="material-symbols-outlined">groups</span>Move to team
            </button>
            <button>
              <span className="material-symbols-outlined">edit</span>Edit
            </button>
            <button>
              <span className="material-symbols-outlined">share</span>Share
            </button>
            <button>
              <span className="material-symbols-outlined">inbox</span>Archive
            </button>
            <button>
              <span className="material-symbols-outlined delete-button">delete</span>Move to Trash
            </button>
          </div>
        )}

        <div className="bottom-line"></div>
        <div className="content">
          <ul className="table-list">
            {tableContents.map((tables, index) => (
              <li key={index}>
                <span className="material-symbols-outlined">star</span>
                <input
                  type="checkbox"
                  value={index}
                  onChange={() => showNavbarHandler(index)}
                  checked={selectedTableIds.includes(index)}
                />
                {tables.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
