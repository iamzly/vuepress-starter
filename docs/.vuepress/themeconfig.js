module.exports = {
  logo: '/assets/img/logo.svg',
  // 启用页面滚动效果
  smoothScroll: true,
  // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
  nextLinks: true,
  // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
  prevLinks: true,
  // 显示最后更新时间
  lastUpdated: false,
  locales: {
    '/': {
      label: '简体中文',
      selectText: '选择语言',
      ariaLabel: '选择语言',
      editLinkText: '在 GitHub 上编辑此页',
      lastUpdated: '上次更新',
      nav: require('./config/nav.js'),
      sidebar: require('./config/sidebar')
    },
    '/en/': {
      label: 'English',
      selectText: 'Languages',
      ariaLabel: 'Select language',
      editLinkText: 'Edit this page on GitHub',
      lastUpdated: 'Last Updated',
      nav: require('./config/en/nav.js'),
      sidebar: require('./config/en/sidebar')
    }
  },
  // nav: require('./nav.js'),
  // sidebar: require('./sidebar')
}