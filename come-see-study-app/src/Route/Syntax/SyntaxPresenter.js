import React from "react";
import * as S from "./style";
import SyntaxImg from "../../assets/syntax-img.png";
import { IoIosClose } from "react-icons/io";
const SyntaxPresenter = ({
  textRef,
  setCursorValue,
  cursorValue,
  handleLocateLearningPage,
}) => (
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

    <S.Button
      onClick={handleLocateLearningPage}
      onMouseEnter={() => setCursorValue("close")}
      onMouseLeave={() => setCursorValue("")}
    >
      <IoIosClose size="60px" color="#333333" />
    </S.Button>
    <S.CursorDescription ref={textRef}>{cursorValue}</S.CursorDescription>
  </S.Container>
);

export default SyntaxPresenter;
