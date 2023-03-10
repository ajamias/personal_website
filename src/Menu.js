import React from "react"
import "./Menu.css"

class Menu extends React.Component {

  color_header = (label) => {
    switch (label) {
      case "About":
        document.getElementsByTagName("header")[0].style.background = "rgb(48,0,0)";
        document.getElementsByClassName("star")[0].innerHTML = "[ ★ ]";
        break;
      case "Education":
        document.getElementsByTagName("header")[0].style.background = "rgb(0,48,0)";
        document.getElementsByClassName("pencil")[0].innerHTML = "[ ✎ ]";
        break;
      case "Projects":
        document.getElementsByTagName("header")[0].style.background = "rgb(48,0,48)";
        document.getElementsByClassName("checkbox")[0].innerHTML = "[ ☑ ]";
        break;
      case "Contacts":
        document.getElementsByTagName("header")[0].style.background = "rgb(0,48,48)";
        document.getElementsByClassName("contacts")[0].innerHTML = "[ ✉ ]"; //"[ ⏎ ]";
        break;
      case "Top":
        document.getElementsByTagName("header")[0].style.background = "rgb(48,48,48)";
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

  to_about = () => {
    document.getElementsByClassName("about-body")[0].scrollIntoView({behavior: "smooth"});
  }

  to_top = () => {
    document.getElementsByClassName("greeting-container")[0].scrollIntoView({behavior: "smooth"});
  }

  to_contacts = () => {
    document.getElementsByClassName("contacts-body")[0].scrollIntoView({behavior: "smooth"});
  }

  render() {
    return (
      <header>
        <div className="menu-element" 
          onMouseEnter={() => this.color_header("About")} 
          onMouseLeave={() => this.color_header("off")}
          onClick={() => this.to_about()}>
          <span className="star">{"[ About ]"}</span>
        </div>
        <div className="menu-element" onMouseEnter={() => this.color_header("Education")} onMouseLeave={() => this.color_header("off")}>
          <span className="pencil">{"[ Education ]"}</span>
        </div>
        <div className="menu-element" onMouseEnter={() => this.color_header("Projects")} onMouseLeave={() => this.color_header("off")}>
          <span className="checkbox">{"[ Projects ]"}</span>
        </div>
        <div className="menu-element" 
          onMouseEnter={() => this.color_header("Contacts")} 
          onMouseLeave={() => this.color_header("off")}
          onClick={() => this.to_contacts()}>
          <span className="contacts">{"[ Contacts ]"}</span>
        </div>
        <div className="menu-element" 
          onMouseEnter={() => this.color_header("Top")} 
          onMouseLeave={() => this.color_header("off")}
          onClick={() => this.to_top()}>
          <span className="arrow">{"[ Top ]"}</span>
        </div>
      </header>
    );
  }
}

export default Menu;