import React from "react"
import "./About.css"
import box from "./box.png"

class About extends React.Component {

  render() {
    return(
      <div className="about-body">
        <div className="about-left">
          <div className="terminal-bar">
            <p style={{margin: "0%"}}>bash /Users/austin</p>
          </div>
          <div className="intro">
            <p>
              <code>
                $ cat introduction.txt
                <br/><br/>
                Hi I'm Austin! I am currently a <b>sophomore</b> at Boston
                University studying computer engineering with a concentration
                in machine learning.
                <br/><br/>
                $ cat skills.txt
                <br/><br/>
                C/C++, Python, MATLAB, Java, Tensorflow, OpenCV, OS,
                Git, HTML, CSS, Javascript, ReactJS, AWS, Verilog, MIPS
              </code>
            </p>
          </div> 
        </div>
        <div className="about-right">
          <div className="terminal-bar">
            <p style={{margin: "0%"}}>bash /Users/austin</p>
          </div>
          <img src={box} className="box-image" alt="box"></img>
        </div>
      </div>
    );
  }
}

export default About;