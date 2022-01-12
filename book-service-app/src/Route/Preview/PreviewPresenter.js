import React from "react";
import ColorPreview from "../../Components/ColorPreview";
import { useLocation } from "react-router-dom";
import NotFound from "../../Pages/NotFound";
const PreviewPresenter = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/1-color/preview" ? (
        <ColorPreview />
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default PreviewPresenter;
