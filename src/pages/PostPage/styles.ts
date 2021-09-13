import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

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

  .infos {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    background-color: #36436b;
    padding: 15px 30px;
    border: 0;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    border-radius: 5px;
    margin-top: 40px;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 20%);
    transition: all 0.3s;

    &:hover {
      background-color: ${shade(0.25, '#36436b')};
      box-shadow: 0 3px 6px 0 rgb(0 0 0 / 50%);
    }
  }

  @media (max-width: 800px) {
    text-align: center;
  }
`;

export { Content };
