import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Header/>
          <Body/>
        </Wrapper>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
