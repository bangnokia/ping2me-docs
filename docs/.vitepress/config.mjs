import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ping2me docs",
  description: "Ping2me docs",
  base: '/docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: 'https://ping2.me' },
    ],

    sidebar: [
      {
        text: "Introduction",
        link: "/index"
      },
      {
        text: "Bots",
        items: prefix('bots', [
          'create-a-bot.md'
        ])
      },
      {
        text: "Channels",
        items: prefix("channels", [
          'create-a-channel.md',
          'connect-bot-to-channel.md',
        ])
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bangnokia/ping2me-docs' },
    ]
  }
})


function prefix(prefix, children) {
  return children.map(child => ({
    text: makeTitle(child.substr(0, child.length - 3)),
    link: `/${prefix}/${child}`,
  }));
}

// 'create-a-channel.md' -> 'Create a channel'
function makeTitle(slug) {
  // only uppercase first letter
  return slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')
}