import styled from 'styled-components';
import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';

import db from './db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

// variável para plano de fundo
// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

// variável que ajusta os espaçamentos das caixinhas do quiz
export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title> Alura Quiz - Amanda</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>A (R)evolução dos meios de armazenamentos de dados </h1>
          </Widget.Header>

          <Widget.Content>
            <p>
              {db.description}
              {' '}
            </p>
            {/* input e botão: */}
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              // console.log('Fazendo uma submissão por meio do react');
            }}
            >
              <input
                onChange={function (infosDoEvento) {
                  // console.log(infosDoEvento.target.value);
                  // state
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Me conta aqui com é seu nome"
              />
              <button type="submit" disabled={name.length === 0}>
                <b>
                  Clique aqui para jogar
                  {name}
                </b>
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da galera </h1>
            <p>Textinho aqui ... </p>
          </Widget.Content>
        </Widget>
        {/*  */}
        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com" />

    </QuizBackground>
  );
}
