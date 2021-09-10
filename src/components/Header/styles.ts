import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #7a93dc;
  padding: 35px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    padding: 15px 0;
  }
`;

export { HeaderContainer };
