import React from "react";
import { useParams } from "react-router-dom";
import PreviewPresenter from "./PreviewPresenter";

const PreviewContainer = () => {
  const { attrId } = useParams();
  return <PreviewPresenter attrId={attrId} />;
};

export default PreviewContainer;
