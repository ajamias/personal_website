import profile_picture from './pfp.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello! I am Austin
      </header>

      <div className="pfp-border">
        <img src={profile_picture} className="pfp" alt="profile_picture" />
      </div>

      <div className="summary-border">
        <div className="summary">
          <ul>
            <li>summary</li>
            <li>will</li>
            <li>go</li>
            <li>here</li>
          </ul>
        </div>
      </div>

      <div className="venn-diagram">
        <div className="left-circle">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          hey cutie 😎
        </div>
        <div className="right-circle">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          how u doin 🥴
        </div>
      </div>


      <div className="contact-info">
        <a
          className="App-link"
          href="https://www.linkedin.com/in/austinjamias/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          class="App-link"
          href="https://github.com/ajamias"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github  
        </a>
        <a
          class="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          secret 🤔
        </a>

      </div>
    </div>
  );
}

export default App;
