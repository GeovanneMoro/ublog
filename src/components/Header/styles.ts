import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #7a93dc;
  padding: 35px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .btn-mobile {
    display: none;

    img {
      height: 35px;
    }
  }

  @media (max-width: 800px) {
    padding: 15px 0;
    justify-content: space-around;

    .btn-mobile {
      display: block;
      cursor: pointer;
      padding: 5px 5px 0;
      border: 0;
      border-radius: 5px;
      box-shadow: 0 3px 6px 0 rgb(0 0 0 / 30%);
    }
  }
`;

export { HeaderContainer };
