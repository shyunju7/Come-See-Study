import React, { useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  margin-top: 12px;
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
  width: 40%;
  height: 90vh;
  display: flex;
  flex-direction: column;
`;

const QuestionWrapper = styled.div`
  width: 100%;
  height: 50%;
  background-color: #d4d4d4;
`;

const EditorInput = styled.textarea`
  resize: none;
  width: 100%;
  height: 50%;
`;

const Editor = () => {
  const [code, setCode] = useState("");
  let element = useRef();

  const onChangeCode = (e) => {
    setCode(e.target.value);
    element.current.style = e.target.value;
  };

  const checkValue = () => {
    const element = document.querySelector("#container");
    const style = element.style;
    console.log(style.border);
  };
  return (
    <Container>
      <EditorWrapper>
        <QuestionWrapper />
        <EditorInput value={code} onChange={onChangeCode} />
      </EditorWrapper>
      <TargetElementWrapper>
        <TargetElement ref={element} id="container" />
      </TargetElementWrapper>
    </Container>
  );
};
export default Editor;
