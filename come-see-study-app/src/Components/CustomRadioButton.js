import React from "react";
import styled from "styled-components";
const RadioLabel = styled.label`
  background: #fcd270;
  height: 28px;
  min-width: 48px;
  padding: 0px 4px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  &:hover {
    background: #ffd05b;
  }
`;
const Radio = styled.input`
  display: none;
  &:checked + ${RadioLabel} {
    background-color: #ffb300;
    color: #fff;
    border-color: #ffc640;
  }
`;

const RadioButton = ({
  id,
  name,
  value,
  children,
  handleChangeRadioButton,
  textStyle,
  defaultCheck,
}) => {
  return (
    <div style={{ zIndex: 1000 }}>
      <Radio
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={handleChangeRadioButton}
        defaultChecked={defaultCheck}
      />
      <RadioLabel htmlFor={id} style={textStyle}>
        {children}
      </RadioLabel>
    </div>
  );
};

export default RadioButton;
