import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Textbar from './components/Textbar';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = "rgb(22 25 29 / 80%)";
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextAnalyser" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/"
              element={<Textbar heading="Enter the Text to Analyze" mode={mode} />}
            />
          </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
