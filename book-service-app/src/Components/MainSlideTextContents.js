import { ReactComponent as Rect } from "../assets/rect-img.svg";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Bubble = styled.div`
  position: absolute;
  top: 90px;
  right: 28%;
  width: 250px;
  height: 200px;
  background-repeat: no-repeat;
  background-image: url("/img/bg-bubble.png");
  background-size: 250px 193px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const BubbleText = styled.p`
  width: 200px;
  background-color: transparent;
  text-align: center;
  animation-name: changeTextDeco;
  animation-duration: 20s;
  animation-delay: now;
  animation-iteration-count: infinite;
  line-height: 25px;
  @keyframes changeTextDeco {
    0% {
      text-decoration: none;
    }
    25% {
      text-transform: uppercase;
    }
    50% {
      text-decoration: line-through;
    }
    65% {
      text-decoration: none;
    }
    75% {
      text-transform: lowercase;
    }
    100% {
      text-decoration: green wavy underline;
    }
  }
`;

const RectCharacter = styled(Rect)`
  margin-right: 30px;
  fill: #f87060;
`;
const MainSlideTextContents = () => {
  return (
    <Container>
      <Bubble>
        <BubbleText>
          lorem ipsum dolor sit amet, consectetur adipiscing eli
        </BubbleText>
      </Bubble>
      <RectCharacter />
    </Container>
  );
};

export default MainSlideTextContents;
