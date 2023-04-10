import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./mem/logo.svg";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hot from "./Components/Hot";
import Regular from "./Components/Regular";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Header />
      </header>
      <div>
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
      </div>
      <Routes>
        <Route path="/" exact caseSensitive={false} element={<Hot />} />
        <Route path="/Hot" exact caseSensitive={false} element={<Hot />} />
        <Route
          path="/Regular"
          exact
          caseSensitive={false}
          element={<Regular />}
        />
      </Routes>
      <footer className="App-footer">
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
