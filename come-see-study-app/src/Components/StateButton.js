import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 120px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 16px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  padding: 10px 4px;
  color: #fff;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const StateButton = ({ stateText, handleCheckedValue }) => {
  return <Container onClick={handleCheckedValue}>{stateText}</Container>;
};

export default StateButton;
