import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: transparent;
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

export const Icon = styled.img`
  width: 47px;

  transition: 2s width height linear;
  &:hover {
    width: 58px;
    height: 60px;
  }
`;
