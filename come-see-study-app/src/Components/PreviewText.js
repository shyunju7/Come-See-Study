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
  margin-bottom: 68px;
  font-weight: 600;
  line-height: 21.45px;
  font-style: normal;
`;

const GuideText = styled.h2`
  font-size: 1.12rem;
  font-weight: 600;
  line-height: 27.31px;
  font-style: normal;
  position: absolute;
  z-index: 1000;
  top: 173px;
`;

const Bubble = styled.div`
  width: 100%;
  max-width: 834px;
  height: 400px;
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
`;
const ContentsWrapper = styled.div`
  display: flex;
  margin-top: 8px;
  padding-right: 48px;
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
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
  align-self: center;
`;

const Text = styled.label`
  width: 220px;
  font-size: 18px;
  line-height: 25px;
  font-style: normal;
  font-weight: 400;
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
      <GuideText>Text styling!</GuideText>
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
                defaultCheck={false}
              >
                <AiOutlineAlignLeft size="18px" />
              </RadioButton>
              <RadioButton
                id="alignCenter"
                name="align"
                value="center"
                handleChangeRadioButton={handleChangeRadioButton}
                defaultCheck={true}
              >
                <AiOutlineAlignCenter size="18px" />
              </RadioButton>
              <RadioButton
                id="alignEnd"
                name="align"
                value="end"
                handleChangeRadioButton={handleChangeRadioButton}
                defaultCheck={false}
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
                defaultCheck={false}
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
                defaultCheck={false}
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
                defaultCheck={false}
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
                defaultCheck={false}
              >
                AB
              </RadioButton>
              <RadioButton
                type="radio"
                id="transform-none"
                name="transform"
                value="none"
                handleChangeRadioButton={handleChangeRadioButton}
                defaultCheck={true}
              >
                Ab
              </RadioButton>
              <RadioButton
                type="radio"
                id="lowercase"
                name="transform"
                value="lowercase"
                handleChangeRadioButton={handleChangeRadioButton}
                defaultCheck={false}
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
