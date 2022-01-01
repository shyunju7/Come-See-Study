import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import styled from "styled-components";
import image from "../../src/assets/test.png";
import Book from "./Book";
import Editor from "./Editor";

const BookContainer = styled.div`
  background-color: pink;
  border-radius: 2px;
  box-shadow: 2px 2px 12px #979797;
  overflow: hidden;
  animation: fadein 3s;
  transition-timing-function: ease-in;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const PageWrapper = styled.div`
  background-color: #fcf9f5;
  border-radius: 2px;
  box-shadow: 2px 2px 12px #979797;
`;

const LibraryBook = () => {
  const bookRef = useRef();

  const onClickNextButton = () => {
    bookRef.current.pageFlip().flipNext();
  };

  const onClickPrevButton = () => {
    bookRef.current.pageFlip().flipPrev();
  };

  return (
    <HTMLFlipBook
      width={700}
      height={700}
      showCover={true}
      drawShadow={true}
      ref={bookRef}
      useMouseEvents={false}
    >
      <BookContainer>
        <button onClick={onClickNextButton}>next</button>
        <img src={image} width="700px" alt="bookCover" />
      </BookContainer>
      <PageWrapper />
      <PageWrapper>
        <Editor />
        <button onClick={onClickPrevButton}>prev</button>
        <button onClick={onClickNextButton}>next</button>
      </PageWrapper>
      <PageWrapper />
      <PageWrapper />
      <PageWrapper />
      <PageWrapper />
    </HTMLFlipBook>
  );
};

export default LibraryBook;
