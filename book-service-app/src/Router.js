import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "../src/Route/Intro";
import Main from "../src/Route/Main";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/main/*" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
