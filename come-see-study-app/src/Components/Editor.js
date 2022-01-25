import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import StateButton from "./StateButton";

const Container = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  margin: 45px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TargetElement = styled.div`
  width: 250px;
  height: 250px;
  background-color: #757575;
  border-radius: 50%;
`;

const EditorWrapper = styled.div`
  width: 85%;
  height: 45vh;
  display: flex;
  background-color: rgba(256, 256, 256, 0.6);
  opacity: 0.8;
`;

const QuizWrapper = styled.div`
  width: 85%;
  height: 45vh;
  display: flex;
  flex-direction: row;
  background-color: #806d40;
`;

const EditorInput = styled.textarea`
  resize: none;
  width: 90%;
  height: 25%;
  margin-bottom: 12px;
  outline: none;
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
  background-color: transparent;
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
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Editor = () => {
  const [code, setCode] = useState("");
  const [buttonState, setButtonState] = useState("check");
  const [readOnly, setreadOnly] = useState(false);

  let element = useRef();
  let answerElement = useRef();
  const onChangeCode = (e) => {
    setButtonState("check");
    setCode(e.target.value);
    element.current.style = e.target.value;
  };

  useEffect(() => {
    if (answerElement) {
      answerElement.current.style =
        "border-radius:50%; background-color:rgb(248,112,96);";
    }
  }, []);

  useEffect(() => {
    buttonState === "correct" ? setreadOnly(true) : setreadOnly(false);
  }, [buttonState]);

  const handleCheckedValue = () => {
    // 정답 체크 API 호출
    const answer = "border";
    const element = document.querySelector("#container");
    const style = element.style;
    style.cssText === "background-color: rgb(248, 112, 96);"
      ? setButtonState("correct")
      : setButtonState("wrong");
  };
  return (
    <Container>
      <EditorWrapper>
        <EditorContentWrapper>
          <Title>#1-1 RGB</Title>
          <Description>
            In CSS colors are specified using predefined color names, or RGB
            values. <br />
            An RGB color value is specified with: rgb(red, green, blue)
          </Description>
          <Question>
            Type, following rgb value to get same color (rbg(248, 112, 96))
          </Question>
        </EditorContentWrapper>
        <AnswerImgWrapper>
          <TargetElement ref={answerElement} />
        </AnswerImgWrapper>
      </EditorWrapper>
      <QuizWrapper>
        <QuizContentWrapper>
          <EditorInput
            value={code}
            onChange={onChangeCode}
            readOnly={readOnly}
          />
          <StateButton
            stateText={buttonState}
            handleCheckedValue={handleCheckedValue}
          />
        </QuizContentWrapper>
        <AnswerImgWrapper>
          <TargetElement ref={element} id="container" />
        </AnswerImgWrapper>
      </QuizWrapper>
    </Container>
  );
};
export default Editor;
