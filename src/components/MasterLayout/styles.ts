import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    height: 100%;
  }
`;

const Content = styled.main`
  padding: 0 15px;
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 1140px;
  width: 100%;

  p {
    margin: 15px 0;
    color: #36436b;
    letter-spacing: 0.12em;
    font-size: 16px;
    font-weight: bold;
  }

  @media (max-width: 800px) {
    padding: 15px;
  }
`;

export { Container, Content };
