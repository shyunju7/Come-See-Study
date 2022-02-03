import React from "react";
import Editor from "../../Components/Editor";
import * as S from "./style";
import PrevIcon from "../../assets/prev-icon.png";
import NextIcon from "../../assets/next-icon.png";

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
  data,
  handleSetPage,
  pageNo,
  totalPage,
  setPageNo,
}) => (
  <S.Container>
    {showGuide ? (
      <S.GuideBox>You have to get it right to move on.</S.GuideBox>
    ) : null}
    <S.HomeButton onClick={handleOnClickHome} />
    <Editor setCheck={setCheck} data={data} />
    <S.PrevButton
      onClick={() => {
        if (pageNo >= 1) {
          console.log(pageNo - 1);
          navigate(`/${attrId}/lecture/${pageNo - 1}`);
          handleSetPage(attrId, pageNo);
        }
      }}
      to={`/${attrId}/preview`}
      onMouseEnter={() => setCursorValue("prev")}
      onMouseLeave={() => setCursorValue("")}
    >
      <img src={PrevIcon} alt="Prev" width="32px" />
    </S.PrevButton>
    <S.NextButton
      onClick={() => {
        if (showGuide && pageNo <= totalPage) {
          navigate(`/${attrId}/lecture/${pageNo}`);
          handleSetPage(attrId, pageNo);
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
