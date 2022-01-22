import React, { useState } from "react";
import { ReactComponent as Rect } from "../assets/rect-img.svg";
import styled from "styled-components";
import bubble from "../assets/bg-bubble-preview-text.png";
import RadioButton from "./CustomRadioButton";
import {
  AiOutlineAlignLeft,
  AiOutlineAlignCenter,
  AiOutlineAlignRight,
} from "react-icons/ai";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fef6c9;
`;
const Chapter = styled.p`
  font-size: 1rem;
  margin-top: 45px;
  font-weight: 600;
  margin-bottom: 65px;
`;

const Bubble = styled.div`
  width: 100%;
  max-width: 834px;
  height: 428px;
  background-image: url(${bubble});
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const BubbleText = styled.p`
  width: 80%;
  font-size: 1.1rem;
  font-weight: 400;
  background-color: transparent;
  text-align: center;
  line-height: 29px;
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  text-decoration: ${(props) =>
    props.textDecoration ? props.textDecoration : "none"};
  text-transform: ${(props) =>
    props.textTransform ? props.textTransform : "none"};
`;

const RectCharacter = styled(Rect)`
  fill: #f87060;
  margin-left: 80px;
`;
const ContentsWrapper = styled.div`
  width: 68%;
  display: flex;
  margin-top: 8px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const Text = styled.label`
  width: 220px;
  font-size: 17.6px;
  font-weight: 600;
`;

const PreviewText = () => {
  const [textTransform, setTextTransform] = useState("none");
  const [textDecoration, setTextDecoration] = useState("none");
  const [textAlign, setTextAlign] = useState("center");

  const handleChangeRadioButton = (e) => {
    const { value, name } = e.target;
    if (name === "align") {
      setTextAlign(value);
    } else if (name === "deco") {
      setTextDecoration(value);
    } else if (name === "transform") {
      setTextTransform(value);
    } else {
      return;
    }
  };

  return (
    <Container>
      <Chapter>CSS #2</Chapter>
      <Bubble>
        <BubbleText
          textTransform={textTransform}
          textDecoration={textDecoration}
          textAlign={textAlign}
        >
          The text-align property is used to set the horizontal alignment of a
          text. A text can be left or right aligned, centered, or justified. The
          text-decoration property is used to set or remove decorations from
          text. The text-transform property is used to specify uppercase and
          lowercase letters in a text.
        </BubbleText>
      </Bubble>
      <ContentsWrapper>
        <RectCharacter />
        <ButtonContainer>
          <LineWrapper>
            <Text>TEXT-ALIGN</Text>
            <ButtonWrapper>
              <RadioButton
                id="alignStart"
                name="align"
                value="start"
                handleChangeRadioButton={handleChangeRadioButton}
              >
                <AiOutlineAlignLeft size="18px" />
              </RadioButton>
              <RadioButton
                id="alignCenter"
                name="align"
                value="center"
                handleChangeRadioButton={handleChangeRadioButton}
              >
                <AiOutlineAlignCenter size="18px" />
              </RadioButton>
              <RadioButton
                id="alignEnd"
                name="align"
                value="end"
                handleChangeRadioButton={handleChangeRadioButton}
              >
                <AiOutlineAlignRight size="18px" />
              </RadioButton>
            </ButtonWrapper>
          </LineWrapper>
          <LineWrapper>
            <Text>TEXT-DECORATION</Text>
            <ButtonWrapper>
              <RadioButton
                type="radio"
                id="underline"
                name="deco"
                value="underline"
                handleChangeRadioButton={handleChangeRadioButton}
                textStyle={{ textDecoration: "underline" }}
              >
                Ab
              </RadioButton>
              <RadioButton
                type="radio"
                id="line-through"
                name="deco"
                value="line-through"
                handleChangeRadioButton={handleChangeRadioButton}
                textStyle={{ textDecoration: "line-through" }}
              >
                Ab
              </RadioButton>
              <RadioButton
                type="radio"
                id="overline"
                name="deco"
                value="overline"
                handleChangeRadioButton={handleChangeRadioButton}
                textStyle={{ textDecoration: "overline" }}
              >
                Ab
              </RadioButton>
            </ButtonWrapper>
          </LineWrapper>
          <LineWrapper>
            <Text>TEXT-TRANSFORM</Text>
            <ButtonWrapper>
              <RadioButton
                type="radio"
                id="uppercase"
                name="transform"
                value="uppercase"
                handleChangeRadioButton={handleChangeRadioButton}
              >
                AB
              </RadioButton>
              <RadioButton
                type="radio"
                id="lowercase"
                name="transform"
                value="lowercase"
                handleChangeRadioButton={handleChangeRadioButton}
              >
                ab
              </RadioButton>
            </ButtonWrapper>
          </LineWrapper>
        </ButtonContainer>
      </ContentsWrapper>
    </Container>
  );
};

export default PreviewText;
