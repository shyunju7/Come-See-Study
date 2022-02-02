import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import StateButton from "./StateButton";
import bubble from "../assets/bg-bubble-preview-text.png";
import styles from "../Route/Lecture/lecture.module.css";

const Container = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  margin: 45px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TargetElement = styled.div``;

const EditorWrapper = styled.div`
  width: 85%;
  height: 45vh;
  display: flex;
  background-color: transparent;
  opacity: 0.8;
`;

const QuizWrapper = styled.div`
  width: 85%;
  height: 45vh;
  display: flex;
  flex-direction: row;
  background-color: #806d40;
`;

const EditorContentWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
`;

const QuizContentWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transprearent;
  position: relative;
  overflow-y: scroll;
`;

const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 36px;
  margin-left: 24px;
  margin-top: 24px;
`;

const Description = styled.label`
  font-size: 16px;
  margin-bottom: 12px;
  line-height: 24px;
  margin-left: 24px;
`;

const Question = styled.label`
  font-size: 16px;
  margin-left: 24px;
`;

const AnswerImgWrapper = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StateGuide = styled.label`
  color: #fef6c9;
  margin-right: 12px;
  font-size: 18px;
`;
const StateWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 30px;
  bottom: 30px;
`;

const Text = styled.div`
  font-size: 18px;
  background-image: url(${bubble});
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
`;

const TargetElementBackground = styled.div`
  width: 592px;
  height: 324px;
`;

const EditorInput = styled.textarea`
  resize: none;
  width: 60%;
  height: 24px;
  background-color: #f8f8f8;
  margin-bottom: 12px;
  outline: none;
  border-radius: 8px;
`;

const CodeText = styled.div`
  width: 72%;
  font-size: 18px;
  text-align: start;
  margin-bottom: 8px;
  background-color: transparent;
  color: #fef6c9;
  white-space: pre-wrap;
`;

const testData = {
  title: "#1-1 RGB",
  contents:
    "In CSS colors are specified using predefined color names, or RGB values. An RGB color value is specified with: rgb(red, green, blue)",
  settingsCss: "border-radius:50%; width:200px; height:200px;",
  answerCss: "background-color: rgb(248, 112, 96);",
  quizCount: 4,
  textArr: ["#blue-circle {", "} #red-circle {", "}#green-circle {", "}"],
};

const Editor = ({ data, setCheck }) => {
  console.log(`data,`, data);
  const [code, setCode] = useState({
    i1: "",
    i2: "",
    i3: "",
    i4: "",
  });
  const [readOnly, setreadOnly] = useState(false);
  const [buttonState, setButtonState] = useState("check");

  const e1 = document.getElementsByName("e1");
  const e2 = document.getElementsByName("e2");
  const e3 = document.getElementsByName("e3");
  const e4 = document.getElementsByName("e4");

  let answerElement = useRef();
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

  // 정답화면 세팅
  useEffect(() => {
    if (answerElement) {
      answerElement.current.style = "background-color:red;";
    }
  }, []);

  useEffect(() => {
    buttonState === "correct" ? setreadOnly(true) : setreadOnly(false);
    buttonState === "correct" ? setCheck(false) : setCheck(true);
  }, [buttonState]);

  const handleCheckedValue = () => {
    // 정답비교
    "" == testData.answerCss
      ? setButtonState("correct")
      : setButtonState("try-again");
  };

  const handleMakeTargetBox = () => {
    const result = [];

    if (data.requiredElements) {
      console.log(`dd: `, data.requiredElements);
      for (let i = 0; i < data.quizNum; i++) {
        result.push(
          <div
            key={i}
            id={`${styles[`${data.requiredElements[`e` + (i + 1)]}`]}`}
            name={"e" + `${i + 1}`}
          />
        );
      }
      return result;
    }
  };

  const handleMakeInputBox = () => {
    const result = [];
    for (let i = 0; i < data.quizNum; i++) {
      result.push(
        <>
          <CodeText key={data.settingCodes[i] + i}>
            {data.settingCodes[i]}
          </CodeText>

          <EditorInput
            key={data.attrTitle + "input"}
            type="text"
            value={code[`i` + (i + 1)]}
            onChange={onChangeCode}
            readOnly={readOnly}
            name={"i" + `${i + 1}`}
          />
        </>
      );
    }
    if (data.settingCodes) {
      result.push(
        <CodeText>{data.settingCodes[data.settingCodes.length - 1]}</CodeText>
      );
    }
    return result;
  };

  return (
    <Container>
      {/* 왼쪽 - editor */}
      <EditorWrapper>
        <EditorContentWrapper>
          <Title>{data.contentTitle}</Title>
          <Description>{data.contentDesc}</Description>
          <Question>{data.quizValue}</Question>
        </EditorContentWrapper>

        {/* 사용자가 만든 css 타겟 */}
        <AnswerImgWrapper bgColor="transparent">
          <TargetElementBackground
            id={
              data.requiredElements
                ? `${styles[`${data.requiredElements.bg}`]}`
                : ""
            }
          >
            <TargetElement ref={answerElement} />
          </TargetElementBackground>
        </AnswerImgWrapper>
      </EditorWrapper>

      {/* 오른쪽 - quiz */}
      <QuizWrapper>
        <QuizContentWrapper>
          {handleMakeInputBox()}
          <StateWrapper>
            <StateGuide>
              {buttonState === "check" ? "" : buttonState}
            </StateGuide>
            <StateButton
              stateText={buttonState}
              handleCheckedValue={handleCheckedValue}
            />
          </StateWrapper>
        </QuizContentWrapper>
        <AnswerImgWrapper bgColor="#FFFDF1">
          <TargetElementBackground
            id={
              data.requiredElements
                ? `${styles[`${data.requiredElements.bg}`]}`
                : ""
            }
          >
            {handleMakeTargetBox()}
          </TargetElementBackground>
        </AnswerImgWrapper>
      </QuizWrapper>
    </Container>
  );
};
export default Editor;
