import React, { useRef } from "react";
import styled from "styled-components";
import image from "../../src/assets/test.png";

const BookCover = styled.div`
  width: 500px;
  height: 500px;
  background-size: cover;
  border-radius: 16px;
  border: 2px solid #dddddd;
  box-shadow: 2px 4px 6px #c4c4c4;
  animation: fadein 3s;
  overflow: hidden;
  cursor: pointer;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
const Book = () => {
  const bookRef = useRef();
  const openBook = () => {
    bookRef.current.style =
      "animation: fadeout 2s; -webkit-animation: fadeout 2s";

    window.location.href = "/main";
  };

  return (
    <BookCover onClick={openBook} ref={bookRef}>
      <img src={image} width="500px" alt="bookCover" />
    </BookCover>
  );
};

export default Book;
