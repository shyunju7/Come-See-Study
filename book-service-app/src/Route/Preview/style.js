import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: transparent;
`;

export const PrevButton = styled(Link)`
  border: none;
  outline: none;
  position: absolute;
  top: 50%;
  left: 50px;
  background-color: transparent;
  z-index: 1000;
`;

export const NextButton = styled(Link)`
  border: none;
  outline: none;
  position: absolute;
  top: 50%;
  right: 50px;
  background-color: transparent;
  z-index: 1000;
`;
