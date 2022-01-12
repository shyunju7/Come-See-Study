import React from "react";
import ColorPreview from "../../Components/ColorPreview";
import { useLocation } from "react-router-dom";
const PreviewPresenter = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      {location.pathname === "/1-color/preview" ? <ColorPreview /> : null}
    </div>
  );
};

export default PreviewPresenter;
