import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 9;

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={<News key="" pageSize={pageSize} country="in" />}
          />
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
