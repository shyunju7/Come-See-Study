import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../src/Route/Main";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
