import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LecturePresenter from "./LecturePresenter";

const LectureContainer = ({ textRef }) => {
  const [cursorValue, setCursorValue] = useState("");
  const { attrId } = useParams();
  const navigate = useNavigate();

  const handleOnClickHome = () => {
    navigate(`/${attrId}`);
  };

  return (
    <LecturePresenter
      attrId={attrId}
      textRef={textRef}
      cursorValue={cursorValue}
      setCursorValue={setCursorValue}
      handleOnClickHome={handleOnClickHome}
    />
  );
};

export default LectureContainer;
