import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  color: red;
  &:hover {
      color: yellow;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  ${Title}:hover {
    font-size: 98px;
  }
`;

function App() {
  return (
  <Wrapper>
    <Title>Hello</Title>
  </Wrapper>
  )
}

export default App;
