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
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr 1fr;

  iframe {
    border: 0;
    border-radius: 10px;
    width: 100%;
    height: 450px;
  }

  form {
    .campo {
      margin-bottom: 15px;
    }
    input,
    textarea {
      font-family: 'Roboto Slab', serif;
      font-size: 14px;
      color: #36436b;
      font-weight: bold;
      background-color: #ededed;
      padding: 13px 20px;
      border-radius: 5px;
      width: 100%;
      border: none;
    }

    input::placeholder,
    textarea::placeholder {
      font-size: 14px;
      font-family: 'Roboto Slab', serif;
      color: #ccc;
    }

    textarea {
      height: 190px;
    }

    .btn {
      background-color: #36436b;
      padding: 5px 30px;
      border: 0;
      font-weight: bold;
      color: white;
      text-transform: uppercase;
      border-radius: 5px;
      box-shadow: 0 3px 6px 0 rgb(0 0 0 / 20%);
      transition: all 0.3s;

      &:hover {
        background-color: ${shade(0.25, '#36436b')};
        box-shadow: 0 3px 6px 0 rgb(0 0 0 / 60%);
      }
    }

    .btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .erro {
      color: red;
      font-size: 12px;
      display: inline-block;
      margin: 5px 0 0 5px;
      font-family: 'Roboto Slab', serif;
      font-size: 12px;
      font-weight: bold;
    }
  }

  @media (max-width: 800px) {
    gap: 20px;
    display: flex;
    flex-direction: column;
  }
`;

export { Container };
