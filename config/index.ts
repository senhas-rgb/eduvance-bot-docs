export default {
  /**
   * Nextra metadata configuration
   * @see https://nextra.vercel.app/docs/metadata
   */
  metadata: {
    title: {
      default: 'Eduvance Docs',
      template: '%s | Eduvance Docs',
    },
    description: 'The official documentation for Eduvance Discord bot',
    metadataBase: new URL('https://eduvance-bot-docs-3brh9cx9m-senhasts-projects.vercel.app/'),
    keywords: [
      'Mantine',
      'Nextra',
      'Next.js',
      'React',
      'JavaScript',
      'MDX',
      'Markdown',
      'Static Site Generator',
      'Documentation',
      'Eduvance',
      'Discord Bot',
    ],
    generator: 'Next.js',
    applicationName: 'Eduvance Docs',
    appleWebApp: {
      title: 'Eduvance Docs',
    },
    openGraph: {
      // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
      url: './',
      siteName: 'Eduvance Docs',
      locale: 'en_US',
      type: 'website',
    },
    other: {
      'msapplication-TileColor': '#fff',
    },
    alternates: {
      // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
      canonical: './',
    },
  },
  /**
   * Nextra Layout component configuration
   */
  nextraLayout: {
    docsRepositoryBase: 'https://github.com/senhas-rgb/eduvance-bot-docs/tree/main/app/docs/',
    sidebar: {
      defaultMenuCollapseLevel: 1,
    },
  },
  /**
   * Main Layout head configuration
   */
  head: {
    mantine: {
      defaultColorScheme: 'dark',
      nonce: '8IBTHwOdqNKAWeKl7plt8g==',
    },
  },
  /**
   * GitHub API configuration
   * @see https://docs.github.com/en/rest/reference/repos#releases
   *
   * The GitHub API token is optional for rate limiting.
   * If you want to use it, create a personal access token with the `repo` scope.
   *
   * This information is used to fetch the releases from the GitHub API.
   */
  gitHub: {
    repo: 'senhas-rgb/eduvance-bot-docs',
    apiUrl: 'https://api.github.com',
    releasesUrl: 'https://api.github.com/repos/senhas-rgb/eduvance-bot-docs/releases',
  },

  /**
   * Release notes configuration
   * This is used to link the release notes in the app.
   */
  releaseNotes: {
    url: 'https://github.com/senhas-rgb/eduvance-bot-docs/releases',
    maxReleases: 10,
  },

  /**
   * Search configuration (for pagefind)
   * This is used to configure the search engine API.
   * @see /app/api/search/route.ts
   */
  search: {
    queryKeyword: 'q',
    minQueryLength: 3,
    limitKeyword: 'limit',
    defaultMaxResults: 5,
    excerptLengthKeyword: 'excerptLength',
    defaultExcerptLength: 30,
    defaultLanguage: 'en',
  },
} as const;
