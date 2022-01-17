import react from "react";
import styled from "styled-components";
const ImageBackground = styled.div`
  width: 96%;
  height: 90%;
  background-image: url("/img/bg-triangle.gif");
  background-size: 138px;
  background-repeat: space;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.45;
  justify-self: center;
  place-self: center;
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
