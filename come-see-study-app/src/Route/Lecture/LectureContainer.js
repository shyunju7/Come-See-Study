import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LecturePresenter from "./LecturePresenter";

const testData = {
  title: "#1-1 RGB",
  contents:
    "In CSS colors are specified using predefined color names, or RGB values. An RGB color value is specified with: rgb(red, green, blue)",
  settingsCss: "border-radius:50%; width:200px; height:200px;",
  answerCss: "background-color: rgb(248, 112, 96);",
  quizCount: 4,
};

const classList = {
  bg: "text-alignment-bg",
  e1: "text-alignment-e1",
  e2: "text-alignment-e2",
  e3: "text-alignment-e3",
};

const LectureContainer = ({ textRef }) => {
  const [cursorValue, setCursorValue] = useState("");
  const { attrId } = useParams();
  const navigate = useNavigate();
  const [isChecked, setCheck] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

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
      setCheck={setCheck}
      isChecked={isChecked}
      setShowGuide={setShowGuide}
      showGuide={showGuide}
      navigate={navigate}
      testData={testData}
      classList={classList}
    />
  );
};

export default LectureContainer;
