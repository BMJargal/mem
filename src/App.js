import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hot from "./Components/Hot";
import Regular from "./Components/Regular";
import "./App.css";
import lgo from "./logo.svg";

function App() {
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
          <Route path="/" exact caseSensitive={false} element={<Hot />} />
          <Route path="/Hot" exact caseSensitive={false} element={<Hot />} />
          <Route
            path="/Regular"
            exact
            caseSensitive={false}
            element={<Regular />}
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
