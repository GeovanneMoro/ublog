import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { useFetch } from '../../hooks/useFetch';

import { MasterLayout } from '../../components/MasterLayout';
import { Loading } from '../../components/Loading';
import { PostItem } from '../../components/PostItem';

import { Lista } from './styles';
import { Title } from '../../components/Title';
import { formatData } from '../../utils/formatData';

const PostsPage: React.FC = (): JSX.Element => {
  const { apiData: authors } = useFetch(
    'https://run.mocky.io/v3/afdbfae9-0bac-41e2-86ac-3e9cfeae5c2c',
  );

  const { apiData, isLoading, error } = useFetch(
    'https://run.mocky.io/v3/6f2d303f-50ce-415d-b58e-1a8253b9a4bf',
  );

  const publications = apiData.map((publication) => {
    const match = authors.find(
      (author) => author.id == publication.metadata.authorId,
    );

    return {
      title: publication.title,
      body: publication.body,
      metadata: {
        publishedAt: formatData(publication.metadata.publishedAt),
        authorId: match?.name,
      },
    };
  });

  return (
    <MasterLayout>
      <Helmet>
        <title>UBLOG | Nossos Posts</title>
      </Helmet>
      <Title>Posts</Title>

      {isLoading && <Loading />}
      {!isLoading && error ? (
        <span>Error in fetching data ...</span>
      ) : (
        <Lista>
          {publications.map(({ title, body, metadata }) => {
            const preKebab = title.split(' ');

            const kebabCase = preKebab.join('-').toLowerCase();

            return (
              <Link key={title} to={`/posts/${kebabCase}`}>
                <PostItem
                  title={title}
                  body={body}
                  publishedAt={metadata.publishedAt}
                  authorId={metadata.authorId}
                />
              </Link>
            );
          })}
        </Lista>
      )}
    </MasterLayout>
  );
};

export { PostsPage };
