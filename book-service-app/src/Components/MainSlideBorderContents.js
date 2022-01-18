import react from "react";
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
  //filter: drop-shadow(6px 10px 4px rgba(0, 0, 0, 0.25));
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
  return (
    <Container>
      <RoundCharacter />
    </Container>
  );
};

export default MainSlideBorderContents;
