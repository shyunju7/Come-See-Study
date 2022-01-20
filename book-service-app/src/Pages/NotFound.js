import react from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: red;
`;
const NotFound = () => (
  <Container>
    <Text>Not Found Page...!</Text>
  </Container>
);

export default NotFound;
