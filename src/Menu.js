import React from "react"
import "./Menu.css"

class Menu extends React.Component {

  color_header = (label) => {
    switch (label) {
      case "Top":
        document.getElementsByTagName("header")[0].style.background = "rgba(255,255,255,0.2)";
        break;
      case "About":
        document.getElementsByTagName("header")[0].style.background = "rgba(255,0,0,0.2)";
        break;
      case "Education":
        document.getElementsByTagName("header")[0].style.background = "rgba(0,255,0,0.2)";
        break;
      case "Projects":
        document.getElementsByTagName("header")[0].style.background = "rgba(255,0,255,0.2)";
        break;
      case "Contacts":
        document.getElementsByTagName("header")[0].style.background = "rgba(0,255,255,0.2)";
        break;
      default:
        document.getElementsByTagName("header")[0].style.background = "black";
        break;
    }
  }

  render() {
    return (
      <header>
        <div className="menu-element" onMouseEnter={() => this.color_header("Top")} onMouseLeave={() => this.color_header("off")}>
          {"{ Top ^ }"}
        </div>
        <div className="menu-element" onMouseEnter={() => this.color_header("About")} onMouseLeave={() => this.color_header("off")}>
          {"{ About }"}
        </div>
        <div className="menu-element" onMouseEnter={() => this.color_header("Education")} onMouseLeave={() => this.color_header("off")}>
          {"{ Education }"}
        </div>
        <div className="menu-element" onMouseEnter={() => this.color_header("Projects")} onMouseLeave={() => this.color_header("off")}>
          {"{ Projects }"}
        </div>
        <div className="menu-element" onMouseEnter={() => this.color_header("Contacts")} onMouseLeave={() => this.color_header("off")}>
          {"{ Contacts }"}
        </div>
      </header>
    );
  }
}

export default Menu;