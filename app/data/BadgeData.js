const badgeIcon = {
    '10': require('../assets/imgs/10-badge.png'),
    'crown': require('../assets/imgs/crown-badge.png'),
    'eco': require('../assets/imgs/eco-badge.png'),
    'leaf': require('../assets/imgs/leaf-badge.png'),
    'recycle': require('../assets/imgs/recycle-badge.png'),
    'star': require('../assets/imgs/star-badge.png')
}

export const badges = [
    {
        badgeName: "New Leaf Badge",
        description: "You’ve unlocked a badge for completing 5 bonus missions",
        imagePath: badgeIcon['leaf']
    },
    {
        badgeName: "Recycler Badge",
        description: "You’ve unlocked a badge for completing 20 recycle missions",
        imagePath: badgeIcon['recycle']
    },
    {
        badgeName: "Initiation Badge",
        description: "Badge awarded upon completing first mission",
        imagePath: badgeIcon['eco']
    },
    {
        badgeName: "Honour Roll Badge",
        description: "Badge awarded upon ranking first for 3 consecutive months",
        imagePath: badgeIcon['crown']
    },
    {
        badgeName: "Grand Star Badge",
        description: "You’ve unlocked a badge for collecting 50 stars",
        imagePath: badgeIcon['star']
    },
    {
        badgeName: "10 Missions Badge",
        description: "You’ve unlocked a badge for collect 10 missions",
        imagePath: badgeIcon['10']
    }
];