import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Quartz 4",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,

      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },

      colors: {
        lightMode: {
          // Gruvbox light
          light: "#fbf1c7",
          lightgray: "#ebdbb2",
          gray: "#a89984",
          darkgray: "#504945",
          dark: "#282828",

          // Gruvbox neutral blue
          secondary: "#458588",

          // Gruvbox aqua
          tertiary: "#689d6a",

          // subtle Gruvbox background
          highlight: "rgba(215, 153, 33, 0.15)",

          // yellow highlight
          textHighlight: "#fabd2f88",
        },

        darkMode: {
          // Gruvbox dark
          light: "#282828",
          lightgray: "#3c3836",
          gray: "#928374",
          darkgray: "#d5c4a1",
          dark: "#fbf1c7",

          // Gruvbox orange/red accent
          secondary: "#d65d0e",

          // Gruvbox aqua
          tertiary: "#8ec07c",

          // subtle yellow highlight
          highlight: "rgba(215, 153, 33, 0.12)",

          // yellow highlight
          textHighlight: "#fabd2f88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "one-light",
          dark: "one-dark-pro",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
