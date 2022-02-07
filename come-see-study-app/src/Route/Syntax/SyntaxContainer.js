import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SyntaxPresenter from "./SyntaxPresenter";
const SyntaxContainer = ({ textRef }) => {
  const { attrId } = useParams();
  const [cursorValue, setCursorValue] = useState("");
  const navigate = useNavigate();

  const handleLocateLearningPage = () => {
    navigate(`/${attrId}/learning/1`);
  };
  return (
    <SyntaxPresenter
      textRef={textRef}
      cursorValue={cursorValue}
      setCursorValue={setCursorValue}
      attrId={attrId}
      handleLocateLearningPage={handleLocateLearningPage}
    />
  );
};

export default SyntaxContainer;
