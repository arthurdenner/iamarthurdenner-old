import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { injectGlobal } from 'styled-components';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import Header from '../components/Header';
import 'intl';
import './index.css';

const TemplateWrapper = ({ children, data, location, i18nMessages }) => {
  const url = location.pathname;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

  return (
    <IntlProvider locale={langKey} messages={i18nMessages}>
      <div>
        <Helmet title="Arthur Denner" />
        <Header langs={langsMenu} />
        <div className="content">{children()}</div>
      </div>
    </IntlProvider>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

export const pageQuery = graphql`
  query Layout {
    site {
      siteMetadata {
        languages {
          langs
          defaultLangKey
        }
      }
    }
  }
`;
