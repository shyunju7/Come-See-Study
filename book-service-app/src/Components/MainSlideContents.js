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
  fill: #102542;
`;

const RectCharacter = styled(Rect)`
  margin-right: 30px;
  fill: #f87060;
`;

const TriangleChracter = styled(Triangle)`
  margin-top: 40px;
  fill: #143109;
`;
const AttrTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-top: 94px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const MainSlideContents = ({ title, attrTitle }) => {
  useEffect(() => {
    const roundLeftEye = document.querySelector("#round-left-eye");
    const roundRightEye = document.querySelector("#round-right-eye");

    const rectLeftEye = document.querySelector("#rect-left-eye");
    const rectRightEye = document.querySelector("#rect-right-eye");

    const triangleLeftEye = document.querySelector("#triangle-left-eye");
    const triangleRightEye = document.querySelector("#triangle-right-eye");

    const moveToEyes = (e) => {
      if (
        roundLeftEye &&
        roundRightEye &&
        rectLeftEye &&
        rectRightEye &&
        triangleLeftEye &&
        triangleRightEye
      ) {
        handleMoveRoundEyes(e);
        handleMoveRectEyes(e);
        handleMoveTriangleEyes(e);
      }
    };

    const handleMoveRoundEyes = (e) => {
      let x;
      let y;
      if ((e.clientX * 100) / window.innerWidth < 23) x = 23;
      else if ((e.clientX * 100) / window.innerWidth > 64) x = 64;
      else x = (e.clientX * 100) / window.innerWidth;

      if ((e.clientY * 100) / window.innerHeight < 23) y = 23;
      else if ((e.clientY * 100) / window.innerHeight > 43) y = 43;
      else y = (e.clientY * 100) / window.innerHeight;

      roundLeftEye.setAttribute("cx", x);
      roundRightEye.setAttribute("cx", x + 35);
      roundLeftEye.setAttribute("cy", y);
      roundRightEye.setAttribute("cy", y);
    };

    const handleMoveRectEyes = (e) => {
      let x;
      let y;
      if ((e.clientX * 100) / window.innerWidth < 12) x = 12;
      else if ((e.clientX * 100) / window.innerWidth > 68) x = 68;
      else x = (e.clientX * 100) / window.innerWidth;

      if ((e.clientY * 100) / window.innerHeight < 27) y = 27;
      else if ((e.clientY * 100) / window.innerHeight > 35) y = 35;
      else y = (e.clientY * 100) / window.innerHeight;

      rectLeftEye.setAttribute("cx", x);
      rectRightEye.setAttribute("cx", x + 40);
      rectLeftEye.setAttribute("cy", y);
      rectRightEye.setAttribute("cy", y);
    };

    const handleMoveTriangleEyes = (e) => {
      let x = (e.clientX * 100) / window.innerWidth;
      let y = (e.clientY * 100) / window.innerHeight;

      if ((e.clientX * 100) / window.innerWidth < 48) x = 48;
      else if ((e.clientX * 100) / window.innerWidth > 60) x = 60;
      else x = (e.clientX * 100) / window.innerWidth;

      if ((e.clientY * 100) / window.innerHeight < 59) y = 59;
      else if ((e.clientY * 100) / window.innerHeight > 68) y = 68;
      else y = (e.clientY * 100) / window.innerHeight;

      triangleLeftEye.setAttribute("cx", x);
      triangleRightEye.setAttribute("cx", x + 30);
      triangleLeftEye.setAttribute("cy", y);
      triangleRightEye.setAttribute("cy", y);
    };

    document.addEventListener("mousemove", moveToEyes);
  }, []);

  return (
    <Container>
      <Title>{title}</Title>
      <CharacterWrapper>
        <RoundCharacter />
        <RectCharacter />
        <TriangleChracter />
      </CharacterWrapper>
      <AttrTitle>{attrTitle}</AttrTitle>
    </Container>
  );
};

export default MainSlideContents;
