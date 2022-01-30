import React from "react";
import Editor from "../../Components/Editor";
import * as S from "./style";
import PrevIcon from "../../assets/prev-icon.png";
import NextIcon from "../../assets/next-icon.png";
import EditorTest from "../../Components/EditorTest";

const LecturePresenter = ({
  attrId,
  setCursorValue,
  cursorValue,
  textRef,
  handleOnClickHome,
  isChecked,
  setCheck,
  setShowGuide,
  showGuide,
  navigate,
  testData,
  classList,
}) => (
  <S.Container>
    {showGuide ? (
      <S.GuideBox>You have to get it right to move on.</S.GuideBox>
    ) : null}
    <S.HomeButton onClick={handleOnClickHome} />
    <Editor setCheck={setCheck} data={testData} classList={classList} />
    <S.PrevButton
      to={`/${attrId}/preview`}
      onMouseEnter={() => setCursorValue("prev")}
      onMouseLeave={() => setCursorValue("")}
    >
      <img src={PrevIcon} alt="Prev" width="32px" />
    </S.PrevButton>
    <S.NextButton
      onClick={() => {
        if (!showGuide) {
          navigate(`/${attrId}/lecture/2`);
        }
      }}
      onMouseEnter={() => {
        isChecked ? setShowGuide(true) : setCursorValue("next");
      }}
      onMouseLeave={() => {
        setShowGuide(false);
        setCursorValue("");
      }}
    >
      <img src={NextIcon} alt="Next" width="32px" />
    </S.NextButton>
    <S.CursorDescription ref={textRef}>{cursorValue}</S.CursorDescription>
  </S.Container>
);

export default LecturePresenter;
