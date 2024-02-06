import "./App.css";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import TopAnime from "./components/TopAnime/TopAnime";
import TopManga from "./components/TopManga/TopManga";
import TopChara from "./components/TopChara/TopChara";
import Detail from "./Pages/Detail";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<TopAnime />} />
          <Route path="/top-manga" element={<TopManga/>} />
          <Route path="/top-chara" element={<TopChara/>} />
          <Route path="/Detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
