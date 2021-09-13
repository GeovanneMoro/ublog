import styled from 'styled-components';

const Container = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 17px 0;
  text-transform: uppercase;
  background-color: #becaee;

  .btn-mobile {
    display: none;
  }

  .menu-principal {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    li {
      border-right: 1px solid #7a93dc;
      padding-right: 20px;
      margin-right: 20px;
      font-weight: bold;

      a {
        color: #fff;
        text-decoration: none;

        &.active {
          color: #36436b;
        }
      }

      &:last-of-type {
        border-right: none;
      }
    }
  }

  @media (max-width: 800px) {
    display: block;
    padding: 0;

    .btn-mobile {
      display: block;
      width: 60px;
      height: 45px;
      margin: 0 auto;
      line-height: 35px;
      cursor: pointer;
      padding: 0;
    }

    .menu-principal {
      display: none;

      li {
        padding: 5px 0;
        margin: 5px 0;
        background-color: #7a93dc;
      }

      &.active {
        display: block;
        text-align: center;
        margin: 10px;
      }
    }
  }
`;

const Content = styled.div`
  max-width: 1140px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    display: block;
  }
`;

export { Container, Content };
