import React from "react";
import Editor from "../../Components/Editor";
import * as S from "./style";
import PrevIcon from "../../assets/prev-icon.png";
import NextIcon from "../../assets/next-icon.png";
import Loader from "../../Components/Loader";
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
  pageNo,
  handleSetPage,
  totalPage,
  isLoading,
}) =>
  isLoading ? (
    <Loader />
  ) : (
    <S.Container>
      {showGuide ? (
        <S.GuideBox>You have to get it right to move on.</S.GuideBox>
      ) : null}
      <S.HomeButton onClick={handleOnClickHome} />
      <Editor setCheck={setCheck} data={data} />
      <S.PrevButton
        onClick={() => {
          if (pageNo >= 1) {
            navigate(`/${attrId}/lecture/${Number(pageNo) - 1}`);
            handleSetPage(attrId, Number(pageNo) - 1);
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
          if (isChecked && !showGuide && pageNo < totalPage) {
            navigate(`/${attrId}/lecture/${Number(pageNo) + 1}`);
            handleSetPage(attrId, Number(pageNo) + 1);
          }
        }}
        onMouseEnter={() => {
          // isChecked ? setShowGuide(true) : setCursorValue("next");
          if (isChecked && !showGuide) {
            setCursorValue("next");
          } else if (!isChecked || showGuide) {
            setShowGuide(true);
          }
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
