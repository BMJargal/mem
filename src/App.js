import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hot from "./Components/Hot";
import Regular from "./Components/Regular";
import "./App.css";
import lgo from "./logo.svg";
import Data from "./Data/Data.json";

function App() {
  const [state, setState] = useState(Data);

  const plusCount = (id) => {
    const newState = [...state];
    newState[id].upvotes += 1;
    setState(newState);
  };

  const minusCount = (id) => {
    const newState = [...state];
    newState[id].downvotes += 1;
    setState(newState);
  };
  return (
    <BrowserRouter className="container">
      <header className="App-header">
        <Header />
        <div>
          <img src={lgo} className="App-logo" alt="logo" />
        </div>
      </header>
      <div>
        <Routes className="main">
          <Route
            path="/"
            exact
            caseSensitive={false}
            element={
              <Hot
                state={state}
                setState={setState}
                plusCount={plusCount}
                minusCount={minusCount}
              />
            }
          />

          <Route
            path="/Hot"
            exact
            caseSensitive={false}
            element={
              <Hot
                state={state}
                setState={setState}
                plusCount={plusCount}
                minusCount={minusCount}
              />
            }
          />

          <Route
            path="/Regular"
            exact
            caseSensitive={false}
            element={
              <Regular
                state={state}
                setState={setState}
                plusCount={plusCount}
                minusCount={minusCount}
              />
            }
          />
        </Routes>
      </div>

      <footer className="App-footer">
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
