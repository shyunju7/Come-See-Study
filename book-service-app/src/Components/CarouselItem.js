import react from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => (props.color ? props.color : "transparent")};
`;

const CarouselItem = ({ color }) => {
  return <Container color={color} />;
};

export default CarouselItem;
