import React from "react";
import "./Greeting.css"
import "./Animations.css"
import profile_picture from './pfp.png'

class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      phrase: "Austin",
      name_state: 0,
      seconds: 0,
      count: -1
    }
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
    if (this.state.seconds % 4 === 3) {
      document.getElementsByClassName("name")[0].animate([
        {opacity: "100%"},
        {opacity: "0%"}
      ],
        {duration: 250,
        fill: "forwards"}
      );
      this.setState({count: this.state.count + 1});
    } else if ((this.state.seconds - 1) % 4 === 3) {
      this.change_phrase();
      document.getElementsByClassName("name")[0].animate([
        {opacity: "0%"},
        {opacity: "100%"}
      ],
        {duration: 125,
        fill: "forwards"}
      )
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.tick();
    }, 750);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  change_phrase = () => {
    switch (this.state.count % 4) {
      case 0:
        this.setState({phrase: "Student"});
        break;
      case 1:
        this.setState({phrase: "Software Engineer"});
        break;
      case 2:
        this.setState({phrase: "Developer"});
        break;
      case 3:
        this.setState({phrase: "Austin"});
        break;
      default:
        this.setState({phrase: "Austin"});
        break;
    }
  }

  render() {
    return (
      <div className="greeting-container">
        <div className="greeting">
          Introducing 
        </div>
        <div className="name">
          &nbsp;
          {this.state.phrase}
        </div>
        <img src={profile_picture} className="pfp" alt="profile"></img>
        <div className="scroll-arrow">
          {"⇣"}
        </div>
      </div>
    );
  }
};

export default Greeting;