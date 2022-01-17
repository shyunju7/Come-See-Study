import React from "react";
import CarouselItem from "../../Components/CarouselItem";
import MainSlider from "../../Components/MainSlider";
import Menu from "../../Components/Menu";
import * as S from "../Main/style";
import MenuIcon from "../../assets/menu-icon.png";

const MainPresenter = ({ data, show, setShow, textRef }) =>
  show ? (
    <Menu setShow={setShow} />
  ) : (
    <S.Container>
      <S.Menu onClick={() => setShow((prev) => !prev)}>
        <img src={MenuIcon} alt="menu" width="38px" />
      </S.Menu>
      <S.CursorDescription ref={textRef} id="custom-cursor" />
      <MainSlider>
        <CarouselItem
          color="#fef6c9"
          attrTitle="COLOR"
          title="CSS #1"
          attrKey="1-color"
        />
        <CarouselItem
          color="#fef6c9"
          attrTitle="BACKGROUND"
          title="CSS #2"
          attrKey="2-background"
        />
        <CarouselItem
          color="#fef6c9"
          attrTitle="TEXT"
          title="CSS #3"
          attrKey="3-text"
        />
        <CarouselItem
          color="#fef6c9"
          attrTitle="BORDER"
          title="CSS #4"
          attrKey="4-border"
        />
        <CarouselItem
          color="#fef6c9"
          attrTitle="TRANSITION"
          title="CSS #5"
          attrKey="5-transition"
        />
      </MainSlider>
    </S.Container>
  );

export default MainPresenter;
