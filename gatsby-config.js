const languages = {
  langs: ['en', 'pt'],
  defaultLangKey: 'en',
};

module.exports = {
  siteMetadata: {
    languages,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
      },
    },
  ],
};
