import React from "react";
import styled from "styled-components";
import triangle from "../assets/bg-main.gif";
const ImageBackground = styled.div`
  width: 96%;
  height: 90%;
  background-image: url(${triangle});
  background-size: 138px;
  background-repeat: round;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.45;
  justify-self: center;
  place-self: center;
`;
const MainSlideBackgroundContents = () => {
  return <ImageBackground />;
};

export default MainSlideBackgroundContents;
