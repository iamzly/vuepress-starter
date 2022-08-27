module.exports = [
    // { text: '主页', link: '/' },
    { text: '指南', link: '/guide/', activeMatch: '/guide/' },
    // { text: '其它', link: '/other/', activeMatch: '/other/' },
    {
        text: '相关链接',
        items: [
            {
                text: 'API',
                items: [
                    { text: '指南', link: '/guide/' },
                ]
            },
            {
                text: '友情链接',
                items: [
                    { text: '百度', link: 'https://www.baidu.com/' }
                ]
            }
        ]
    }
]