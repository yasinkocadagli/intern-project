


import { Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';


function App() {
  return (
    <Fragment>
       <Header />

        <Sidebar />
        <Home />
      
    </Fragment>
  );
}

export default App;
