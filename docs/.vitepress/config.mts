import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mask Wallpaper",
  description:
    "Welcome to use Mask Wallpaper App, which allows you to create a variety of wallpaper masks and change wallpapers quickly",
  head: [
    ['link', { rel: 'icon', href: '/ic_launcher_round.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      { text: "Changelog", link: "/changelog" }, // 新增导航链接
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "其他",
        items: [
          { text: "Changelog", link: "/changelog" }, // 新增侧边栏链接
        ],
      },
    ],

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
  },
});
