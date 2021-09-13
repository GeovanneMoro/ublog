import React from 'react';

import { Post } from './styles';

interface IPostItemProps {
  title: string;
  body: string;
  publishedAt: string;
  authorId: number;
}

const PostItem: React.FC<IPostItemProps> = ({
  title,
  body,
  publishedAt,
  authorId,
}: IPostItemProps): JSX.Element => {
  return (
    <Post>
      <h3>{title}</h3>
      <div className="infos">
        <p>{publishedAt}</p>
        <p>{authorId}</p>
      </div>
      <p>{body}</p>
      <span>Leia Mais</span>
    </Post>
  );
};

export { PostItem };
