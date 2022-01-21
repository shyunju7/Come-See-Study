import react from "react";
import styled from "styled-components";
import loadingImg from "../assets/loading.gif";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #fef6c9;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
`;

const Text = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.6);

  animation: resizing 0.9s infinite alternate;

  &:nth-child(2) {
    animation-delay: 0.1s;
  }

  &:nth-child(3) {
    animation-delay: 0.2s;
  }

  &:nth-child(4) {
    animation-delay: 0.3s;
  }

  &:nth-child(5) {
    animation-delay: 0.4s;
  }

  &:nth-child(6) {
    animation-delay: 0.5s;
  }
  &:nth-child(7) {
    animation-delay: 0.6s;
  }

  &:nth-child(8) {
    animation-delay: 0.7s;
  }
  &:nth-child(9) {
    animation-delay: 0.8s;
  }

  @keyframes resizing {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
  }
`;
const Loader = () => (
  <Container>
    <img src={loadingImg} alt="loadingImg" width="400px" />
    <TextWrapper>
      <Text>L</Text>
      <Text>O</Text>
      <Text>A</Text>
      <Text>D</Text>
      <Text>I</Text>
      <Text>N</Text>
      <Text>G</Text>
      <Text>.</Text>
      <Text>.</Text>
    </TextWrapper>
  </Container>
);

export default Loader;
