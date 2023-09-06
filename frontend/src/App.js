import { Fragment } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Table from "./Pages/Tables/Table";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login";

function App() {
  return (
    <Fragment>
      {/* <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/table" element={<Table />} />
      </Routes> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/layout" element={<Layout />} />

        <Route path="/table" element={<Table />} />
      </Routes>
    </Fragment>
  );
}

export default App;
