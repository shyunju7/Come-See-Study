import React, { useState } from "react";
import styled from "styled-components";
import triangle from "../assets/triangle-img.png";
import RadioButton from "./CustomRadioButton";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fef6c9;
  position: relative;
`;

const BackgroundDiv = styled.div`
  width: 96%;
  height: 90%;
  opacity: 0.45;
  background-image: url(${triangle});
  background-size: 138px;
  background-repeat: ${(props) => (props.repeat ? props.repeat : "no-repeat")};
  background-position: ${(props) =>
    props.position ? props.position : "unset"};
  z-index: 0;
  position: absolute;
  top: 56px;
`;

const Chapter = styled.p`
  font-size: 1rem;
  margin-top: 45px;
  font-weight: 600;
  z-index: 1000;
`;

const GuideText = styled.h2`
  font-size: 1.65rem;
  font-weight: 600;
  margin-top: 100px;
  margin-bottom: 200px;
  z-index: 1000;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LineWrapper = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1000;
`;

const ButtonWrapper = styled.div`
  width: 330px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
  align-self: center;
`;

const Text = styled.label`
  width: 300px;
  font-size: 18px;
  line-height: 25px;
  font-style: normal;
  font-weight: 400;
`;

const PreviewBackground = () => {
  const [repeat, setRepeat] = useState("no-repeat");
  const [position, setPosition] = useState("none");
  const handleChangeRadioButton = (e) => {
    const { value, name } = e.target;
    if (name === "repeat") {
      setRepeat(value);
    } else if (name === "position") {
      setPosition(value);
    } else {
      return;
    }
  };

  return (
    <Container>
      <Chapter>CSS #3</Chapter>
      <GuideText>Change background attributes!</GuideText>
      <ButtonContainer>
        <LineWrapper>
          <Text>BACKGROUND-REPEAT</Text>
          <ButtonWrapper>
            <RadioButton
              id="repeat-x"
              name="repeat"
              value="repeat-x"
              handleChangeRadioButton={handleChangeRadioButton}
              defaultCheck={false}
            >
              x
            </RadioButton>
            <RadioButton
              id="repeat-y"
              name="repeat"
              value="repeat-y"
              handleChangeRadioButton={handleChangeRadioButton}
              defaultCheck={false}
            >
              y
            </RadioButton>
            <RadioButton
              id="repeat"
              name="repeat"
              value="repeat"
              handleChangeRadioButton={handleChangeRadioButton}
              defaultCheck={false}
            >
              all
            </RadioButton>
            <RadioButton
              id="no-repeat"
              name="repeat"
              value="no-repeat"
              handleChangeRadioButton={handleChangeRadioButton}
              defaultCheck={true}
            >
              none
            </RadioButton>
          </ButtonWrapper>
        </LineWrapper>
        <LineWrapper>
          <Text>BACKGROUND-POSITION</Text>
          <ButtonWrapper>
            <RadioButton
              id="right"
              name="position"
              value="right"
              handleChangeRadioButton={handleChangeRadioButton}
              defaultCheck={false}
            >
              right
            </RadioButton>
            <RadioButton
              id="left"
              name="position"
              value="left"
              handleChangeRadioButton={handleChangeRadioButton}
              defaultCheck={false}
            >
              left
            </RadioButton>
            <RadioButton
              id="top"
              name="position"
              value="top"
              handleChangeRadioButton={handleChangeRadioButton}
              defaultCheck={false}
            >
              top
            </RadioButton>
            <RadioButton
              id="center"
              name="position"
              value="center"
              handleChangeRadioButton={handleChangeRadioButton}
              defaultCheck={false}
            >
              center
            </RadioButton>
            <RadioButton
              id="bottom"
              name="position"
              value="bottom"
              handleChangeRadioButton={handleChangeRadioButton}
              defaultCheck={false}
            >
              bottom
            </RadioButton>
          </ButtonWrapper>
        </LineWrapper>
      </ButtonContainer>
      <BackgroundDiv repeat={repeat} position={position} />
    </Container>
  );
};

export default PreviewBackground;
