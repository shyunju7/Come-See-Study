import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SyntaxPresenter from "./SyntaxPresenter";
const SyntaxContainer = ({ textRef }) => {
  const { attrId } = useParams();
  const [cursorValue, setCursorValue] = useState("");
  return (
    <SyntaxPresenter
      textRef={textRef}
      cursorValue={cursorValue}
      setCursorValue={setCursorValue}
      attrId={attrId}
    />
  );
};

export default SyntaxContainer;
