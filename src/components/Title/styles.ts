import styled from 'styled-components';

const Titulo = styled.h1`
  color: #36436b;
  text-align: center;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 36px;
  font-weight: bold;
  padding-bottom: 8px;
  margin: 20px 0;
  border-bottom: 2px solid #36436b;

  @media (max-width: 800px) {
    font-size: 28px;
    margin-top: 10px;
  }
`;

export { Titulo };
