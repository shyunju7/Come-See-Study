import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Main from "../src/Route/Main";
import Lecture from "../src/Route/Lecture";
import Preview from "../src/Route/Preview";
import NotFound from "../src/Pages/NotFound";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate replace to="/color" />} />
        <Route path="/:attrId" element={<Main />} />
        <Route path="/:attrId/preview/*" element={<Preview />} />
        <Route path="/:attrId/lecture/:lectureNum" element={<Lecture />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
