import react, { useRef } from "react";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  animation: fadein 2s;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
const NavLink = styled(Link)`
  text-decoration: none;
  color: #fef6c9;
`;

const MenuList = styled.ul`
  display: flex;
  background-color: transparent;
  overflow-x: scroll;
  color: #fef6c9;
`;

const MenuItemContainer = styled.li`
  padding: 4rem 0.8rem;
  font-size: 1.4rem;
  font-weight: bold;
  margin-left: 2rem;
  cursor: default;
  &:hover {
    color: greenyellow;
  }
`;
const MenuItem = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 28px;
  &:first-child {
    margin-top: 12px;
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  position: absolute;
  top: 50px;
  left: 50px;
  background-color: transparent;
  color: #fff;
`;

const Menu = ({ setShow }) => {
  const menuRef = useRef();
  const closeMenu = () => {
    menuRef.current.style = "animation: fadeout 2s;";
    setShow(false);
  };
  return (
    <Container ref={menuRef}>
      <Button onClick={closeMenu}>
        <IoIosClose size="60px" color="#fef6c9" />
      </Button>
      <MenuList>
        <NavLink to={`/1-color/preview`}>
          <MenuItemContainer>
            COLOR
            <MenuItem>rgba</MenuItem>
            <MenuItem>hex</MenuItem>
          </MenuItemContainer>
        </NavLink>
        <MenuItemContainer>
          BACKGROUND
          <MenuItem>background-color</MenuItem>
          <MenuItem>background-image</MenuItem>
          <MenuItem>background-repeat</MenuItem>
        </MenuItemContainer>
        <MenuItemContainer>
          TEXT<MenuItem>color</MenuItem>
          <MenuItem>text-align</MenuItem>
          <MenuItem>text-decoration</MenuItem>
          <MenuItem>text-transform</MenuItem>
        </MenuItemContainer>
        <MenuItemContainer>
          BORDER
          <MenuItem>border-style</MenuItem>
          <MenuItem>border-width</MenuItem>
          <MenuItem>border-color</MenuItem>
        </MenuItemContainer>
        <MenuItemContainer>
          TRANSITION
          <MenuItem>transition</MenuItem>
          <MenuItem>transition-duration</MenuItem>
          <MenuItem>transition-timing-function</MenuItem>
        </MenuItemContainer>
      </MenuList>
    </Container>
  );
};

export default Menu;
