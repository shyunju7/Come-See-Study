import React from "react";
import Editor from "../../Components/Editor";
import * as S from "./style";
import PrevIcon from "../../assets/prev-icon.png";
import NextIcon from "../../assets/next-icon.png";
import HomeIcon from "../../assets/home-icon.svg";
import PreviewIcon from "../../assets/preview-icon.svg";
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
      <Editor setCheck={setCheck} data={data} attrId={attrId} pageNo={pageNo} />
      <S.PrevButton
        onClick={() => {
          if (pageNo >= 1) {
            navigate(`/${attrId}/learning/${Number(pageNo) - 1}`);
            handleSetPage(attrId, Number(pageNo) - 1);
          }
        }}
        to={`/${attrId}/preview`}
        onMouseEnter={() => setCursorValue("prev")}
        onMouseLeave={() => setCursorValue("")}
      >
        <S.Icon
          src={pageNo === "1" ? PreviewIcon : PrevIcon}
          alt="Prev"
          iconWidth={pageNo === "1" ? "52px" : "32px"}
        />
      </S.PrevButton>
      <S.NextButton
        onClick={() => {
          if (isChecked && !showGuide && Number(pageNo) < totalPage) {
            navigate(`/${attrId}/learning/${Number(pageNo) + 1}`);
            handleSetPage(attrId, Number(pageNo) + 1);
          }
          if (
            window.localStorage.getItem(attrId) >= pageNo &&
            Number(pageNo) < totalPage
          ) {
            navigate(`/${attrId}/learning/${Number(pageNo) + 1}`);
            handleSetPage(attrId, Number(pageNo) + 1);
          }
          if (isChecked && !showGuide && Number(pageNo) === totalPage) {
            navigate(`/${attrId}/`);
          }
        }}
        onMouseEnter={() => {
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
        <S.Icon
          src={pageNo === totalPage.toString() ? HomeIcon : NextIcon}
          alt="home"
          iconWidth={pageNo === totalPage.toString() ? "52px" : "32px"}
        />
      </S.NextButton>
      <S.CursorDescription ref={textRef}>{cursorValue}</S.CursorDescription>
    </S.Container>
  );

export default LecturePresenter;
