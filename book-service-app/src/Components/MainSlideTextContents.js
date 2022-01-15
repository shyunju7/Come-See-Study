import react from "react";
import { ReactComponent as Rect } from "../assets/rect-shadow.svg";
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
`;

const RectCharacter = styled(Rect)`
  margin-right: 30px;
  fill: #f87060;
`;
const MainSlideTextContents = () => {
  return (
    <Container>
      <Bubble></Bubble>
      <RectCharacter />
    </Container>
  );
};

export default MainSlideTextContents;
