import { Fragment } from "react";
import "./App.css";


import { Routes, Route } from "react-router-dom";
import Table from "./Pages/Tables/Table";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Fragment>


      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/table" element={<Table/>}/>
      </Routes>
    </Fragment>
  );
}

export default App;
