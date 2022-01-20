import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  position: relative;
  overflow: hidden;
`;

export const CursorDescription = styled.div`
  position: absolute;
  z-index: 1000;
  cursor: default;
  font-size: 18px;
  ::before {
    content: "click";
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
  z-index: 1000;

  &:hover + ${CursorDescription} {
    ::before {
      content: "";
    }
    ::after {
      content: "menu";
    }
    /* background-color: #102542;
    color: #fff;
    border-radius: 50%;
    padding: 22px 10px;
    font-size: 12px; */
  }
`;

export const PrevButton = styled(Link)`
  border: none;
  outline: none;
  position: absolute;
  top: 50%;
  left: 50px;
  z-index: 1000;
  background-color: transparent;
`;

export const NextButton = styled(Link)`
  border: none;
  outline: none;
  position: absolute;
  top: 50%;
  right: 50px;
  z-index: 1000;
  background-color: transparent;
`;
