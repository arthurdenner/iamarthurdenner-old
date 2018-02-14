import React from 'react';
import Link from 'gatsby-link';
import Links from '../components/Links';
import Section from '../components/Section';

const IndexPage = () => (
  <div>
    <Section title="Sobre mim">
      Tenho 22 anos e moro no Brasil. Amo Inglês, desenvolvimento web, séries de
      TV (não curto muito filmes) e projetos e tecnologias open-source.
    </Section>

    <Section title="Com o que trabalho">
      Sinto-me à vontade com tecnologias front-end como React, React Native e
      Redux, mas estou estudando Node também (sou fascinado™ por JavaScript e
      estou focado em ficar muito bom na linguagem no momento).
    </Section>

    <Section title="Projetos">
      Se quiser ver projetos que criei ou contribuí, algo que postei ou saber um
      pouco mais sobre mim, pode me encontrar aqui:<br />
      <Links />
    </Section>

    <Section title="Experiência">
      <Section>
        - Eletrotécnico na empresa EFR Engenharia LTDA. (Abril de 2012 - Julho
        de 2017)<br />
        Eu era responsável por criar projetos para subestações elétricas usando
        AutoCAD.
      </Section>
      <Section>
        - Estágio no Instituto Federal de Alagoas (Maio de 2016 - Julho de 2017)<br />
        Foi minha primeira experiência com desenvolvimento. Foi apresentado ao
        React e me apaixonei rapidinho. O objetivo do projeto era construir uma
        plataforma pra eventos educacionais, mas, infelizmente, não correu muito
        bem e o projeto foi cancelado.
      </Section>
      <Section>
        - Desenvolvedor júnior na empresa Audora Tecnologia (Julho de 2017 -
        presente momento)<br />
        Sou responsável por construir pequenos aplicativos web que são
        integrados em nossa plataforma principal, que é usada em vários órgãos
        públicos e escritórios de advocacia.
      </Section>
    </Section>

    <Section title="Contato">
      Obrigado por visitar meu site! Se quiser falar comigo, fique à vontade
      para me mandar um e-mail: arthurdenner7@gmail.com
    </Section>
  </div>
);

export default IndexPage;
