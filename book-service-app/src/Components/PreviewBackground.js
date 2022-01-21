import React from "react";
import styled from "styled-components";
import triangle from "../assets/triangle-img.png";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fef6c9;
  position: relative;
`;

const BackgroundDiv = styled.div`
  width: 96%;
  height: 90%;
  opacity: 0.45;
  background-image: url(${triangle});
  background-size: 138px;
  background-repeat: no-repeat;
  position: absolute;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

const RadioLabel = styled.label`
  background: #fcd270;
  width: 42px;
  height: 28px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #ffd05b;
  }
`;
const RadioButton = styled.input`
  display: none;

  &:checked + ${RadioLabel} {
    background-color: #ffb300;
    color: #fff;
    border-color: #ffc640;
  }
`;
const Chapter = styled.p`
  font-size: 1rem;
  margin-top: 45px;
  font-weight: 600;
`;

const GuideText = styled.h2`
  font-size: 1.12rem;
  font-weight: 600;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const LineWrapper = styled.div`
  display: flex;
  margin-left: 200px;
`;

const ButtonWrapper = styled.div`
  width: 160px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
  align-self: center;
`;
const PreviewBackground = () => {
  return (
    <Container>
      <Chapter>CSS #3</Chapter>
      <GuideText>change background attributes</GuideText>

      <BackgroundDiv />
    </Container>
  );
};

export default PreviewBackground;
