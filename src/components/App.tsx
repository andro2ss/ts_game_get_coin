import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterAB from "./common/footer/FooterAB";
import { Container } from "@mui/material";
import "animate.css";
import Home from "./pages/home/Home";
import Game from "./pages/game/Game";
import Result from "./pages/result/Result";

function App() {
  return (
    <Container className="app__container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Game />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
      <FooterAB githubLink="https://github.com/andro2ss/ts_game_get_coin" />
    </Container>
  );
}

export default App;
