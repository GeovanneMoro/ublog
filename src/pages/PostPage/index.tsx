import React, { ButtonHTMLAttributes } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory, useParams } from 'react-router-dom';

import { Loading } from '../../components/Loading';
import { MasterLayout } from '../../components/MasterLayout';
import { Title } from '../../components/Title';
import { useFetch } from '../../hooks/useFetch';
import { formatData } from '../../utils/formatData';

import { Content } from './styles';

const PostPage = (): JSX.Element => {
  const { title: title2 }: any = useParams();
  console.log(title2);
  const history = useHistory();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    history.push('/posts');
  };

  const { apiData: authors } = useFetch(
    'https://run.mocky.io/v3/afdbfae9-0bac-41e2-86ac-3e9cfeae5c2c',
  );

  const { apiData: publications, isLoading } = useFetch(
    'https://run.mocky.io/v3/6f2d303f-50ce-415d-b58e-1a8253b9a4bf',
  );

  const [publication] = publications.filter((pub) => {
    if (pub.title.includes(title2)) {
      return true;
    } else {
      return false;
    }
  });

  const [author] = authors.filter(
    (auth) => auth.id === publication?.metadata.authorId,
  );

  return (
    <MasterLayout>
      <Helmet>
        <title>UBLOG | Nosso Post</title>
      </Helmet>
      <Content>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Title>{publication?.title}</Title>
            <div className="infos">
              <p>{formatData(publication?.metadata.publishedAt)}</p>
              <p>{author?.name}</p>
            </div>
            <p>{publication?.body}</p>
            <button onClick={handleClick}>Voltar</button>
          </>
        )}
      </Content>
    </MasterLayout>
  );
};

export { PostPage };
