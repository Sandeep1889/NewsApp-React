import "./App.css";
import NavBar from "./Components/NavBar";
import React from "react";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<News key = "" pageSize={10} country="in"  />} />
          <Route exact path="/science" element={<News key = "science"pageSize={10} country="in" category="science" />} />
          <Route exact path="/entertainment" element={<News key = "entertainment"pageSize={10} country="in" category="entertainment" />} />
          <Route exact path="/health" element={<News key = "health"pageSize={10} country="in" category="health" />} />
          <Route exact path="/sports" element={<News key = "sports"pageSize={10} country="in" category="sports" />} />
          <Route exact path="/business" element={<News key = "business"pageSize={10} country="in" category="business" />} />
          <Route exact path="/technology" element={<News key = "technology"pageSize={10} country="in" category="technology" />} />
          
        </Routes>
      </Router>
    </div>
  );
}
