import React from "react";
import Book from "../../Components/Book";
import LibraryBook from "../../Components/BookWithLib";
import * as S from "../Intro/style";
const IntroPresenter = () => (
  <S.Container>
    {/* <Book /> */}
    <LibraryBook />
  </S.Container>
);

export default IntroPresenter;
