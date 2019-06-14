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
                    '/02/story.md'
                ]
            }
        ]
    }
}
