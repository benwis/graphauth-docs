// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const graphqlMarkdownConfig = require("./graphql-markdown.config");

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Graphauth GraphQL API Documentation",
  tagline: "Better auth",
  url: "https://graphauth.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "graphauth", // Usually your GitHub org/user name.
  projectName: "graphauth", // Usually your repo name.
  plugins: [["@edno/docusaurus2-graphql-doc-generator", graphqlMarkdownConfig]],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js")
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Graphauth Documentation",
        logo: {
          alt: "graphql-markdown",
          src: "img/g_logo.png"
        },
        items: [
          {
            href: "https://github.com/edno/graphql-markdown",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Celcyon, LLC. Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;
