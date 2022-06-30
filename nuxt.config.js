export default {
  // Target: https://go.nuxtjs.dev/config-target
  mode: 'universal',
  target: 'static',
  ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    script: [
      {src: "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"},
      {
        src: 'https://sdk.form.run/js/v2/formrun.js'
      }
    ],
      
    titleTemplate: 'GOOD FOOD DESIGN【公式】｜ %s',
    htmlAttrs: {
      lang: 'ja',
    },

    meta: [
      { charset: 'utf-8' },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  gtm: {
    id: 'GTM-P4Z63DP'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/tailwind.css', 'animate.css/animate.min.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/lottie', mode: 'client' }],
  watchOptions: { poll: true },

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: {
    dirs: [
      '~/components',
      '~/components/brands',
      '~/components/common',
      '~/components/news',
      '~/components/service'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    // "@nuxtjs/apollo",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
    '@nuxtjs/gtm',
  ],
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js',
      // default: {
      //   httpEndpoint: 'https://faminc.jp/public/wp-api/graphql',
      // }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          "postcss-import": {},
          "tailwindcss/nesting": "postcss-nesting",
          tailwindcss: {},
          "postcss-preset-env": {
            features: { "nesting-rules": false },
          },
        },
      },
    },
  },
  generate: {
    routes: () => {
      const fetch = require("node-fetch")
      const { gql } = require("apollo-boost")
      const ApolloBoost = require("apollo-boost")
      const ApolloClient = ApolloBoost.default
      const client = new ApolloClient({
        fetch: fetch,
        uri: 'https://admin.gfd.jp/graphql',
      })
      const allNews = gql`
        query GfdNewsList {
          gfdNewss(
            where: {
              status: PUBLISH
              orderby: { field: DATE, order: DESC }
            }
          ) {
            nodes {
              title
              date
              id
              content
              gfd_news_custom_filed {
                mainImage {
                  mediaItemUrl
                }
              }
              categories {
                nodes {
                  name
                }
              }
            }
            pageInfo {
              offsetPagination {
                hasMore
                hasPrevious
                total
              }
            }
          }
        }
      `
      return client
        .query({
          query: allNews,
        })
        .then((entries) => {
          return entries.data.gfdNewss.nodes.map((entry) => {
            return {
              route: `news/${entry.id}`,
              id: entry.id,
              payload: entry,
            }
          })
        })
    },
  },
}
