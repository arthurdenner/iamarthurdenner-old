import React from 'react';
import Link from 'gatsby-link';
import Links from '../components/Links';
import Section from '../components/Section';

const IndexPage = () => (
  <div>
    <Section title="About me">
      I’m 22 years old and I live in Brazil. I love English, web development, TV
      shows (I'm not into movies too much) and open-source
      projects/technologies.
    </Section>

    <Section title="Things I work with">
      I'm comfortable with front-end technologies like React, React Native and
      Redux, but I’m studying Node too (I’m fascinated™ by JavaScript and I’m
      focused in getting real good at it at the moment).
    </Section>

    <Section title="Projects">
      If you want to see some projects I’ve created or contributed, something
      I’ve posted or know a little bit more about me, you can find me here:<br />
      <Links />
    </Section>

    <Section title="Experience">
      <Section>
        - Eletrotechnician at EFR Engenharia LTDA. (April 2012 - July 2017)<br />
        I was responsible for creating projects for subeletrical plants using
        AutoCAD.
      </Section>
      <Section>
        - Internship at Instituto Federal de Alagoas (May 2016 - July 2017)<br />
        This was my first experience with development. I was introduced to React
        and I felt in love pretty quick. The goal of the project was to build a
        platform for educational events, but, unfortunately, it didn’t went so
        well and the project was cancelled.
      </Section>
      <Section>
        - Junior developer at Audora Tecnologia (July 2017 - present)<br />
        I’m responsible for building small web apps that are integrated in our
        main platform, which is used in a lot of public organizations and law
        firms.
      </Section>
    </Section>

    <Section title="Contact">
      Thanks for visiting my website! If you want to talk to me, feel free to
      send me an email: arthurdenner7@gmail.com
    </Section>
  </div>
);

export default IndexPage;
