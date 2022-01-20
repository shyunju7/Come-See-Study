import styled from "styled-components";
import { ReactComponent as Rect } from "../assets/rect-img.svg";
const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GridContainer = styled.div`
  display: flex;
  height: 143px;
  border: 5px solid rgba(248, 110, 100, 0.6);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GridItem = styled.div`
  border-right: 5px solid rgba(248, 110, 100, 0.6);
  width: 125px;
  height: 100%;
  line-height: 125px;
  font-size: 3.5rem;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &:last-child {
    border-right: none;
  }
`;
const RectCharacter = styled(Rect)`
  position: absolute;
  fill: #f87060;
  animation-name: changeLocation;
  animation-duration: 10s;
  animation-delay: now;
  animation-iteration-count: infinite;
  line-height: 25px;
  @keyframes changeLocation {
    0% {
      transform: translateX(5px);
      transition-timing-function: linear;
    }
    25% {
      transform: translateX(650px);
      transition-timing-function: linear;
    }
    50% {
      transform: translateX(5px);
      transition-timing-function: ease;
    }
    75% {
      transform: translateX(650px);
      transition-timing-function: ease;
    }
    100% {
      transform: translateX(5px);
      transition-timing-function: steps(2, end);
    }
  }
`;

const MainSlideTransitionContents = () => {
  return (
    <Container>
      <GridContainer>
        <GridItem>
          l
          <RectCharacter />
        </GridItem>
        <GridItem>i</GridItem>
        <GridItem>n</GridItem>
        <GridItem>e</GridItem>
        <GridItem>a</GridItem>
        <GridItem>r</GridItem>
      </GridContainer>
    </Container>
  );
};

export default MainSlideTransitionContents;
