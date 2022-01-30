import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import styles from "../Route/Lecture/lecture.module.css";

const TargetElementBackground = styled.div`
  width: 592px;
  height: 324px;
`;

const EditorInput = styled.textarea`
  resize: none;
  width: 70%;
  height: 24px;
  margin-bottom: 12px;
  outline: none;
  border-radius: 8px;
`;
const testData = {
  title: "#1-1 RGB",
  contents:
    "In CSS colors are specified using predefined color names, or RGB values. An RGB color value is specified with: rgb(red, green, blue)",
  settingsCss: "border-radius:50%; width:200px; height:200px;",
  answerCss: "background-color: rgb(248, 112, 96);",
  quizCount: 1,
};

const classList = {
  bg: "text-alignment-bg",
  e1: "text-alignment-e1",
  e2: "text-alignment-e2",
  e3: "text-alignment-e3",
  e4: "text-alignment-e4",
};

//id={`${styles[`color-rgb-bg`]}`}

const EditorTest = () => {
  const [code, setCode] = useState({
    i1: "",
    i2: "",
    i3: "",
    i4: "",
  });
  const element = document.querySelector(".container");
  const [readOnly, setreadOnly] = useState(false);

  const e1 = document.getElementsByName("e1");
  const e2 = document.getElementsByName("e2");
  const e3 = document.getElementsByName("e3");
  const e4 = document.getElementsByName("e4");

  const onChangeCode = (e) => {
    const { name, value } = e.target;
    setCode({ ...code, [name]: value });

    if (e1 && name === "i1") {
      e1[0].style = e.target.value;
    } else if (e2 && name === "i2") {
      e2[0].style = e.target.value;
    } else if (e3 && name === "i3") {
      e3[0].style = e.target.value;
    } else if (e4 && name === "i4") {
      e4[0].style = e.target.value;
    } else {
      return;
    }
  };

  const handleMakeTargetBox = () => {
    const result = [];
    for (let i = 0; i < testData.quizCount; i++) {
      result.push(
        <div
          key={i}
          id={`${styles[`${classList[`e` + (i + 1)]}`]}`}
          name={"e" + `${i + 1}`}
        />
      );
    }
    return result;
  };

  const handleMakeInputBox = () => {
    const result = [];
    for (let i = 0; i < testData.quizCount; i++) {
      result.push(
        <EditorInput
          key={i}
          type="text"
          value={code[`i` + (i + 1)]}
          onChange={onChangeCode}
          readOnly={readOnly}
          name={"i" + `${i + 1}`}
        />
      );
    }
    return result;
  };

  const handleCheckedValue = () => {
    const style = element.style;
    console.log(`style: `, style);
  };

  return (
    <div>
      {handleMakeInputBox()}
      <TargetElementBackground id={`${styles[`${classList.bg}`]}`}>
        {handleMakeTargetBox()}
      </TargetElementBackground>
    </div>
  );
};

export default EditorTest;
