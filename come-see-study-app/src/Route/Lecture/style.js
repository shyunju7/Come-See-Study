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

export const NextButton = styled.button`
  border: none;
  outline: none;
  position: absolute;
  top: 50%;
  right: 50px;
  padding: 12px;
  background-color: transparent;
  z-index: 1000;
  cursor: pointer;
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

export const GuideBox = styled.div`
  width: 322px;
  background-color: #ffffff;
  border-radius: 8px;
  font-weight: 100;
  font-size: 17.6px;
  line-height: 28px;
  padding: 4px;
  text-align: center;
  position: absolute;
  z-index: 1011;
  top: 48%;
  right: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
