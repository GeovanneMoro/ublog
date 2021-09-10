import styled from 'styled-components';

const Post = styled.li`
  margin-bottom: 20px;
  border: 2px solid #becaee;
  padding: 15px 10px;
  background: #f8f8ff;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 20%);
  transition: background-color, box-shadow 0.3s;

  &:last-of-type {
    margin-bottom: none;
  }

  h3 {
    color: #36436b;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-size: 21px;
    font-weight: bold;
    padding-bottom: 11px;
    border-bottom: 0.5px solid #36436b;
  }

  .infos {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:hover {
    background-color: #becaee;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 60%);
    transform: scale(1.005);

    span {
      text-decoration: underline;
    }
  }
`;

export { Post };
