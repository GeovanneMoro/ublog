import styled from 'styled-components';

const Lista = styled.ul`
  margin: 20px 0;
  list-style: none;

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export { Lista };
