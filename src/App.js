import profile_picture from './pfp.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile_picture} className="pfp" alt="profile_picture" />
        <br></br>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/austinjamias/"
          target="_blank"
          rel="noopener noreferrer"
        >
          my linkedin
        </a>
      </header>
    </div>
  );
}

export default App;
