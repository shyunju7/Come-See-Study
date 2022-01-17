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
  background-color: ${(props) => (props.color ? props.color : "transparent")};
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const CarouselItem = ({ color, title, attrTitle, attrKey }) => {
  return (
    <NavLink to={`/${attrKey}/preview`}>
      <Container color={color}>
        {attrKey === "1-color" ? (
          <MainSlideContents title={title} attrTitle={attrTitle} />
        ) : null}
        {attrKey === "2-background" ? (
          <MainSlideBackgroundContents title={title} attrTitle={attrTitle} />
        ) : null}
        {attrKey === "3-text" ? <MainSlideTextContents /> : null}
      </Container>
    </NavLink>
  );
};

export default CarouselItem;
