import React, { useEffect } from "react";
import { ReactComponent as Round } from "../assets/round-img.svg";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RoundCharacter = styled(Round)`
  fill: #0e438b;
  display: flex;
  background-color: transparent;
  border: 6px solid;
  border-radius: 50%;
  animation-name: changeBorderWidth;
  animation-duration: 8s;
  animation-delay: now;
  animation-iteration-count: infinite;
  @keyframes changeBorderWidth {
    0% {
      border-width: 6px;
      border-color: #f87060;
      padding: 30px;
    }
    25% {
      border-width: 295px;
      border-color: #f87060;
      padding: 0px;
    }
    50% {
      border-width: 6px;
      border-color: #f87060;
      padding: 30px;
    }
    75% {
      border-width: 295;
      border-color: #f87060;
      padding: 0px;
    }
    100% {
      border-width: 6px;
      border-color: #f87060;
    }
  }
`;

const MainSlideBorderContents = () => {
  useEffect(() => {
    const roundLeftEye = document.querySelector("#round-left-eye");
    const roundRightEye = document.querySelector("#round-right-eye");

    const moveToEyes = (e) => {
      if (roundLeftEye && roundRightEye) {
        handleMoveRoundEyes(e);
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

    document.addEventListener("mousemove", moveToEyes);
  }, []);

  return (
    <Container>
      <RoundCharacter />
    </Container>
  );
};

export default MainSlideBorderContents;
