import react, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Rect } from "../assets/rect-img.svg";
import { ReactComponent as Triangle } from "../assets/triangle-img.svg";
import { ReactComponent as Round } from "../assets/round-img.svg";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fef6c9;
`;

const Chapter = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 12px;
`;

const GuideText = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
`;

const RoundCharacter = styled(Round)`
  margin-right: 30px;
`;

const RectCharacter = styled(Rect)`
  margin-right: 30px;
`;

const TriangleChracter = styled(Triangle)`
  margin-top: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
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
  -webkit-appearance: none;
  height: 12px;
  width: 143px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 50px;
  margin-bottom: 20px;
  background: #d5d4d3;
  transition: background 450ms ease-in;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    background: #102542;
    box-shadow: -100vw 0 0 100vw #ffffff;
    border: 3px solid #fff;
    border-radius: 50%;
  }

  ::-moz-range-track {
    height: 40px;
    // background: #c4c4c4;
  }

  ::-webkit-slider-runnable-track {
    background: #c4c4c4;
  }

  ::-ms-thumb {
    background: #000;
    border: 2px solid teal;
    height: 18px;
    width: 18px;
    box-sizing: border-box;
  }

  ::-moz-range-thumb {
    background: #fff;
    height: 18px;
    width: 18px;
    border: 3px solid #999;
    border-radius: 0 !important;
    box-shadow: -100vw 0 0 100vw #ffffff;
    box-sizing: border-box;
  }

  ::-ms-fill-lower {
    background: #fff;
  }

  ::-ms-fill-upper {
    background: #c4c4c4;
  }

  ::-ms-ticks-after {
    display: none;
  }

  ::-ms-ticks-before {
    display: none;
  }
  ::-ms-track {
    background: #c4c4c4;
    color: transparent;
    height: 40px;
    border: none;
  }

  ::-ms-tooltip {
    display: none;
  }
`;

const ColorPreview = () => {
  const [circleRgba, setCircleRgba] = useState({
    r: 16,
    g: 37,
    b: 66,
    a: 1,
  });

  const [rectRgba, setRectRgba] = useState({
    r: 248,
    g: 112,
    b: 96,
    a: 1,
  });

  const [triangleRgba, settriangleRgba] = useState({
    r: 20,
    g: 49,
    b: 9,
    a: 1,
  });

  return (
    <Container>
      <Chapter>CSS #2</Chapter>
      <GuideText>Change your color</GuideText>
      <ImageWrapper>
        <RoundCharacter
          fill={`rgba(${circleRgba.r},${circleRgba.g}, ${circleRgba.b}, ${circleRgba.a})`}
        />
        <RectCharacter
          fill={`rgba(${rectRgba.r},${rectRgba.g}, ${rectRgba.b}, ${rectRgba.a})`}
        />
        <TriangleChracter
          fill={`rgba(${triangleRgba.r},${triangleRgba.g}, ${triangleRgba.b}, ${triangleRgba.a})`}
        />
      </ImageWrapper>
      <RangeSliderWrapper>
        <RGBASliderList>
          <span>
            <label>R</label>
            <RGBASlider
              type="range"
              min="0"
              max="256"
              step="1"
              defaultValue={circleRgba.r}
              onChange={(e) =>
                setCircleRgba({ ...circleRgba, r: Number(e.target.value) })
              }
            />
          </span>
          <span>
            <label>G</label>
            <RGBASlider
              type="range"
              min="0"
              max="256"
              step="1"
              defaultValue={circleRgba.g}
              onChange={(e) =>
                setCircleRgba({ ...circleRgba, g: Number(e.target.value) })
              }
            />
          </span>
          <span>
            <label>B</label>
            <RGBASlider
              type="range"
              min="0"
              max="256"
              step="1"
              defaultValue={circleRgba.b}
              onChange={(e) =>
                setCircleRgba({ ...circleRgba, b: Number(e.target.value) })
              }
            />
          </span>
          <span>
            <label>A</label>
            <RGBASlider
              type="range"
              min="0"
              max="1"
              step="0.1"
              defaultValue={circleRgba.a}
              onChange={(e) =>
                setCircleRgba({ ...circleRgba, a: parseFloat(e.target.value) })
              }
            />
          </span>
        </RGBASliderList>
        <RGBASliderList>
          <RGBASlider
            type="range"
            min="0"
            max="256"
            step="1"
            defaultValue={rectRgba.r}
            onChange={(e) =>
              setRectRgba({ ...rectRgba, r: Number(e.target.value) })
            }
          />
          <RGBASlider
            type="range"
            min="0"
            max="256"
            step="1"
            defaultValue={rectRgba.g}
            onChange={(e) =>
              setRectRgba({ ...rectRgba, g: Number(e.target.value) })
            }
          />
          <RGBASlider
            type="range"
            min="0"
            max="256"
            step="1"
            defaultValue={rectRgba.b}
            onChange={(e) =>
              setRectRgba({ ...rectRgba, b: Number(e.target.value) })
            }
          />
          <RGBASlider
            type="range"
            min="0"
            max="1"
            step="0.1"
            defaultValue={rectRgba.a}
            onChange={(e) =>
              setRectRgba({ ...rectRgba, a: Number(e.target.value) })
            }
          />
        </RGBASliderList>
        <RGBASliderList>
          <RGBASlider
            type="range"
            min="0"
            max="256"
            step="1"
            defaultValue={triangleRgba.r}
            onChange={(e) =>
              settriangleRgba({ ...triangleRgba, r: Number(e.target.value) })
            }
          />
          <RGBASlider
            type="range"
            min="0"
            max="256"
            step="1"
            defaultValue={triangleRgba.g}
            onChange={(e) =>
              settriangleRgba({ ...triangleRgba, g: Number(e.target.value) })
            }
          />
          <RGBASlider
            type="range"
            min="0"
            max="256"
            step="1"
            defaultValue={triangleRgba.b}
            onChange={(e) =>
              settriangleRgba({ ...triangleRgba, b: Number(e.target.value) })
            }
          />
          <RGBASlider
            type="range"
            min="0"
            max="1"
            step="0.1"
            defaultValue={triangleRgba.a}
            onChange={(e) =>
              settriangleRgba({ ...triangleRgba, a: Number(e.target.value) })
            }
          />
        </RGBASliderList>
      </RangeSliderWrapper>
    </Container>
  );
};

export default ColorPreview;
