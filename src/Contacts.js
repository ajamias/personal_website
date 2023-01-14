import React from "react";
import "./Contacts.css";
import linkedin from "./LinkedIn.png";
import github from "./GitHub.png";
import gmail from "./Gmail.png";

class Contacts extends React.Component {
  render() {
    return(
      <footer>
        <div className="contacts-body">
          <div className="contacts-left">
            Contact Me 》
          </div>
          <div className="contacts-right">
            <ul className="contacts-list">
              <li className="contact">
                <img src={linkedin} className="linkedin" alt="LI"></img>
                &nbsp;
                <a className="link-address" 
                  href="https://www.linkedin.com/in/austinjamias/" 
                  rel="noreferrer"
                  target="_blank">
                  LinkedIn
                </a>
              </li>
              <li className="contact">
                <img src={github} className="github" alt="GH"></img>
                &nbsp;
                <a className="link-address" 
                  href="https://github.com/ajamias"
                  rel="noreferrer"
                  target="_blank">
                  GitHub
                </a>
              </li>
              <li className="contact">
                <img src={gmail} className="gmail" alt="GM"></img>
                &nbsp;
                <a className="link-address" 
                  href="mailto:ajamias@bu.edu"
                  rel="noreferrer"
                  target="_blank">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Contacts;