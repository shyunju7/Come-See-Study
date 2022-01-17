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
  margin-right: 30px;
  fill: #0e438b;
  display: flex;
  background-color: transparent;
  border: 1px solid;
  border-radius: 50%;
  animation-name: changeBorderWidth;
  animation-duration: 8s;
  animation-delay: now;
  filter: drop-shadow(6px 10px 4px rgba(0, 0, 0, 0.25));
  animation-iteration-count: infinite;
  @keyframes changeBorderWidth {
    0% {
      border-width: 20px;
      border-color: #f87060;
    }
    25% {
      padding: 30px;
      border-width: 220px;
      border-color: #f87060;
    }
    50% {
      padding: 0px;
      border-width: 20px;
      border-color: #f87060;
    }
    75% {
      padding: 30px;
      border-width: 220px;
      border-color: #f87060;
    }
    100% {
      padding: 0px;
      border-width: 20px;
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
