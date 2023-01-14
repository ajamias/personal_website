import React from "react"
import "./About.css"

class About extends React.Component {

  render() {
    return(
      <div className="about-body">
        <div className="about-left">
          <div className="terminal-bar">
            <p>bash /Users/austin</p>
          </div>
          <div className="intro">
            <p>
              <code>
                $ cat introduction.txt
                <br/><br/>
                Hello! I'm Austin, a sophomore at Boston University
                studying computer engineering.
                <br/><br/>
              </code>
            </p>
          </div> 
        </div>
        <div>

        </div>
      </div>
    );
  }
}

export default About;