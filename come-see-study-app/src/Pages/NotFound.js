import React from "react";
import styled from "styled-components";
import notFoundImg from "../assets/not-found.png";
import bubble from "../assets/not-found-bubble.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #fef6c9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 56px;
`;

const Bubble = styled.div`
  width: 180px;
  height: 128px;
  background-image: url(${bubble});
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const BubbleText = styled.p`
  width: 50%;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  line-height: 24px;
`;

const NotFound = () => (
  <Container>
    <Bubble img={bubble}>
      <BubbleText>OOPS</BubbleText>
    </Bubble>
    <img src={notFoundImg} alt="notFoundImg" width="120px" />
    <Text>NOT FOUND</Text>
  </Container>
);

export default NotFound;
