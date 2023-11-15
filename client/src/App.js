import "./App.css";
import { React, BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import Header from "./components/header";
import Createpost from "./components/createpost";
import Post from "./components/Question";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid App">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ask" element={<Createpost />} />
            <Route path="/question/:id" element={<Post />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
