import react from "react";
import styled from "styled-components";
import { ReactComponent as Rect } from "../assets/rect-shadow.svg";
import { ReactComponent as Triangle } from "../assets/triangle-shadow.svg";
import { ReactComponent as Round } from "../assets/round-shadow.svg";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  height: 180px;
  display: flex;
`;

const RoundCharacter = styled(Round)`
  margin-right: 30px;
`;

const RectCharacter = styled(Rect)`
  margin-right: 30px;
`;

const TriangleChracter = styled(Triangle)`
  margin-top: 20px;
`;
const RangeSliderWrapper = styled.div`
  display: flex;
`;

const RGBASliderList = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 32px;
`;

const RGBASlider = styled.input`
  display: inline;
`;

const ColorPreview = () => {
  return (
    <Container>
      <ImageWrapper>
        <RoundCharacter />
        <RectCharacter />
        <TriangleChracter />
      </ImageWrapper>
      <RangeSliderWrapper>
        <RGBASliderList>
          <span>
            <label>R</label>
            <RGBASlider type="range" />
          </span>
          <span>
            <label>G</label>
            <RGBASlider type="range" />
          </span>
          <span>
            <label>B</label>
            <RGBASlider type="range" />
          </span>
          <span>
            <label>A</label>
            <RGBASlider type="range" />
          </span>
        </RGBASliderList>
        <RGBASliderList>
          <RGBASlider type="range" />
          <RGBASlider type="range" />
          <RGBASlider type="range" />
          <RGBASlider type="range" />
        </RGBASliderList>
        <RGBASliderList>
          <RGBASlider type="range" />
          <RGBASlider type="range" />
          <RGBASlider type="range" />
          <RGBASlider type="range" />
        </RGBASliderList>
      </RangeSliderWrapper>
    </Container>
  );
};

export default ColorPreview;
