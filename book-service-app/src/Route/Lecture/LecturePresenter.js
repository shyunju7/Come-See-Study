import React from "react";
import Editor from "../../Components/Editor";
import * as S from "./style";
import PrevIcon from "../../assets/prev-icon.png";
import NextIcon from "../../assets/next-icon.png";

const LecturePresenter = ({ attrId, setCursorValue, cursorValue, textRef }) => (
  <S.Container>
    <Editor />
    <S.PrevButton
      to={`/${attrId}/preview`}
      onMouseEnter={() => setCursorValue("prev")}
      onMouseLeave={() => setCursorValue("")}
    >
      <img src={PrevIcon} alt="Prev" width="32px" />
    </S.PrevButton>
    <S.NextButton
      to={`/${attrId}/lecture/2`}
      onMouseEnter={() => setCursorValue("next")}
      onMouseLeave={() => setCursorValue("")}
    >
      <img src={NextIcon} alt="Next" width="32px" />
    </S.NextButton>
    <S.CursorDescription ref={textRef}>{cursorValue}</S.CursorDescription>
  </S.Container>
);

export default LecturePresenter;
