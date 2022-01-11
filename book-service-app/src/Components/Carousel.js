import react, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CarouselItem from "./CarouselItem";

const Container = styled.div`
  width: 100vw;
  margin: auto;
  height: 100vh;
  background-color: teal;
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
`;

const TOTAL_SLIDE_COUNT = 4;
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const handleNextSlide = () => {
    // 초기화
    if (currentSlide >= TOTAL_SLIDE_COUNT) setCurrentSlide(0);
    else setCurrentSlide((prev) => prev + 1);
  };

  const handlePrevSlide = () => {
    if (currentSlide === 0) setCurrentSlide(TOTAL_SLIDE_COUNT);
    else setCurrentSlide((prev) => prev - 1);
  };

  useEffect(() => {
    slideRef.current.style.transition = "all  0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <Container>
      <SliderContainer ref={slideRef}>
        <CarouselItem color="red" />
        <CarouselItem color="orange" />
      </SliderContainer>
      <button onClick={handlePrevSlide}>prev</button>
      <button onClick={handleNextSlide}>next</button>
    </Container>
  );
};

export default Carousel;
