import React from "react";
import SlideItem from "../../Components/SlideItem";
import Menu from "../../Components/Menu";
import * as S from "../Main/style";
import MenuIcon from "../../assets/menu-icon.png";
import PrevIcon from "../../assets/prev-icon.png";
import NextIcon from "../../assets/next-icon.png";
import { PrevButton, NextButton } from "../Main/style";
const MainPresenter = ({ data, show, setShow, textRef, getAttrSettings }) =>
  show ? (
    <Menu setShow={setShow} />
  ) : (
    <S.Container>
      <S.Menu onClick={() => setShow((prev) => !prev)}>
        <img src={MenuIcon} alt="menu" width="38px" />
      </S.Menu>
      <S.CursorDescription ref={textRef} id="custom-cursor" />
      <PrevButton to={`/${data.prevAttr}`} onClick={getAttrSettings}>
        <img src={PrevIcon} alt="Prev" width="32px" />
      </PrevButton>
      <NextButton to={`/${data.nextAttr}`} onClick={getAttrSettings}>
        <img src={NextIcon} alt="Next" width="32px" />
      </NextButton>
      <SlideItem attrTitle={data.attrTitle} title={data.title} />
    </S.Container>
  );

export default MainPresenter;
