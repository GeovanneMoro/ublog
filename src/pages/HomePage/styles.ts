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

const Container = styled.div`
  animation: ${appearsFromLeft} 1s;
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    border-radius: 50%;
    height: 300px;
  }

  h1 {
    font-size: 5rem;
    line-height: 5rem;
    font-weight: 900;
    margin-top: 2.5rem;
    color: #becaee;
  }

  p {
    font-size: 2.5rem;
    line-height: 2.5rem;
    font-weight: 900;
    margin: 2.5rem 0;
    color: #becaee;

    span {
      color: #36436b;
    }
  }

  button {
    background-color: #36436b;
    padding: 15px 40px;
    border: 0;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    border-radius: 2rem;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 20%);
    transition: all 0.3s;

    &:hover {
      background-color: ${shade(0.25, '#36436b')};
      box-shadow: 0 3px 6px 0 rgb(0 0 0 / 50%);
    }
  }
`;

export { Container };
