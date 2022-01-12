import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { HiMenuAlt4 } from "react-icons/hi";

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
    background-color: #102542;
    color: #fff;
    border-radius: 50%;
    padding: 21px 10px;
  }
`;
