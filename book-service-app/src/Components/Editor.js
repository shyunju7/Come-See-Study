import React, { useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
`;

const TargetElementWrapper = styled.div`
  width: 50%;
  height: 100vh;
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
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #c4c4c4;
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