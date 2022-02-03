import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StateButton from "./StateButton";
import styles from "../Route/Lecture/lecture.module.css";
import { learningApi } from "../api";

const Container = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  margin: 45px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EditorWrapper = styled.div`
  width: 85%;
  height: 45vh;
  display: flex;
  background-color: transparent;
`;

// 코드창
const QuizWrapper = styled.div`
  width: 85%;
  height: 45vh;
  display: flex;
  flex-direction: row;
  background-color: #806d40;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

// 문제 설명
const EditorContentWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  font-size: 22.5px;
  font-weight: 600;
  margin-bottom: 44px;
  margin-left: 24px;
  margin-top: 24px;
`;

const Description = styled.label`
  font-size: 17.6px;
  margin-bottom: 12px;
  margin-left: 24px;
  font-style: normal;
  font-weight: 500;
  font-size: 17.6px;
  line-height: 21px;
  letter-spacing: -0.015em;
  width: 90%;
  white-space: pre-wrap;
`;

const Question = styled.label`
  margin-left: 24px;
  font-weight: bold;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 25px;
  white-space: pre-wrap;
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

const TargetElementBackground = styled.div`
  width: 592px;
  height: 324px;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EditorInput = styled.textarea`
  resize: none;
  width: 60%;
  height: 24px;
  background-color: #f8f8f8;
  margin-bottom: 12px;
  outline: none;
  border-radius: 8px;
  font-size: 18px;
`;

const CodeText = styled.div`
  width: 72%;
  font-size: 18px;
  text-align: start;
  margin-bottom: 8px;
  background-color: transparent;
  color: #fef6c9;
  white-space: pre-wrap;
  line-height: 26px;
`;

const Editor = ({ data, setCheck, attrId, pageNo }) => {
  const [code, setCode] = useState({
    i1: "",
    i2: "",
    i3: "",
    i4: "",
  });
  const [readOnly, setreadOnly] = useState(false);
  const [buttonState, setButtonState] = useState("check");
  let [checkedValue, setCheckedValue] = useState({
    e1: false,
    e2: false,
    e3: false,
    e4: false,
  });

  const e1 = document.getElementsByName("e1");
  const e2 = document.getElementsByName("e2");
  const e3 = document.getElementsByName("e3");
  const e4 = document.getElementsByName("e4");

  const onChangeCode = (e) => {
    const { name, value } = e.target;
    setCode({ ...code, [name]: value });
    setButtonState("check");

    console.log(name, value);

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

  useEffect(() => {
    if (e1[0]) {
      e1[0].style = "";
    }
    if (e2[0]) {
      e2[0].style = "";
    }
    if (e3[0]) {
      e3[0].style = "";
    }
    if (e4[0]) {
      e4[0].style = "";
    }
  }, [data]);

  useEffect(() => {
    setCode({ i1: "", i2: "", i3: "", i4: "" });
    setButtonState("check");
    const answerE1 = document.getElementsByName("answer-e1");
    const answerE2 = document.getElementsByName("answer-e2");
    const answerE3 = document.getElementsByName("answer-e3");
    const answerE4 = document.getElementsByName("answer-e4");

    if (answerE1[0]) {
      answerE1[0].style = data.answerCodes.e1;
    }
    if (answerE2[0]) {
      answerE2[0].style = data.answerCodes.e2;
    }
    if (answerE3[0]) {
      answerE3[0].style = data.answerCodes.e3;
    }
    if (answerE4[0]) {
      answerE4[0].style = data.answerCodes.e4;
    }
  }, [data]);

  useEffect(() => {
    buttonState === "correct" ? setreadOnly(true) : setreadOnly(false);
    buttonState === "correct" ? setCheck(true) : setCheck(false);
  }, [buttonState]);

  const handleCheckedValue = () => {
    learningApi
      .checkQuizValue({
        attrName: attrId,
        pageNo: pageNo,
        answers: {
          e1: code.i1,
          e2: code.i2,
          e3: code.i3,
          e4: code.i4,
        },
      })
      .then((value) => {
        console.log(`value.data.answerCheck: `, value.data.answerCheck);
        setCheckedValue({
          e1: value.data.answerCheck.e1,
          e2: value.data.answerCheck.e2,
          e3: value.data.answerCheck.e3,
          e4: value.data.answerCheck.e4,
        });
      })
      .catch(function (e) {
        console.log("error! ", e);
      });
  };

  useEffect(() => {
    let allCheck = false;
    for (let i = 0; i < data.quizNum; i++) {
      checkedValue[`e` + (i + 1)] ? (allCheck = true) : (allCheck = false);
      console.log(`?? ${i}+1`, checkedValue[`e` + (i + 1)]);
    }

    if (allCheck) {
      setButtonState("correct");
      window.localStorage.setItem(`${attrId}`, pageNo);
    } else {
      setButtonState("try-again");
    }
  }, [checkedValue]);

  const handleMakeAnswerBox = () => {
    const result = [];

    if (data.answerCodes) {
      for (let i = 0; i < data.quizNum; i++) {
        result.push(
          <div
            key={"answer" + i}
            id={`${styles[`${data.requiredElements[`e` + (i + 1)]}`]}`}
            name={"answer-e" + `${i + 1}`}
          />
        );
      }
      return result;
    }
  };

  const handleMakeTargetBox = () => {
    const result = [];

    if (data.requiredElements) {
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
        <Div key={i}>
          <CodeText key={data.settingCodes[i] + i}>
            {data.settingCodes[i]}
          </CodeText>

          <EditorInput
            key={data.attrTitle + "input" + i}
            type="text"
            value={code[`i` + (i + 1)]}
            onChange={onChangeCode}
            readOnly={readOnly}
            name={"i" + `${i + 1}`}
          />
        </Div>
      );
    }
    if (data.settingCodes) {
      result.push(
        <CodeText key="settingCodes-last">
          {data.settingCodes[data.settingCodes.length - 1]}
        </CodeText>
      );
    }
    return result;
  };

  return (
    <Container>
      <EditorWrapper>
        <EditorContentWrapper>
          <Title>{data.contentTitle}</Title>
          <Description>{data.contentDesc}</Description>
          <Question>{data.quizValue}</Question>
        </EditorContentWrapper>

        {/* 정답 이미지 */}
        <AnswerImgWrapper bgColor="transparent">
          <TargetElementBackground
            id={
              data.requiredElements
                ? `${styles[`${data.requiredElements.bg}`]}`
                : ""
            }
          >
            {handleMakeAnswerBox()}
          </TargetElementBackground>
        </AnswerImgWrapper>
      </EditorWrapper>

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
