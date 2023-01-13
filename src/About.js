import React from "react"
import "./About.css"
import "./Animations.css"

class About extends React.Component {

  render() {
    return(
      <div className="about-body">
        <h1>
          Introduction:
        </h1>
        <p>
          Hello! I'm Austin, a sophomore at Boston University
          studying computer engineering.
        </p>
      </div>
    );
  }
}

export default About;