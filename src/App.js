import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Board from "./components/Board";
import Home from "./components/Home";
import End from "./components/End";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/board" element={<Board />}></Route>
          <Route path="/end" element={<End />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
