import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  margin: 45px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TargetElementWrapper = styled.div`
  width: 40%;
  height: 90vh;
  background-color: #dddddd;
  display: flex;

  align-items: center;
  justify-content: center;
`;

const TargetElement = styled.div`
  width: 250px;
  height: 250px;
  background-color: whitesmoke;
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
`;

const EditorInput = styled.textarea`
  resize: none;
  width: 90%;
  height: 25%;
`;

const EditorContentWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: violet;
`;

const QuizContentWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: violet;
`;

const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 36px;
`;

const Description = styled.label`
  font-size: 16px;
  margin-bottom: 12px;
  line-height: 24px;
`;

const Question = styled.label`
  font-size: 16px;
`;

const AnswerImgWrapper = styled.div`
  width: 50%;
  height: 100%;
  background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Editor = () => {
  const [code, setCode] = useState("");
  let element = useRef();
  let answerElement = useRef();
  const onChangeCode = (e) => {
    setCode(e.target.value);
    element.current.style = e.target.value;
  };

  useEffect(() => {
    if (answerElement) {
      answerElement.current.style =
        "border-radius:50%; background-color:rgb(248,112,96);";
    }
  }, []);

  const checkValue = () => {
    const element = document.querySelector("#container");
    const style = element.style;
    console.log(style.border);
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
          <EditorInput value={code} onChange={onChangeCode} />
        </QuizContentWrapper>
        <AnswerImgWrapper>
          <TargetElement ref={element} id="container" />
        </AnswerImgWrapper>
      </QuizWrapper>
      {/* <EditorWrapper>
        <QuestionWrapper>ddd</QuestionWrapper>
        <EditorInput value={code} onChange={onChangeCode} />
      </EditorWrapper>
      <TargetElementWrapper>
        <TargetElement ref={element} id="container" />
      </TargetElementWrapper> */}
    </Container>
  );
};
export default Editor;
