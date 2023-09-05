import React, { Fragment, useEffect, useState } from "react";
import myImage from "../../../src/assets/profilepicture.jpg";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [selectedTableIds, setSelectedTableIds] = useState([]);
  const [tables, setTables] = useState([]);

  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [tableDropdownStates, setTableDropdownStates] = useState([]);

  const toggleDropdown = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };


  const showNavbarHandler = (index) => {
    const newSelectedTableIds = selectedTableIds.includes(index)
      ? selectedTableIds.filter((id) => id !== index)
      : [...selectedTableIds, index];
    setSelectedTableIds(newSelectedTableIds);
    setShowNavbar(newSelectedTableIds.length === 0 ? false : true);
  };

  const changeStarColor = (index) => {
    const newTables = [...tables];
    newTables[index].starColor =
      newTables[index].starColor === "#FFB629" ? "#c8ceed" : "#FFB629";
    setTables(newTables);
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const initialTables = response.data.map((table) => ({
          ...table,
          starColor: "#c8ceed",
        }));
        setTables(initialTables);
        setTableDropdownStates(Array(initialTables.length).fill(false));
      })
      .catch((error) => {
        console.error("error fetching data", error);
      });
  }, []);

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
              <span className="material-symbols-outlined">groups</span>Move to
              team
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
              <span className="material-symbols-outlined delete-button">
                delete
              </span>
              Move to Trash
            </button>
          </div>
        )}

        <div className="bottom-line"></div>

        <div className="content">
          <ul className="table-list">
            {tables.map((table, index) => (
              <li className="table-item" key={index}>
                <input
                  type="checkbox"
                  value={index}
                  onChange={() => showNavbarHandler(index)}
                  checked={selectedTableIds.includes(index)}
                />
                <span
                  className="material-symbols-outlined"
                  style={{ color: table.starColor }}
                  onClick={() => changeStarColor(index)}
                >
                  star
                </span>
                <div className="table-link">
                  <Link to="/table">
                    <img src={myImage} alt="" />
                  </Link>
                  <span className="table-category">{table.category}</span>
                </div>
                <div className="more-side">
                  <p>More</p>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="material-symbols-outlined"
                  >
                    expand_more
                  </button>
                  {expandedIndex === index && (
                    <div className="dropdown-content">
                      <button>Düzenle</button>
                      <button>Arşivle</button>
                      <button>Paylaş</button>
                      <button>Sil</button>
                    </div>
                  )}
                </div>
                <div></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
