import React from "react";
import * as S from "./style";
import SyntaxImg from "../../assets/syntax-img.png";
import PrevIcon from "../../assets/prev-icon.png";
import NextIcon from "../../assets/next-icon.png";
const SyntaxPresenter = ({ textRef, setCursorValue, attrId, cursorValue }) => (
  <S.Container>
    <S.Title>Before You Start ! </S.Title>
    <S.SubTitle>
      You must follow correct CSS Syntax to activate your code.
    </S.SubTitle>
    <S.Img src={SyntaxImg} />
    <S.Text>
      On the learning page, the description of the attribute, the correct answer
      image, the code window, and the result screen will appear. In the code
      window, you can write the answer with the above structure and move on to
      the next page only if it is correct.
    </S.Text>
    <S.CursorDescription ref={textRef}>{cursorValue}</S.CursorDescription>
    <S.PrevButton
      to={`/${attrId}/preview`}
      onMouseEnter={() => setCursorValue("prev")}
      onMouseLeave={() => setCursorValue("")}
    >
      <img src={PrevIcon} alt="Prev" width="32px" />
    </S.PrevButton>
    <S.NextButton
      to={`/${attrId}/learning/1`}
      onMouseEnter={() => setCursorValue("next")}
      onMouseLeave={() => setCursorValue("")}
    >
      <img src={NextIcon} alt="Next" width="32px" />
    </S.NextButton>
  </S.Container>
);

export default SyntaxPresenter;
