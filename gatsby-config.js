require('dotenv').config({
  path: `.env`,
});

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: '@kentico/gatsby-source-kontent',
      options: {
        projectId: process.env.GATSBY_kontentProjectId,
        authorizationKey: process.env.GATSBY_kontentPreviewApiKey,
        usePreviewUrl: process.env.GATSBY_kontentIsPreviewMode === 'true',
        languageCodenames: [`pl-PL`],
        includeTypes: true,
      }
    }
  ],
}
