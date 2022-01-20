import react from "react";
import { Link, useParams } from "react-router-dom";
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
  align-items: center;
`;

const Title = styled.h2`
  position: absolute;
  left: 50%;
  top: 180px;
  transform: translate(-50%, -50%);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 114px;
  z-index: 1000;
`;

const AttrTitle = styled.h1`
  position: absolute;
  bottom: 185px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 94px;
  z-index: 1000;
  text-transform: uppercase;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const SlideItem = ({ title, attrTitle }) => {
  console.log(`title : ${title}, attrTitle: ${attrTitle}`);
  const { attrId } = useParams();

  const handlePageContents = () => {
    switch (attrId) {
      case "color":
        return <MainSlideContents />;
      case "text":
        return <MainSlideTextContents />;
      case "background":
        return <MainSlideBackgroundContents />;
      case "border":
        return <MainSlideBorderContents />;
      case "transition":
        return <MainSlideTransitionContents />;
      default:
        return <MainSlideContents />;
    }
  };

  return (
    <NavLink to={`/${attrId}/preview`}>
      <Container>
        <Title>{title}</Title>
        {handlePageContents()}
        <AttrTitle>{attrTitle}</AttrTitle>
      </Container>
    </NavLink>
  );
};

export default SlideItem;
