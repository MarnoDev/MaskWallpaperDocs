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
        text: "Guide",
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Change Wallpaper", link: "/change-wallpaper" },
          { text: "Wallpaper Mask", link: "/wallpaper-mask" },
          { text: "Wallpaper Generator", link: "/wallpaper-generator" },
        ],
      },
      { text: "Changelog", link: "/changelog" }, 
      { text: "About", link: "/about" }, 
    ],
    sidebar: [
    
      {
        text: "Guide",
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Change Wallpaper", link: "/change-wallpaper" },
          { text: "Wallpaper Mask", link: "/wallpaper-mask" },
          { text: "Wallpaper Generator", link: "/wallpaper-generator" },
        ],
      },

      {
        text: "Others",
        items: [
          { text: "About", link: "/about" },
          { text: "Changelog", link: "/changelog" }, 
          { text: "User Agreement", link: "/agreement" }, 
          { text: "Privacy Policy", link: "/privacy" }, 
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/MarnoDev" },
      { icon: "x", link: "https://x.com/marnodev" },
      { icon: "gmail", link: "mailto:marnodev@gmail.com?subject=Mark Wallpaper User Feedback" },
      { icon: "wechat", link: "https://mp.weixin.qq.com/mp/homepage?__biz=MzA3NjgyNzk2Mw==&hid=8&sn=520745c8e192981facfcb35bddcf9b96&scene=18#wechat_redirect" },
      { icon: "juejin", link: "https://juejin.cn/user/4001878052973400" },
    ],
  },
});
