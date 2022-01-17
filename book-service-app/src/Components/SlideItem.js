import react from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MainSlideBackgroundContents from "./MainSlideBackgroundContents";
import MainSlideContents from "./MainSlideContents";
import MainSlideTextContents from "./MainSlideTextContents";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  transform: translateX(-50%, -50%);
  background-color: #fef6c9;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const SlideItem = ({ title, attrTitle }) => {
  return (
    <NavLink to={`/${attrTitle}/preview`}>
      <Container>
        {attrTitle === "color" ? (
          <MainSlideContents title={title} attrTitle={attrTitle} />
        ) : null}
        {attrTitle === "background" ? (
          <MainSlideBackgroundContents title={title} attrTitle={attrTitle} />
        ) : null}
        {attrTitle === "text" ? <MainSlideTextContents /> : null}
      </Container>
    </NavLink>
  );
};

export default SlideItem;
