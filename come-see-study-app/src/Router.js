import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Main from "../src/Route/Main";
import Lecture from "../src/Route/Lecture";
import Preview from "../src/Route/Preview";
import NotFound from "../src/Pages/NotFound";
const AppRouter = ({ textRef }) => {
  const { attrId, pageNo } = useParams();
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate replace to="/color" />} />
        <Route path="/:attrId" element={<Main textRef={textRef} />} />
        <Route
          path="/:attrId/preview/*"
          element={<Preview textRef={textRef} />}
        />
        <Route
          path="/:attrId/learning/:pageNo"
          element={<Lecture textRef={textRef} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
