import React from 'react';
import styled from 'styled-components';

const profiles = [
  { text: 'GitHub', link: 'https://github.com/arthurdenner/' },
  { text: 'Expo', link: 'https://expo.io/@arthurdenner/' },
  { text: 'Twitter', link: 'http://twitter.com/_arthurdenner/' },
];

const Profiles = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
`;

const Profile = styled.div`
  margin-right: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #efba00;
  }
`;

const Links = () => (
  <Profiles>
    {profiles.map(profile => (
      <Profile key={profile.text}>
        <a href={profile.link} target="_blank">
          {profile.text}
        </a>
      </Profile>
    ))}
  </Profiles>
);

export default Links;
