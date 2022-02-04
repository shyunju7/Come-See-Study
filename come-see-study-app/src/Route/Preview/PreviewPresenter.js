import React from "react";
import ColorPreview from "../../Components/PreviewColor";
import TextPreview from "../../Components/PreviewText";
import PreviewBackground from "../../Components/PreviewBackground";
import PreviewBorder from "../../Components/PreviewBorder";
import PreviewTransition from "../../Components/PreviewTransition";
import * as S from "./style";
import PrevIcon from "../../assets/prev-icon.png";
import NextIcon from "../../assets/next-icon.png";
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
        onMouseEnter={() => setCursorValue("prev")}
        onMouseLeave={() => setCursorValue("")}
      >
        <img src={PrevIcon} alt="Prev" width="32px" />
      </S.PrevButton>
      <S.NextButton
        to={`/${attrId}/syntax`}
        onMouseEnter={() => setCursorValue("next")}
        onMouseLeave={() => setCursorValue("")}
      >
        <img src={NextIcon} alt="Next" width="32px" />
      </S.NextButton>
    </div>
  );

export default PreviewPresenter;
