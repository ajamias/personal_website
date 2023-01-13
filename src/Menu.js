import React from "react"
import "./Menu.css"
import "./Animations.css"

class Menu extends React.Component {

  color_header = (label) => {
    switch (label) {
      case "About":
        document.getElementsByTagName("header")[0].style.background = "rgba(255,0,0,0.25)";
        document.getElementsByClassName("star")[0].innerHTML = "[ ★ ]";
        break;
      case "Education":
        document.getElementsByTagName("header")[0].style.background = "rgba(0,255,0,0.25)";
        document.getElementsByClassName("pencil")[0].innerHTML = "[ ✎ ]";
        break;
      case "Projects":
        document.getElementsByTagName("header")[0].style.background = "rgba(255,0,255,0.25)";
        document.getElementsByClassName("checkbox")[0].innerHTML = "[ ☑ ]";
        break;
      case "Contacts":
        document.getElementsByTagName("header")[0].style.background = "rgba(0,255,255,0.25)";
        document.getElementsByClassName("contacts")[0].innerHTML = "[ ✉ ]"; //"[ ⏎ ]";
        break;
      case "Top":
        document.getElementsByTagName("header")[0].style.background = "rgba(255,255,255,0.25)";
        document.getElementsByClassName("arrow")[0].innerHTML = "[ ↑ ]";
        break;
      default:
        document.getElementsByTagName("header")[0].style.background = "black";
        document.getElementsByClassName("star")[0].innerHTML = "[ About ]";
        document.getElementsByClassName("pencil")[0].innerHTML = "[ Education ]";
        document.getElementsByClassName("checkbox")[0].innerHTML = "[ Projects ]";
        document.getElementsByClassName("contacts")[0].innerHTML = "[ Contacts ]";
        document.getElementsByClassName("arrow")[0].innerHTML = "[ Top ]";
        break;
    }
  }

  render() {
    return (
      <header>
        <div className="menu-element" onMouseEnter={() => this.color_header("About")} onMouseLeave={() => this.color_header("off")}>
          <span className="star">{"[ About ]"}</span>
        </div>
        <div className="menu-element" onMouseEnter={() => this.color_header("Education")} onMouseLeave={() => this.color_header("off")}>
          <span className="pencil">{"[ Education ]"}</span>
        </div>
        <div className="menu-element" onMouseEnter={() => this.color_header("Projects")} onMouseLeave={() => this.color_header("off")}>
          <span className="checkbox">{"[ Projects ]"}</span>
        </div>
        <div className="menu-element" onMouseEnter={() => this.color_header("Contacts")} onMouseLeave={() => this.color_header("off")}>
          <span className="contacts">{"[ Contacts ]"}</span>
        </div>
        <div className="menu-element" onMouseEnter={() => this.color_header("Top")} onMouseLeave={() => this.color_header("off")}>
          <span className="arrow">{"[ Top ]"}</span>
        </div>
      </header>
    );
  }
}

export default Menu;