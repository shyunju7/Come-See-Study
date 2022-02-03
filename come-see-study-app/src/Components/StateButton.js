import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoCheckmark, IoClose } from "react-icons/io5";
const Container = styled.div`
  width: 64px;
  height: 30px;
  background-color: #504428;
  border-radius: 8px;
  text-align: center;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 30px;
  color: ${(props) => (props.color ? props.color : "#fef6c9")};
  cursor: pointer;
  &:hover {
    background-color: rgba(80, 68, 40, 0.8);
  }
`;

const StateButton = ({ stateText, handleCheckedValue }) => {
  const [textColor, setTextColor] = useState("#fef6c9");
  useEffect(() => {
    switch (stateText) {
      case "check":
        setTextColor("#fef6c9");
        break;
      case "correct":
        setTextColor("#ADFF2F");
        break;
      case "try-again":
        setTextColor("#F87060");
        break;
      default:
        setTextColor("#fef6c9");
        break;
    }
  }, [stateText]);

  return (
    <Container color={textColor} onClick={handleCheckedValue}>
      {stateText === "check" ? (
        "check"
      ) : stateText === "correct" ? (
        <IoCheckmark size="24px" />
      ) : (
        <IoClose size="24px" />
      )}
    </Container>
  );
};

export default StateButton;
