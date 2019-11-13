const badgeIcon = {
    '10': require('../assets/imgs/10-badge.png'),
    'crown': require('../assets/imgs/crown-badge.png'),
    'eco': require('../assets/imgs/eco-badge.png'),
    'leaf': require('../assets/imgs/leaf-badge.png'),
    'recycle': require('../assets/imgs/recycle-badge.png'),
    'star': require('../assets/imgs/star-badge.png')
}

var badges = [
    {
        name: "New Leaf",
        description: "You’ve unlocked a badge for completing 5 bonus missions.",
        imagePath: badgeIcon['leaf']
    },
    {
        name: "Recycler",
        description: "You’ve unlocked a badge for completing 20 recycle missions.",
        imagePath: badgeIcon['recycle']
    },
    {
        name: "Initiation",
        description: "Badge awarded upon completing first mission.",
        imagePath: badgeIcon['eco']
    },
    {
        name: "Honour Roll",
        description: "Badge awarded upon ranking first for 3 consecutive months.",
        imagePath: badgeIcon['crown']
    },
    {
        name: "Grand Star",
        description: "You’ve unlocked a badge for collecting 50 stars.",
        imagePath: badgeIcon['star']
    },
    {
        name: "10 Missions",
        description: "You’ve unlocked a badge for collect 10 missions.",
        imagePath: badgeIcon['10']
    }
];


export default badges;