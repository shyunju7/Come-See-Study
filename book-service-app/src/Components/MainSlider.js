import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import PrevIcon from "../assets/prev-icon.png";
import NextIcon from "../assets/next-icon.png";
import PrevImg from "../assets/prev-button-bg.png";
const Container = styled.div`
  width: 100%;
`;

export const PrevButton = styled.button`
  border: none;
  outline: none;
  position: absolute;
  top: 50%;
  left: 50px;
  z-index: 1000;
  background-color: transparent;
  &:hover {
    img {
      display: none;
    }
    border-radius: 4px;
    border-left: 30px solid none;
    border-top: 26px solid transparent;
    border-bottom: 26px solid transparent;
    border-right: 30px solid #102542;
  }
`;

export const NextButton = styled.button`
  border: none;
  outline: none;
  position: absolute;
  top: 50%;
  right: 50px;
  z-index: 1000;
  background-color: transparent;

  &:hover {
    img {
      display: none;
    }
    border-radius: 4px;
    border-left: 30px solid #102542;
    border-top: 26px solid transparent;
    border-bottom: 26px solid transparent;
    border-right: 30px solid none;
  }
`;
const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  arrows: false,
  autoplay: false,
  fade: true,
  lazyLoad: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const MainSlider = ({ children }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const cursor = document.querySelector("#custom-cursor");
    const prevButton = document.querySelector("#slide-prev-btn");
    // prevButton.addEventListener("mouseover", function (e) {
    //   cursor.style.background = "#102542";
    //   cursor.style.color = "#ffffff";
    //   cursor.style.borderRadius = "50%";
    //   cursor.style.contents = "prev";
    //   cursor.style.padding = "22px 10px";

    //   console.log(cursor.style);
    // });
    // prevButton.addEventListener("mouseout", function (e) {
    //   cursor.style.background = "transparent";
    //   cursor.style.color = "#000000";
    //   cursor.style.borderRadius = "0%";
    //   cursor.style.contents = "click";
    //   cursor.style.padding = "0px";

    //   console.log(cursor.style);
    // });
  }, []);

  const handlePrevPage = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextPage = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  return (
    <Container>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
      <PrevButton
        onClick={handlePrevPage}
        id="slide-prev-btn"
        hoverImg={PrevImg}
      >
        <img src={PrevIcon} alt="Prev" width="32px" />
      </PrevButton>
      <NextButton onClick={handleNextPage}>
        <img src={NextIcon} alt="Next" width="32px" />
      </NextButton>
    </Container>
  );
};

export default MainSlider;
