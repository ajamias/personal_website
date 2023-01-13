import React from 'react';
import Menu from "./Menu.js";
import './App.css';
import "./Animations.css";
import Greeting from './Greeting.js';
  
class App2 extends React.Component {

  render() {
    return (
      <div className="App">
        <Menu />

        <Greeting />
      </div>
    );
  }
}

export default App2;