import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  width: 174px;

  background-color: transparent;
  display: flex;
  justify-content: center;
`;

const SelectBox = styled.div`
  position: relative;
  width: 100%;
  padding: 8px;
  border-radius: 12px;
  cursor: pointer;
  background-color: #ffffff;
  align-self: center;
  &::before {
    content: "⌵";
    position: absolute;
    top: 1px;
    right: 8px;
    color: #222222;
    font-size: 20px;
  }
`;

const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
`;

const SelectOption = styled.ul`
  position: absolute;
  list-style: none;
  top: 32px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 100px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  max-height: ${(props) => (props.show ? "none" : 0)};
  padding: 0;
  border-radius: 8px;
  background: #222222;
  color: #ffffff;
  transition: 0.5s ease-in;
  z-index: 1001;
`;

const OptionItem = styled.li`
  font-size: 14px;
  padding: 6px 12px;
  transition: 0.1s ease-in;
  &:hover {
    background-color: #515151;
  }
`;

const CustomSelect = ({ optionValue, setValue }) => {
  const [showOption, setShowOption] = useState(false);

  const [currentOption, setCurrentOption] = useState(optionValue[0].key);

  const handleChangeOption = (e) => {
    setCurrentOption(e.target.innerText);
    setShowOption(!showOption);
    setValue(e.target.getAttribute("value"));
  };

  return (
    <Container>
      <SelectBox onClick={() => setShowOption(!showOption)}>
        <Label>{currentOption}</Label>
        <SelectOption show={showOption}>
          {optionValue.map((option) => {
            return (
              <OptionItem
                key={option.key}
                value={option.value}
                onClick={handleChangeOption}
              >
                {option.key}
              </OptionItem>
            );
          })}
        </SelectOption>
      </SelectBox>
    </Container>
  );
};

export default CustomSelect;
