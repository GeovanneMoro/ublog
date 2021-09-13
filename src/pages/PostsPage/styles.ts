import styled from 'styled-components';

const Lista = styled.ul`
  margin: 20px 0;
  list-style: none;

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 800px) {
    margin: 0;
  }
`;

export { Lista };
