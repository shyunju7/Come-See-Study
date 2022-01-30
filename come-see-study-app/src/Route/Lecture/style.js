import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Home } from "../../assets/menu-home.svg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fef6c9;
  position: relative;
  overflow: hidden;
`;

export const CursorDescription = styled.div`
  position: absolute;
  z-index: 1000;
  cursor: default;
  font-size: 18px;
`;

export const PrevButton = styled(Link)`
  border: none;
  outline: none;
  position: absolute;
  top: 50%;
  left: 50px;
  padding: 12px;
  background-color: transparent;
  z-index: 1000;
`;

export const NextButton = styled(Link)`
  border: none;
  outline: none;
  position: absolute;
  top: 50%;
  right: 50px;
  padding: 12px;
  background-color: transparent;
  z-index: 1000;
`;

export const HomeButton = styled(Home)`
  position: absolute;
  top: 55px;
  right: 50px;
  width: 47px;
  height: 49px;
  cursor: pointer;
  transition: 2s width height linear;
  &:hover {
    width: 58px;
    height: 60px;
  }
`;
