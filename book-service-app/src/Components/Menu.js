import react from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
`;

const Menu = ({ setShow }) => {
  return (
    <Container>
      <button onClick={() => setShow(false)}>x</button>
    </Container>
  );
};

export default Menu;
