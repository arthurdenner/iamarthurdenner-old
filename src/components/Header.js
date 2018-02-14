import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import en_png from '../assets/en.png';
import pt_png from '../assets/pt.png';

const pngs = {
  pt: pt_png,
  en: en_png,
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: thin solid #ffe589;
  padding: 0 1.5rem;
  height: 50px;
`;

const Home = styled.div`
  transition: all 0.2s;
  font-weight: bold;
  user-select: none;
`;

const Flags = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`;

const FlagContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.selected ? '#ffe589' : 'transparent')};
  width: 60px;
  padding: 0.75rem;
  height: 50px;
`;

const Flag = styled.img`
  transition: all 0.2s;
  margin: 0;

  ${FlagContainer}:hover & {
    transform: scale(1.2);
  }
`;

const Header = props => (
  <HeaderContainer>
    <Home>arthurdenner</Home>
    <Flags>
      {props.langs.map(lang => (
        <Link to={lang.link} key={lang.langKey}>
          <FlagContainer selected={lang.selected}>
            <Flag src={pngs[lang.langKey]} />
          </FlagContainer>
        </Link>
      ))}
    </Flags>
  </HeaderContainer>
);

export default Header;
