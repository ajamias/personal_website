import profile_picture from './pfp.png'
//import linkedin_logo from './LinkedIn.png'
import './App.css';
import React from 'react';
import Menu from "./Menu.js"
  
class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Austin",
    };
  }

  change_word = () => {
    this.setState({name_state: this.state.name_state + 1})
    switch (this.state.name) {
      case "Austin":
        this.setState({name: "Student"});
        break;
      case "Student":
        this.setState({name: "Software Engineer"});
        break;
      case "Software Engineer":
        this.setState({name: "Machine Learning"});
        break;
      case "Machine Learning":
        this.setState({name: "Austin"});
        break;
      default:
        this.setState({name: "Austin"});
        break;
    }
  }
  

  render() {
    return (
      <div className="App">
        <Menu />

        <div className="greeting-container">
          <div className="greeting">
            Hello! &nbsp;I'm
            &nbsp;
          </div>
          <div className="name" onClick={this.change_word}>
            {this.state.name}
          </div>
            <img src={profile_picture} className="pfp" alt="profile"></img>
        </div>


      </div>
    );
  }
}

export default App2;