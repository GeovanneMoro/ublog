import styled, { keyframes } from 'styled-components';

const appearsFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  } to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Content = styled.div`
  animation: ${appearsFromLeft} 1s;
`;

export { Content };
