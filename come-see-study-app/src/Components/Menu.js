import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #222222;
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
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const MenuItemContainer = styled.li`
  padding: 4rem 0.8rem;
  font-size: 1.4rem;
  font-weight: bold;
  margin-left: 2rem;
  cursor: pointer;
  &:hover {
    color: #fff09c;
  }
`;
const MenuItem = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 32px;
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
  cursor: pointer;
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
        <NavLink to={`/color`} onClick={closeMenu}>
          <MenuItemContainer>
            COLOR
            <MenuItem>rgb</MenuItem>
            <MenuItem>rgba</MenuItem>
            <MenuItem>hex</MenuItem>
          </MenuItemContainer>
        </NavLink>
        <NavLink to={`/text`} onClick={closeMenu}>
          <MenuItemContainer>
            TEXT<MenuItem>color</MenuItem>
            <MenuItem>text-align</MenuItem>
            <MenuItem>text-decoration</MenuItem>
            <MenuItem>text-transform</MenuItem>
          </MenuItemContainer>
        </NavLink>
        <NavLink to={`/background`} onClick={closeMenu}>
          <MenuItemContainer>
            BACKGROUND
            <MenuItem>background-color</MenuItem>
            <MenuItem>background-repeat</MenuItem>
            <MenuItem>background-position</MenuItem>
          </MenuItemContainer>
        </NavLink>
        <NavLink to={`/border`} onClick={closeMenu}>
          <MenuItemContainer>
            BORDER
            <MenuItem>border-radius</MenuItem>
            <MenuItem>border-width</MenuItem>
            <MenuItem>border-style</MenuItem>
            <MenuItem>border</MenuItem>
          </MenuItemContainer>
        </NavLink>
        <NavLink to={`/transition`} onClick={closeMenu}>
          <MenuItemContainer>
            TRANSITION
            <MenuItem>transition-property</MenuItem>
            <MenuItem>transition-duration</MenuItem>
            <MenuItem>transition-timing-function</MenuItem>
          </MenuItemContainer>
        </NavLink>
      </MenuList>
    </Container>
  );
};

export default Menu;
