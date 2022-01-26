import React from "react";
import Menu from "../../Components/Menu";
import * as S from "../Main/style";
import MenuIcon from "../../assets/menu-icon.png";
import PrevIcon from "../../assets/prev-icon.png";
import NextIcon from "../../assets/next-icon.png";

import MainSlideColorContents from "../../Components/MainSlideColorContents";
import MainSlideTextContents from "../../Components/MainSlideTextContents";
import MainSlideBackgroundContents from "../../Components/MainSlideBackgroundContents";
import MainSlideBorderContents from "../../Components/MainSlideBorderContents";
import MainSlideTransitionContents from "../../Components/MainSlideTransitionContents";
import NotFound from "../../Pages/NotFound";
import Loader from "../../Components/Loader";

const pageContents = {
  color: <MainSlideColorContents />,
  text: <MainSlideTextContents />,
  background: <MainSlideBackgroundContents />,
  border: <MainSlideBorderContents />,
  transition: <MainSlideTransitionContents />,
};

const MainPresenter = ({
  attrId,
  data,
  show,
  setShow,
  textRef,
  getAttrName,
  setCursorValue,
  cursorValue,
  isLoading,
}) =>
  !pageContents[attrId] ? (
    <NotFound />
  ) : isLoading ? (
    <Loader />
  ) : show ? (
    <Menu setShow={setShow} />
  ) : (
    <S.Container>
      {show ? <Menu setShow={setShow} /> : null}
      <S.Menu
        onClick={() => {
          setShow((prev) => !prev);
          setCursorValue("click");
        }}
        onMouseEnter={() => setCursorValue("menu")}
        onMouseLeave={() => setCursorValue("click")}
      >
        <img src={MenuIcon} alt="menu" width="48px" />
      </S.Menu>
      <S.CursorDescription ref={textRef} id="custom-cursor">
        {cursorValue}
      </S.CursorDescription>
      <S.PrevButton
        to={`/${data.prevAttr}`}
        onMouseEnter={() => setCursorValue("prev")}
        onMouseLeave={() => setCursorValue("click")}
      >
        <img src={PrevIcon} alt="Prev" width="32px" />
      </S.PrevButton>
      <S.NextButton
        to={`/${data.nextAttr}`}
        onMouseEnter={() => setCursorValue("next")}
        onMouseLeave={() => setCursorValue("click")}
      >
        <img src={NextIcon} alt="Next" width="32px" />
      </S.NextButton>
      <S.NavLink to={`/${attrId}/preview`}>
        <S.ContentsContainer>
          <S.Title>{data.attrMainTitle}</S.Title>
          {pageContents[attrId]}
          <S.AttrTitle>{data.attrName}</S.AttrTitle>
        </S.ContentsContainer>
      </S.NavLink>
    </S.Container>
  );

export default MainPresenter;
