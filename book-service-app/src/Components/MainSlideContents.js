import react, { useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as Rect } from "../assets/rect-shadow.svg";
import { ReactComponent as Triangle } from "../assets/triangle-shadow.svg";
import { ReactComponent as Round } from "../assets/round-shadow.svg";
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 114px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const CharacterWrapper = styled.div`
  width: 100%;
  height: 150px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RoundCharacter = styled(Round)`
  margin-right: 30px;
`;

const RectCharacter = styled(Rect)`
  margin-right: 30px;
`;

const TriangleChracter = styled(Triangle)`
  margin-top: 40px;
`;
const AttrTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-top: 94px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const MainSlideContents = () => {
  const eyes = document.querySelectorAll(".eye");

  return (
    <Container>
      <Title>CSS #01</Title>
      <CharacterWrapper>
        <RoundCharacter />
        <RectCharacter />
        <TriangleChracter />
      </CharacterWrapper>
      <AttrTitle>COLOR</AttrTitle>
    </Container>
  );
};

export default MainSlideContents;
