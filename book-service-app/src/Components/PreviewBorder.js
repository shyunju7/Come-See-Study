import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Round } from "../assets/round-img.svg";
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
`;

const GuideText = styled.h2`
  font-size: 1.12rem;
  font-weight: 600;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const RoundCharacter = styled(Round)`
  fill: #0e438b;
  display: flex;
  background-color: transparent;
  border: 24px solid #f87060;
  border-radius: 50%;
  border-style: ${(props) => (props.borderStyle ? props.borderStyle : "solid")};
`;

const LineWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.label`
  width: 300px;
  font-size: 17.6px;
  font-weight: 600;
`;

const PreviewBorder = () => {
  const [borderStyle, setBorderStyle] = useState("solid");

  return (
    <Container>
      <Chapter>CSS #4</Chapter>
      <GuideText>Border!</GuideText>
      <RoundCharacter borderStyle={borderStyle} />
      <LineWrapper>
        <Text>BORDER-STYLE</Text>
        <select onChange={(e) => setBorderStyle(e.target.value)}>
          <option value="solid" defaultChecked>
            solid
          </option>
          <option value="dotted">dotted</option>
          <option value="dashed">dashed</option>
          <option value="double">double</option>
          <option value="none">none</option>
        </select>
      </LineWrapper>
      <LineWrapper>
        <Text>BORDER-WIDTH</Text>
      </LineWrapper>
      <LineWrapper>
        <Text>BORDER-COLOR</Text>
      </LineWrapper>
    </Container>
  );
};

export default PreviewBorder;
