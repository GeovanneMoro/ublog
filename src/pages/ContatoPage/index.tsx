import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';

import { MasterLayout } from '../../components/MasterLayout';
import { Title } from '../../components/Title';

import { useFormValidator } from '../../hooks/useFormValidator';
import useValidations from '../../hooks/useValidations';
import { Container } from './styles';

const ContatoPage: React.FC = (): JSX.Element => {
  const { isEmail, isEmpty, isTelefoneOuCelular } = useValidations();
  const { errors, isFormValid, validate, resetValidator } = useFormValidator({
    nome: isEmpty('Nome é obrigatório!'),
    email: isEmail('E-mail inválido!'),
    telefone: isTelefoneOuCelular('Telefone inválido!', false),
    assunto: isEmpty('Assunto é obrigatório!'),
    mensagem: isEmpty('Mensagem é obrigatória!'),
  });

  const inputNome = useRef<HTMLInputElement>() as any;
  const inputEmail = useRef<HTMLInputElement>() as any;
  const inputTel = useRef<HTMLInputElement>() as any;
  const inputAssunto = useRef<HTMLInputElement>() as any;
  const inputMensagem = useRef<HTMLInputElement>() as any;

  const handleSubmit: any = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const nome = inputNome.current.value.trim();
    const email = inputEmail.current.value.trim();
    const telefone = inputTel.current.value.trim();
    const assunto = inputAssunto.current.value.trim();
    const mensagem = inputMensagem.current.value.trim();

    if (!nome || !email || !telefone || !assunto || !mensagem) {
      alert('Por favor, preencha os campos corretamente');
    } else {
      alert(`Olá ${nome}, seu formulário foi enviado com sucesso!`);
    }

    resetValidator();
  };
  return (
    <MasterLayout>
      <Helmet>
        <title>UBLOG | Fale Conosco</title>
      </Helmet>
      <Title>Fale Conosco</Title>
      <Container>
        <form onSubmit={handleSubmit}>
          <div className="campo">
            <input
              type="text"
              ref={inputNome}
              onBlur={validate}
              name="nome"
              placeholder="* Seu nome:"
            />
            {errors.nome && <span className="erro">{errors.nome}</span>}
          </div>
          <div className="campo">
            <input
              type="text"
              ref={inputEmail}
              onBlur={validate}
              name="email"
              placeholder="* Seu e-mail:"
            />
            {errors.email && <span className="erro">{errors.email}</span>}
          </div>
          <div className="campo">
            <input
              type="text"
              ref={inputTel}
              name="telefone"
              onBlur={validate}
              placeholder="Seu telefone:"
            />
            {errors.telefone && <span className="erro">{errors.telefone}</span>}
          </div>
          <div className="campo">
            <input
              type="text"
              ref={inputAssunto}
              onBlur={validate}
              name="assunto"
              placeholder="* Assunto da mensagem:"
            />
            {errors.assunto && <span className="erro">{errors.assunto}</span>}
          </div>
          <div className="campo">
            <textarea
              ref={inputMensagem}
              onBlur={validate}
              name="mensagem"
              placeholder="* Digite sua mensagem aqui..."
            ></textarea>
            {errors.mensagem && <span className="erro">{errors.mensagem}</span>}
          </div>
          <div className="campo">
            <button disabled={!isFormValid} className="btn lnk-destaque">
              Enviar
            </button>
          </div>
        </form>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13249.539602765966!2d-118.3962575!3d33.8797397!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4c9476671874ed97!2sUSEND!5e0!3m2!1spt-BR!2sbr!4v1631285724803!5m2!1spt-BR!2sbr"
          loading="lazy"
        ></iframe>
      </Container>
    </MasterLayout>
  );
};

export { ContatoPage };
