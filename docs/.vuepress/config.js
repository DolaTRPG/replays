module.exports = {
    title: 'DolaTRPG Replays',
    description: 'DolaTRPG Replays',
    base: '/replays/',
    repo: 'https://github.com/dolatrpg/replays',
    themeConfig: {
        sidebarDepth: 2,
        sidebar:[
            ['/', 'DolaTRPG'],
            {
                title: '故事1: 復活戀人的少女',
                collapsable: true,
                children: [
                    '/01/introduction.md',
                    ['/01/pc-kelsey.md', '玩家角色：凱爾希．萊特'],
                    '/01/npc.md',
                    '/01/story.md',
                    '/01/note.md'
                ]
            },
            {
                title: '故事2: 山中小屋',
                collapsable: true,
                children: [
                    '/02/introduction.md',
                    ['/02/pc-toi.md', '玩家角色：東井智早'],
                    ['/02/pc-touyama.md', '玩家角色：東山愛実'],
                    ['/02/pc-midou.md', '玩家角色：御堂赤彥'],
                    '/02/story.md'
                ]
            },
            {
                title: '故事3: 新手們的冒險',
                collapsable: true,
                children: [
                    '/03/introduction.md',
                    ['/03/pc-alex.md', '玩家角色：艾力克斯'],
                    ['/03/pc-nanachi.md', '玩家角色：娜娜奇'],
                    ['/03/pc-haku.md', '玩家角色：哈克．扣卡'],
                    '/03/prepare.md',
                    '/03/story.md'
                ]
            }
        ]
    }
}
