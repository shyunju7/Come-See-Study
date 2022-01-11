import react, { useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
  animation: fadein 2s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const Menu = ({ setShow }) => {
  const menuRef = useRef();
  const closeMenu = () => {
    menuRef.current.style = "animation: fadeout 2s;";
    setShow(false);
  };
  return (
    <Container ref={menuRef}>
      <button onClick={closeMenu}>x</button>
    </Container>
  );
};

export default Menu;
