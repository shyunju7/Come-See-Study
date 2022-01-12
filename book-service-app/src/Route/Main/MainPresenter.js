import React from "react";
import CarouselItem from "../../Components/CarouselItem";
import MainSlider from "../../Components/MainSlider";
import Menu from "../../Components/Menu";
import * as S from "../Main/style";
import MenuIcon from "../../assets/menu-icon.png";
import PrevIcon from "../../assets/prev-icon.png";
import NextIcon from "../../assets/next-icon.png";

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
        <CarouselItem color="#fef6c9" />
        <CarouselItem color="#C9C197" />
        <CarouselItem color="#806D40" />
      </MainSlider>
    </S.Container>
  );

export default MainPresenter;
