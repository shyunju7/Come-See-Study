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

const MainSlideBorderContents = () => {
  return <Container>border</Container>;
};

export default MainSlideBorderContents;
