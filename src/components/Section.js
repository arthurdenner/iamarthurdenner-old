import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  margin-bottom: 1rem;

  & br {
    margin-bottom: 1rem;
  }
`;

const Wrapper = styled.div`
  margin: 1rem 0;
  border-bottom: 1px solid #ffe589;

  &:last-child {
    border-bottom: none;
  }
`;

const Section = ({ title, children }) => (
  <Wrapper>
    {title && <h2>* {title}</h2>}
    <Content>{children}</Content>
  </Wrapper>
);

export default Section;
