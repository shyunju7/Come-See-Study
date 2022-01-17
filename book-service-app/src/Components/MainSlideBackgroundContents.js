import react from "react";
import styled from "styled-components";
import bgImg from "../assets/bg-triangle.gif";
const ImageBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("http://localhost:3000/static/media/bg-triangle.d85687510a9fd150efc7.gif");
  background-size: 138px;
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 114px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const AttrTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-top: 94px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const MainSlideBackgroundContents = ({ title, attrTitle }) => {
  return (
    <ImageBackground>
      <Title>{title}</Title>
      <AttrTitle>{attrTitle}</AttrTitle>
    </ImageBackground>
  );
};

export default MainSlideBackgroundContents;
