import React from 'react';
import Menu from "./Menu.js";
import Greeting from './Greeting.js';
import About from "./About.js";
import './App.css';
import "./Animations.css";
  
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Menu />
        <Greeting />
        <About />
      </div>
    );
  }
}

export default App;