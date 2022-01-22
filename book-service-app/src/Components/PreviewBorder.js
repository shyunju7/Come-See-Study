import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Round } from "../assets/round-img.svg";
import CustomSelect from "./CustomSelect";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fef6c9;
`;

const Chapter = styled.p`
  font-size: 1rem;
  margin-top: 45px;
  font-weight: 600;
  z-index: 1000;
`;

const GuideText = styled.h2`
  font-size: 1.12rem;
  font-weight: 600;
  margin-top: 100px;
  margin-bottom: 100px;
  z-index: 1000;
`;

const RoundCharacter = styled(Round)`
  position: absolute;
  fill: #0e438b;
  display: flex;
  background-color: transparent;
  border-radius: 50%;
  border-style: ${(props) => (props.borderstyle ? props.borderstyle : "solid")};
  border-width: ${(props) =>
    props.borderwidth ? props.borderwidth + "px" : "0px"};
  border-color: ${(props) =>
    props.bordercolor ? props.bordercolor : "#f87060"};
`;

const LineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1000;
  margin-top: 280px;
  margin-bottom: 85px;
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  align-items: center;
`;

const Text = styled.label`
  width: 156px;
  margin-right: 42px;
  font-size: 17.6px;
  font-weight: 600;
`;

const RangeSlider = styled.input`
  -webkit-appearance: none;
  height: 12px;
  width: 174px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 50px;
  background: #d5d4d3;
  transition: background 450ms ease-in;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    background: #102542;
    box-shadow: -100vw 0 0px 99.5vw #ffffff;
    border: 1px solid #102542;
    border-radius: 50%;
  }

  ::-moz-range-track {
    height: 40px;
    background: #c4c4c4;
  }

  ::-webkit-slider-runnable-track {
    background: #c4c4c4;
  }

  ::-ms-thumb {
    background: #000;
    border: 2px solid teal;
    height: 18px;
    width: 18px;
    box-sizing: border-box;
  }

  ::-moz-range-thumb {
    background: #fff;
    height: 18px;
    width: 18px;
    border: 3px solid #999;
    border-radius: 0 !important;
    box-shadow: -100vw 0 0 100vw #ffffff;
    box-sizing: border-box;
  }

  ::-ms-fill-lower {
    background: #fff;
  }

  ::-ms-fill-upper {
    background: #c4c4c4;
  }

  ::-ms-ticks-after {
    display: none;
  }

  ::-ms-ticks-before {
    display: none;
  }
  ::-ms-track {
    background: #c4c4c4;
    color: transparent;
    height: 40px;
    border: none;
  }

  ::-ms-tooltip {
    display: none;
  }
`;

const BorderStyleOptions = [
  { key: "solid", value: "solid" },
  { key: "dotted", value: "dotted" },
  { key: "dashed", value: "dashed" },
  { key: "double", value: "double" },
  { key: "none", value: "none" },
];

const BorderColorOptions = [
  { key: "Bittersweet", value: "#F87060" },
  { key: "Selective Yellow", value: "#FFB800" },
  { key: "Rose Bud", value: "#FBA794" },
  { key: "Maya Blue", value: "#61C0F5" },
  { key: "Cinnabar", value: "#DF3737" },
];

const PreviewBorder = () => {
  const [borderStyle, setBorderStyle] = useState("solid");
  const [borderWidth, setBorderWidth] = useState(24);
  const [borderColor, setBorderColor] = useState("#F87060");

  useEffect(() => {
    console.log(borderWidth);
  }, [borderWidth]);

  return (
    <Container>
      <Chapter>CSS #4</Chapter>
      <GuideText>Border!</GuideText>
      <RoundCharacter
        borderstyle={borderStyle}
        borderwidth={borderWidth}
        bordercolor={borderColor}
      />
      <LineWrapper>
        <Line>
          <Text>BORDER-STYLE</Text>
          <CustomSelect
            optionValue={BorderStyleOptions}
            setValue={setBorderStyle}
          />
        </Line>
        <Line>
          <Text>BORDER-WIDTH</Text>
          <RangeSlider
            type="range"
            min="0"
            max="295"
            step="1"
            defaultValue={borderWidth}
            onChange={(e) => setBorderWidth(Number(e.target.value))}
          />
        </Line>
        <Line>
          <Text>BORDER-COLOR</Text>
          <CustomSelect
            optionValue={BorderColorOptions}
            setValue={setBorderColor}
          />
        </Line>
      </LineWrapper>
    </Container>
  );
};

export default PreviewBorder;
