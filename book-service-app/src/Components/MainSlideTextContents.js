import react from "react";
import { ReactComponent as Rect } from "../assets/rect-img.svg";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Bubble = styled.div`
  width: 250px;
  height: 200px;
  background-repeat: no-repeat;
  background-image: url("http://localhost:3000/static/media/bubble-bg.df18892407e8836242cb.png");
  background-size: 250px 193px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BubbleText = styled.p`
  width: 200px;
  background-color: transparent;
  text-align: center;
`;

const RectCharacter = styled(Rect)`
  margin-right: 30px;
  fill: #f87060;
`;
const MainSlideTextContents = () => {
  return (
    <Container>
      <Bubble>
        <BubbleText>welcome to our service!!</BubbleText>
      </Bubble>
      <RectCharacter />
    </Container>
  );
};

export default MainSlideTextContents;
