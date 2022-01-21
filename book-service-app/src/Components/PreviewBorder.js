import react from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fef6c9;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

const PreviewBorder = () => {
  return (
    <Container>
      <Title>PreviewBorder</Title>
    </Container>
  );
};

export default PreviewBorder;
