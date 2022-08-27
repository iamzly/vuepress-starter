module.exports = [
    // { text: 'Home', link: '/en/' },
    { text: 'Guide', link: '/en/guide/', activeMatch: '/en/guide/' },
    // { text: '其它', link: '/other/', activeMatch: '/other/' },
    {
        text: 'Resources',
        items: [
            {
                text: 'API',
                items: [
                    { text: 'Guide', link: '/en/guide/', activeMatch: '/en/guide/' },
                ]
            },
            {
                text: 'Links',
                items: [
                    { text: 'baidu', link: 'https://www.baidu.com/' }
                ]
            }
        ]
    }
]