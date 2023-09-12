import React, { Fragment, useEffect, useState } from "react";

import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [selectedTableIds, setSelectedTableIds] = useState([]);
  const [tables, setTables] = useState([]);

  const [expandedIndex, setExpandedIndex] = useState(-1);

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

  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((response) => {
  //       const initialTables = response.data.map((table) => ({
  //         ...table,
  //         starColor: "#c8ceed",
  //       }));
  //       setTables(initialTables);
  //     })
  //     .catch((error) => {
  //       console.error("error fetching data", error);
  //     });
  // }, []);

  useEffect(() => {
    axios.get("http://localhost/backend/get-tables.php")
      .then((response) => {
        setTables(response.data)
      }).catch((error) => {
        console.error('error fetching data', error)
      })

  }, [])

  return (
    <Fragment>
      <div className="main">
        {!showNavbar ? (
          <div className="up-content">

            <div className="update-button">
              <button>
                <p>Sort</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.08086 1.06762L4.49975 4.40954L0.920639 1.06662C0.821136 0.97657 0.66863 0.977071 0.573127 1.07263C0.475624 1.17018 0.475624 1.32877 0.573127 1.42633C0.575127 1.42833 4.32925 4.93434 4.32925 4.93434C4.42625 5.02239 4.57375 5.02239 4.66975 4.93334L8.42037 1.43233C8.52437 1.32877 8.52437 1.17018 8.42687 1.07263C8.33137 0.977071 8.17887 0.976571 8.08086 1.06762Z" fill="#0A1551" stroke="#0A1551" />
                </svg>
              </button>
            </div>

            <div className="search-box">
            <span className="material-symbols-outlined search-button">Search</span>
              <input type="search" placeholder="Search in forms" />
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
                    {/* <img src={myImage} alt="" /> */}
                    {<img key={index} src={table.imageUrl} alt=" " />}
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
                    <ul className="dropdown-content">
                      <li><p>Paylaş</p></li>
                      <li><p>Düzenle</p></li>
                      <li><p>Arşivle</p></li>
                      <li><p>Sil</p></li>
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;