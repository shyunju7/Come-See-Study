import React from "react";
import ColorPreview from "../../Components/ColorPreview";
import NotFound from "../../Pages/NotFound";
const PreviewPresenter = ({ attrId }) => {
  return <div>{attrId === "color" ? <ColorPreview /> : <NotFound />}</div>;
};

export default PreviewPresenter;
