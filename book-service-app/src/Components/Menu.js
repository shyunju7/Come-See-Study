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

const MenuList = styled.ul`
  display: flex;
  background-color: teal;
  overflow-x: scroll;
`;

const MenuItemContainer = styled.li`
  padding: 4rem 2rem;
  font-size: 1.4rem;
  font-weight: bold;
  margin-left: 2rem;
  cursor: default;
  &:hover {
    color: greenyellow;
  }
`;
const MenuItem = styled.div`
  width: 200px;
  font-weight: 400;
  font-size: 1rem;
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
      <MenuList>
        <MenuItemContainer>
          color
          <MenuItem>rgba</MenuItem>
          <MenuItem>hex</MenuItem>
        </MenuItemContainer>
        <MenuItemContainer>
          Background
          <MenuItem>background-color</MenuItem>
          <MenuItem>background-image</MenuItem>
          <MenuItem>background-repeat</MenuItem>
          <MenuItem>background-position</MenuItem>
          <MenuItem>background-attachment</MenuItem>
        </MenuItemContainer>
        <MenuItemContainer>
          Text<MenuItem>color</MenuItem>
          <MenuItem>direction</MenuItem>
          <MenuItem>letter-spacing</MenuItem>
          <MenuItem>word-spacing</MenuItem>
          <MenuItem>text-indent</MenuItem>
          <MenuItem>text-align</MenuItem>
          <MenuItem>text-decoration</MenuItem>
          <MenuItem>text-transform</MenuItem>
          <MenuItem>line-height</MenuItem>
          <MenuItem>text-shadow</MenuItem>
        </MenuItemContainer>
        <MenuItemContainer>
          Border
          <MenuItem>border-style</MenuItem>
          <MenuItem>border-width</MenuItem>
          <MenuItem>border-color</MenuItem>
        </MenuItemContainer>
        <MenuItemContainer>
          Transition
          <MenuItem>transition</MenuItem>
          <MenuItem>transition-delay</MenuItem>
          <MenuItem>transition-duration</MenuItem>
          <MenuItem>transition-property</MenuItem>
          <MenuItem>transition-timing-function</MenuItem>
        </MenuItemContainer>
      </MenuList>
    </Container>
  );
};

export default Menu;
