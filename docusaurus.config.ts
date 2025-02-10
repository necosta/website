import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

function isConsentGiven(): boolean {
  if (typeof document !== "undefined") {
    return document.cookie.includes("myCookieConsent=true");
  }
  return false;
}

const config: Config = {
  title: 'Nelson Costa',
  tagline: 'Turning coffee into code, one cup at a time',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://necosta.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/website/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'necosta', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/necosta/website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/necosta/website/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-google-gtag",
      isConsentGiven() ? {
        trackingID: "G-9DQ6CP49LR",
        anonymizeIP: false,
      } : {
        trackingID: "G-XXXXXXXXXX",
        anonymizeIP: true,
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    blog: {
      sidebar: {
        groupByYear: false,
      },
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Site Logo',
        src: 'img/nc_logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Knowledge',
        },
        {to: '/blog', label: 'Posts', position: 'left'},
        {
          href: 'https://github.com/necosta/website',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Knowledge',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/nelsoncosta85/',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/@nelsoncosta85',
            },
            {
              label: 'X',
              href: 'https://x.com/NelsonCosta85',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Posts',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/necosta/website',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nelson Costa Website, Email: nelson.costa85@gmail.com`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
        defaultMode: 'dark', // Set the default mode to dark
        disableSwitch: false, // Optional: Allow users to toggle between modes
        respectPrefersColorScheme: false, // Optional: Ignore the user's system preference
      },
  } satisfies Preset.ThemeConfig,
};

export default config;
