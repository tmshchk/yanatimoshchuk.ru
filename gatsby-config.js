module.exports = {
  siteMetadata: {
    title: `Яна Тимощук, психолог, сказкотерапевт в Краснодаре и по всему миру`,
    description: 'Яна Тимощук, психолог, сказкотерапевт в Краснодаре',
    siteUrl: `https://yanatimoshchuk.ru`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 650,
              linkImagesToOriginal: false,
              quality: 80,
            },
          },
        ],
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-remark-images`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-yandex-metrica`,
      options: {
        trackingId: '89321326',
        clickmap: false,
        trackLinks: true,
        accurateTrackBounce: true,
        trackHash: true,
        webvisor: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Яна Тимощук, психолог, сказкотерапевт в Краснодаре и по всему миру',
        short_name: 'Яна Тимощук',
        start_url: '/',
        background_color: '#FBFBFB',
        theme_color: '#a580d4',
        display: 'standalone',
        icon: './src/images/favicon/favicon-96x96.png', // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
