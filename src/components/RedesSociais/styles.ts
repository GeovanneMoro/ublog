import styled from 'styled-components';

const Container = styled.aside`
  display: flex;
  align-items: center;

  strong {
    color: #fff;
    line-height: 60px;
  }

  a {
    color: inherit;
  }

  ul {
    display: inline-block;
  }

  li {
    display: inline-block;
    font-size: 16px;
    margin-left: 14px;
    border-bottom: 2px solid transparent;

    a {
      svg {
        path {
          transition: all 0.2s;
        }
      }

      &:hover {
        svg {
          path {
            fill: #36436b;
          }
        }
      }
    }
  }
`;

export { Container };
