import React from 'react';
import Menu from "./Menu.js";
import Greeting from './Greeting.js';
import About from "./About.js"
import './App.css';
import "./Animations.css";
  
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