import react, { useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as Rect } from "../assets/rect-img.svg";
import { ReactComponent as Triangle } from "../assets/triangle-img.svg";
import { ReactComponent as Round } from "../assets/round-img.svg";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  fill: #0e438b;
  animation-name: changeFillColorRound;
  animation-duration: 8s;
  animation-delay: now;
  animation-iteration-count: infinite;
  @keyframes changeFillColorRound {
    0% {
      fill: #0e438b;
    }
    25% {
      fill: #0bd953;
    }
    50% {
      fill: #fba794;
    }
    75% {
      fill: #143109;
    }
    100% {
      fill: #61c0f5;
    }
  }
`;

const RectCharacter = styled(Rect)`
  margin-right: 30px;
  fill: #f87060;
  animation-name: changeFillColorRect;
  animation-duration: 8s;
  animation-delay: now;
  animation-iteration-count: infinite;
  @keyframes changeFillColorRect {
    0% {
      fill: #f87060;
    }
    25% {
      fill: #481ca7;
    }
    50% {
      fill: #ffe600;
    }
    75% {
      fill: #c9c197;
    }
    100% {
      fill: #39f1ba;
    }
  }
`;

const TriangleChracter = styled(Triangle)`
  margin-top: 40px;
  fill: #24942f;
  animation-name: changeFillColorTriangle;
  animation-duration: 10s;
  animation-delay: now;
  animation-iteration-count: infinite;
  @keyframes changeFillColorTriangle {
    0% {
      fill: #24942f;
    }
    25% {
      fill: #ffb800;
    }
    50% {
      fill: #0553f1;
    }
    75% {
      fill: #102542;
    }
    100% {
      fill: #df3737;
    }
  }
`;

const MainSlideContents = () => {
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
      if ((e.clientX * 100) / window.innerWidth < 30) x = 30;
      else if ((e.clientX * 100) / window.innerWidth > 51) x = 51;
      else x = (e.clientX * 100) / window.innerWidth;

      if ((e.clientY * 100) / window.innerHeight < 44) y = 44;
      else if ((e.clientY * 100) / window.innerHeight > 48) y = 48;
      else y = (e.clientY * 100) / window.innerHeight;

      roundLeftEye.setAttribute("cx", x);
      roundRightEye.setAttribute("cx", x + 35);
      roundLeftEye.setAttribute("cy", y);
      roundRightEye.setAttribute("cy", y);
    };

    const handleMoveRectEyes = (e) => {
      let x;
      let y;
      if ((e.clientX * 100) / window.innerWidth < 34) x = 34;
      else if ((e.clientX * 100) / window.innerWidth > 56) x = 56;
      else x = (e.clientX * 100) / window.innerWidth;

      if ((e.clientY * 100) / window.innerHeight < 45) y = 45;
      else if ((e.clientY * 100) / window.innerHeight > 50) y = 50;
      else y = (e.clientY * 100) / window.innerHeight;

      rectLeftEye.setAttribute("cx", x);
      rectRightEye.setAttribute("cx", x + 40);
      rectLeftEye.setAttribute("cy", y);
      rectRightEye.setAttribute("cy", y);
    };

    const handleMoveTriangleEyes = (e) => {
      let x = (e.clientX * 100) / window.innerWidth;
      let y = (e.clientY * 100) / window.innerHeight;

      if ((e.clientX * 100) / window.innerWidth < 54) x = 54;
      else if ((e.clientX * 100) / window.innerWidth > 69) x = 69;
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
      <CharacterWrapper>
        <RoundCharacter />
        <RectCharacter />
        <TriangleChracter />
      </CharacterWrapper>
    </Container>
  );
};

export default MainSlideContents;
