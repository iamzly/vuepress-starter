module.exports = {
    title: '测试',
    description: '测试',
    dest: './dist',
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    head: [
        ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],

    themeConfig: require('./themeconfig.js'),


    locales: {
        '/': {
            lang: 'zh-CN',
            title: '测试',
            description: 'Vue 驱动的静态网站生成器'
        },
        '/en/': {
            lang: 'en-US',
            title: 'Test',
            description: 'Vue-powered Static Site Generator'
        }
    },


    plugins: [
        ['@vuepress-reco/vuepress-plugin-bgm-player',
            {
                audios: [
                    // 网络文件示例
                    // {
                    //     name: 'LOSER',
                    //     artist: '米津玄師',
                    //     url: 'https://www.ytmp3.cn/down/73654.mp3',
                    //     cover: 'https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200'
                    // },
                    // 本地文件示例
                    {
                        name: '海市蜃楼',
                        artist: '一颗狼星',
                        url: '/bgm/M500002ukSGD0a4CJD.mp3',
                        cover: '/bgm/T002R300x300M000000HIUFe3RWI9w_3.webp'
                    },
                ],
                // 是否默认缩小
                autoShrink: true,
                // 缩小时缩为哪种模式
                shrinkMode: 'float',
                // 播放器位置
                position: {
                    left: '10px',
                    bottom: '10px',
                    'z-index': '999999'
                },
                // 指定浮窗模式浮动在哪一侧
                floatPosition: 'left',
                // 悬浮窗样式
                floatStyle: {
                    left: '10px',
                    bottom: '10px',
                    'z-index': '999999'
                }
            },
        ],

        ['@vuepress/back-to-top',
            {
                right: '1rem',
                bottom: '6rem',
                width: '2.5rem',
                height: '2.5rem',
                'border-radius': '.25rem',
                'line-height': '2.5rem',
                backgroundColor: 'rgba(231, 234, 241,.5)'
            }

        ],

        ['cursor-effects', {
            size: 2, // size of the particle, default: 2
            shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
            zIndex: 999999999, // z-index property of the canvas, default: 999999999
        }],

        ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        }],

        ['@vuepress/nprogress'],

        ['@vuepress/medium-zoom'],

    ]
}

