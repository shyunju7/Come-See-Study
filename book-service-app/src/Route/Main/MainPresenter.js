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
  getAttrSettings,
}) =>
  !pageContents[attrId] ? (
    <NotFound />
  ) : show ? (
    <Menu setShow={setShow} />
  ) : (
    <S.Container>
      {show ? <Menu setShow={setShow} /> : null}
      <S.Menu onClick={() => setShow((prev) => !prev)}>
        <img src={MenuIcon} alt="menu" width="38px" />
      </S.Menu>
      <S.CursorDescription ref={textRef} id="custom-cursor" />
      <S.PrevButton to={`/${data.prevAttr}`} onClick={getAttrSettings}>
        <img src={PrevIcon} alt="Prev" width="32px" />
      </S.PrevButton>
      <S.NextButton to={`/${data.nextAttr}`} onClick={getAttrSettings}>
        <img src={NextIcon} alt="Next" width="32px" />
      </S.NextButton>
      <S.NavLink to={`/${attrId}/preview`}>
        <S.ContentsContainer>
          <S.Title>{data.title}</S.Title>
          {pageContents[attrId]}
          <S.AttrTitle>{data.attrTitle}</S.AttrTitle>
        </S.ContentsContainer>
      </S.NavLink>
    </S.Container>
  );

export default MainPresenter;
