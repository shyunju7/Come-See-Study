import react from "react";
import styled from "styled-components";
import { ReactComponent as Rect } from "../assets/rect-img.svg";
const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const RectCharacter = styled(Rect)`
  margin-right: 30px;
  fill: #f87060;
  animation-name: changeLocation;
  animation-duration: 10s;
  animation-delay: now;
  animation-iteration-count: infinite;
  line-height: 25px;
  @keyframes changeLocation {
    0% {
      transform: translateX(0px);
      transition-timing-function: linear;
    }
    25% {
      transform: translateX(1000px);
      transition-timing-function: linear;
    }
    50% {
      transform: translateX(0px);
      transition-timing-function: ease;
    }
    75% {
      transform: translateX(1000px);
      transition-timing-function: ease;
    }
    100% {
      transform: translateX(0px);
      transition-timing-function: steps(2, end);
    }
  }
`;

const MainSlideTransitionContents = () => {
  return (
    <Container>
      <RectCharacter />
    </Container>
  );
};

export default MainSlideTransitionContents;
