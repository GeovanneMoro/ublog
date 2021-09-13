import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #7a93dc;
  width: 100%;
  padding: 10px 0 20px;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 1140px;
  flex: 1;

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 14px;
    font-weight: bold;

    address {
      font-style: inherit;
    }
  }

  @media (max-width: 800px) {
    .flex {
      display: block;
      text-align: center;

      img {
        margin-bottom: 15px;
      }

      address {
        margin-bottom: 10px;
      }
    }
  }
`;

export { FooterContainer, Content };
