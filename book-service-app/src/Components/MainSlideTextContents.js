import { ReactComponent as Rect } from "../assets/rect-img.svg";
import styled from "styled-components";
import { useEffect } from "react";
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
  top: 20%;
  right: 25%;
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
  font-size: 1rem;
  background-color: transparent;
  text-align: center;
  animation-name: changeTextDeco;
  animation-duration: 15s;
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
  fill: #f87060;
`;
const MainSlideTextContents = () => {
  useEffect(() => {
    const rectLeftEye = document.querySelector("#rect-left-eye");
    const rectRightEye = document.querySelector("#rect-right-eye");

    const moveToEyes = (e) => {
      if (rectLeftEye && rectRightEye) {
        handleMoveRectEyes(e);
      }
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

    document.addEventListener("mousemove", moveToEyes);
  }, []);

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
