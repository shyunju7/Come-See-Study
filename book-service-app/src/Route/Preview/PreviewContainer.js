import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PreviewPresenter from "./PreviewPresenter";

const PreviewContainer = ({ textRef }) => {
  const { attrId } = useParams();
  const [cursorValue, setCursorValue] = useState("");

  return (
    <PreviewPresenter
      attrId={attrId}
      textRef={textRef}
      setCursorValue={setCursorValue}
      cursorValue={cursorValue}
    />
  );
};

export default PreviewContainer;
