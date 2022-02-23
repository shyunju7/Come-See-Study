import React from "react";
import ColorPreview from "../../Components/PreviewColor";
import TextPreview from "../../Components/PreviewText";
import PreviewBackground from "../../Components/PreviewBackground";
import PreviewBorder from "../../Components/PreviewBorder";
import PreviewTransition from "../../Components/PreviewTransition";
import * as S from "./style";
import HomeIcon from "../../assets/home-icon.svg";
import LearningIcon from "../../assets/learning-icon.svg";

import NotFound from "../../Pages/NotFound";
import Loader from "../../Components/Loader";
const pagePreview = {
  color: <ColorPreview />,
  text: <TextPreview />,
  background: <PreviewBackground />,
  border: <PreviewBorder />,
  transition: <PreviewTransition />,
};

const PreviewPresenter = ({
  attrId,
  textRef,
  setCursorValue,
  cursorValue,
  isLoading,
}) =>
  !pagePreview[attrId] ? (
    <NotFound />
  ) : isLoading ? (
    <Loader />
  ) : (
    <div>
      {pagePreview[attrId]}
      <S.CursorDescription ref={textRef}>{cursorValue}</S.CursorDescription>
      <S.PrevButton
        to={`/${attrId}`}
        onMouseEnter={() => setCursorValue("home")}
        onMouseLeave={() => setCursorValue("")}
      >
        <S.Icon src={HomeIcon} alt="Prev" width="47px" />
      </S.PrevButton>
      <S.NextButton
        to={
          window.localStorage.getItem("expires") === new Date().getDate() + 1
            ? `/${attrId}/learning/1`
            : `/${attrId}/syntax`
        }
        onMouseEnter={() => setCursorValue("learn")}
        onMouseLeave={() => setCursorValue("")}
      >
        <S.Icon src={LearningIcon} alt="Next" width="47px" />
      </S.NextButton>
    </div>
  );

export default PreviewPresenter;
