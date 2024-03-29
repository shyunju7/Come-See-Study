import { Link } from "react-router-dom";
import styled from "styled-components";

export const CursorDescription = styled.div`
  position: absolute;
  z-index: 1000;
  cursor: default;
  font-size: 22px;
`;

export const Menu = styled.div`
  position: absolute;
  padding: 12px;
  top: 50px;
  left: 50px;
  z-index: 1000;
`;

export const Icon = styled.img`
  width: ${(props) => (props.iconWidth ? props.iconWidth : "32px")};

  transition: 2s width height linear;
  &:hover {
    width: ${(props) => (props.iconWidth ? "58px" : "42px")};
  }
`;

export const PrevButton = styled(Link)`
  border: none;
  outline: none;
  position: absolute;
  top: 50%;
  left: 50px;
  background-color: transparent;
  z-index: 1000;
  padding: 12px;
`;

export const NextButton = styled(Link)`
  border: none;
  outline: none;
  position: absolute;
  top: 50%;
  right: 50px;
  background-color: transparent;
  z-index: 1000;
  padding: 12px;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: transparent;
  position: relative;
  overflow: hidden;
`;

export const ContentsContainer = styled.div`
  width: 100%;
  height: 100vh;
  transform: translateX(-50%, -50%);
  background-color: #fef6c9;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  position: absolute;
  left: 50%;
  top: 180px;
  transform: translate(-50%, -50%);
  font-size: 1.4rem;
  line-height: 29px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 114px;
  z-index: 1000;
  color: #333333;
`;

export const AttrTitle = styled.h1`
  position: absolute;
  bottom: 85px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.82rem;
  font-weight: 600;
  line-height: 43.88px;
  font-style: normal;
  margin-top: 94px;
  z-index: 1000;
  text-transform: uppercase;
  color: #333333;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
