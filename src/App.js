import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
const createGuest = require("cross-domain-storage/guest");

function App() {
  useEffect(() => {
    const setTokenToHost = () => {
      const storage = createGuest("http://10.7.1.116:3001");
      storage.set("test", "token", (error, data) => {
        if (error) {
          console.log(error);
        }
        console.log(data);
      });
    };
    setTokenToHost();
  }, []);

  let onLoadFrame = (e) => {
    const frame = document.getElementById('ifr')
    frame.contentWindow.postMessage(process.env.REACT_APP_SECRET, "http://10.7.1.116:3001/sootblow");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <iframe
          onLoad={onLoadFrame}
          id="ifr"
          src="http://10.7.1.116:3001/sootblow"
          title="DOMAIN 2"
          width="300"
          height="300"
        ></iframe>
      </header>
    </div>
  );
}

export default App;
