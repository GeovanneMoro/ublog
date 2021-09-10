import styled, { keyframes } from 'styled-components';

const isRotating = keyframes`
 to {
    transform: rotate(1turn);
  }`;

const Container = styled.div`
  animation: ${isRotating} 1s infinite;
  margin: 0 auto;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #becaee;
  height: 50px;
  width: 50px;
`;

export { Container };
