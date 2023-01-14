import React from 'react';
import Menu from "./Menu.js";
import Greeting from './Greeting.js';
import About from "./About.js";
import Contacts from "./Contacts.js";
import "./Animations.css";
  
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Menu />
        <Greeting />
        <About />

        <Contacts />
      </div>
    );
  }
}

export default App;