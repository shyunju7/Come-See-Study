import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
  color: #f87060;
  margin-top: 102px;
  margin-left: 108px;
  margin-bottom: 28px;
  align-self: flex-start;
`;

export const SubTitle = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  opacity: 0.8;
  line-height: 43px;
  color: #f87060;
  margin-left: 108px;
  margin-bottom: 108px;
  align-self: flex-start;
`;

export const Img = styled.img`
  width: 742px;
  margin-bottom: 108px;
`;

export const Text = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  margin: 0px 108px;
  color: #333333;
  margin-bottom: 100px;
`;

export const CursorDescription = styled.div`
  position: absolute;
  z-index: 1000;
  cursor: default;
  font-size: 22px;
`;

export const PopupCookieWrapper = styled.div`
  position: absolute;
  align-self: flex-end;
  display: flex;
  font-size: 20px;
  color: #595959;
  justify-content: center;
  align-items: center;
  right: 10px;
  bottom: 10px;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  position: absolute;
  top: 50px;
  right: 50px;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
`;

export const CheckBox = styled.input`
  display: inline-block;
  width: 20px;
  height: 20px;
`;
