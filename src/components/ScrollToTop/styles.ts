import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  bottom: 10px;
  right: 15px;

  div {
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #fff;
    border: 3px solid #36436b;
    font-weight: bold;
    font-size: 42px;
    color: #36436b;
  }

  img {
    height: 60px;
  }
`;

export { Container };
