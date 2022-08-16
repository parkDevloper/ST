import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import "./App.css";
import Login from "./components/Login";
import Main from "./components/Main";
import Selector from "./components/Selector";
import UploadFile from "./components/UploadFile";
import Animation from "./voice.gif";

function App() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1500);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <img className="voiceImg" src={Animation} alt="hey" />
      ) : (
        <Router>
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/selector" exact element={<Selector />} />
            <Route path="/upload" exact element={<UploadFile />} />
            <Route path="/main" exact element={<Main />} />
            <Route path="/admin" exact element={<Admin />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
