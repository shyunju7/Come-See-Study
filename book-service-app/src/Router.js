import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../src/Route/Main";
import Lecture from "../src/Route/Lecture";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:attrId/lecture/:lectureNum" element={<Lecture />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
