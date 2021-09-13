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

  .image-tech {
    margin: 0 30px 0 0;
    float: left;

    img {
      vertical-align: middle;
      border-style: none;
    }
  }

  @media (max-width: 800px) {
    .image-tech {
      margin: 0;
      float: none;

      img {
        width: 100%;
      }
    }
  }
`;

export { Content };
