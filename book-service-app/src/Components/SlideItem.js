import react from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MainSlideBackgroundContents from "./MainSlideBackgroundContents";
import MainSlideBorderContents from "./MainSlideBorderContents";
import MainSlideContents from "./MainSlideColorContents";
import MainSlideTextContents from "./MainSlideTextContents";
import MainSlideTransitionContents from "./MainSlideTransitionContents";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  transform: translateX(-50%, -50%);
  background-color: #fef6c9;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  position: absolute;
  left: 50%;
  top: 180px;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 114px;
`;

const AttrTitle = styled.h1`
  position: absolute;
  bottom: 185px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 36px;
  font-weight: bold;
  margin-top: 94px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const SlideItem = ({ title, attrTitle }) => {
  return (
    <NavLink to={`/${attrTitle}/preview`}>
      <Container>
        <Title>{title}</Title>
        {attrTitle === "color" ? <MainSlideContents /> : null}
        {attrTitle === "background" ? <MainSlideBackgroundContents /> : null}
        {attrTitle === "text" ? <MainSlideTextContents /> : null}
        {attrTitle === "border" ? <MainSlideBorderContents /> : null}
        {attrTitle === "transition" ? <MainSlideTransitionContents /> : null}
        <AttrTitle>{attrTitle}</AttrTitle>
      </Container>
    </NavLink>
  );
};

export default SlideItem;
