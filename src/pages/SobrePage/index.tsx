import React from 'react';
import { Helmet } from 'react-helmet';

import { MasterLayout } from '../../components/MasterLayout';
import { Title } from '../../components/Title';

import ImageTech from '../../assets/image-tech.svg';
import { Content } from './styles';

const SobrePage: React.FC = (): JSX.Element => {
  return (
    <MasterLayout>
      <Helmet>
        <title>UBLOG | Sobre nós</title>
      </Helmet>
      <Content>
        <Title>Sobre a UBLOG</Title>
        <div>
          <figure className="image-tech">
            <img src={ImageTech} alt="Imagem tech" loading="lazy" />
          </figure>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            veritatis atque earum ratione quis, nostrum ipsam animi perspiciatis
            aliquid provident a exercitationem, dolore distinctio dolores
            laudantium incidunt vero optio illo.
          </p>
          <p>
            Ut sapiente deserunt nihil rem in totam neque. Facere ipsa id
            quibusdam error. Iure accusantium, debitis minima harum porro
            distinctio eveniet quos quaerat voluptatum, quam voluptas totam rem
            temporibus nesciunt.
          </p>
          <p>
            Nulla, est voluptatem in adipisci ratione vitae temporibus expedita
            illum ab voluptas similique sunt recusandae. Blanditiis voluptate
            commodi tenetur beatae dignissimos culpa eveniet repellat quae
            explicabo maxime, quas, exercitationem quasi.
          </p>
          <p>
            Doloribus aperiam quidem perspiciatis quis deserunt, libero
            dignissimos vero enim assumenda, cupiditate corrupti vel commodi
            modi totam. Quas dicta fuga laborum asperiores. Neque incidunt
            similique dicta, esse et saepe odio.
          </p>
          <p>
            Facere, possimus doloribus. Unde possimus laboriosam, sed aspernatur
            odio cum, ut dicta, maxime neque officia eligendi facere. Tempore
            maiores magnam nulla iusto sapiente impedit veritatis. Consequuntur
            dolores quos quae ad.
          </p>
          <p>
            Atque eligendi minima neque, beatae suscipit, incidunt libero sint
            sequi aperiam nostrum sed soluta eos saepe modi sapiente ex
            excepturi blanditiis doloremque ratione. Tenetur, id ut? Eos quam
            natus fuga?
          </p>
          <p>
            Quos commodi delectus placeat cupiditate mollitia nihil ea, quas
            possimus similique inventore necessitatibus veritatis totam odit,
            laboriosam provident sapiente quidem consequuntur nobis quis,
            suscipit eligendi nulla! Porro itaque ipsam rem?
          </p>
          <p>
            Itaque deleniti ea veniam? Temporibus quidem dolores vero velit
            dignissimos necessitatibus delectus officia maxime nihil. Corporis
            error nam cumque saepe voluptatum ab, quibusdam iste expedita eum, a
            aliquam voluptatem facere.
          </p>
        </div>
      </Content>
    </MasterLayout>
  );
};

export { SobrePage };
