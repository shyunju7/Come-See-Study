import React, { useState } from "react";
import styled from "styled-components";
import RadioButton from "./CustomRadioButton";
import { ReactComponent as Rect } from "../assets/rect-img.svg";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fef6c9;
`;

const Chapter = styled.p`
  font-size: 1rem;
  margin-top: 45px;
  font-weight: 600;
  line-height: 21.45px;
  font-style: normal;
`;

const GuideText = styled.h2`
  font-size: 1.12rem;
  font-weight: 600;
  line-height: 27.31px;
  margin-top: 100px;
  margin-bottom: 100px;
  font-style: normal;
`;

const LineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 140px;
`;

const Text = styled.label`
  margin-right: 42px;
  font-size: 18px;
  line-height: 25px;
  font-style: normal;
  font-weight: 400;
`;

const ButtonWrapper = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
  align-self: center;
`;

const RectCharacter = styled(Rect)`
  fill: #f87060;
  line-height: 25px;
  position: absolute;
  top: 50%;
  left: 160px;
  transform: translateY(-25px);
`;

const PreviewTransition = () => {
  const [transitionTiming, setTransitionTiming] = useState("");
  const handleChangeRadioButton = (e) => {
    const { value } = e.target;

    setTransitionTiming(value);
  };

  return (
    <Container>
      <Chapter>CSS #5</Chapter>
      <GuideText>Control Timing!</GuideText>
      <RectCharacter />
      <LineWrapper>
        <Text>TRANSITION-TIMING-FUNCTION</Text>
        <ButtonWrapper>
          <RadioButton
            id="ease"
            name="repeat"
            value="ease"
            handleChangeRadioButton={handleChangeRadioButton}
          >
            EASE
          </RadioButton>
          <RadioButton
            id="linear"
            name="repeat"
            value="linear"
            handleChangeRadioButton={handleChangeRadioButton}
          >
            LINEAR
          </RadioButton>
          <RadioButton
            id="ease-in"
            name="repeat"
            value="ease-in"
            handleChangeRadioButton={handleChangeRadioButton}
          >
            EASE-IN
          </RadioButton>
          <RadioButton
            id="ease-out"
            name="repeat"
            value="ease-out"
            handleChangeRadioButton={handleChangeRadioButton}
          >
            EASE-OUT
          </RadioButton>
          <RadioButton
            id="steps"
            name="repeat"
            value="steps"
            handleChangeRadioButton={handleChangeRadioButton}
          >
            STEPS
          </RadioButton>
        </ButtonWrapper>
      </LineWrapper>
    </Container>
  );
};

export default PreviewTransition;
