import react from "react";
import styled from "styled-components";
import MainSlideContents from "./MainSlideContents";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  transform: translateX(-50%, -50%);
  background-color: ${(props) => (props.color ? props.color : "transparent")};
`;

const CarouselItem = ({ color }) => {
  return (
    <Container color={color}>
      <MainSlideContents />
    </Container>
  );
};

export default CarouselItem;
