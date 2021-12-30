import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "../src/Route/Intro";
const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <>
            <Route exact path="/" element={<Intro />} />
          </>
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
