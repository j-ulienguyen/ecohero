const prizeIcon = {
    'bronze': require('../assets/imgs/bronze-prize.png'),
    'silver': require('../assets/imgs/silver-prize.png'),
    'gold': require('../assets/imgs/gold-prize.png'),
    'locked': require('../assets/imgs/locked-prize.png')
}

// =============================================================================================

export var prizeCards = [
    {
        prizeName: "Bronze Prize",
        description: "Awesome! You get to redeem an extra 5 minutes in recess.",
        imagePath: prizeIcon['bronze'],
        starCount: 5,
        // status: false
    },
    {
        prizeName: "Silver Prize",
        description: "Great job! You earned an EcoHero bracelet. Wear it to show your success in helping the community.",
        imagePath: prizeIcon['silver'],
        starCount: 10,
        // status: false
    },
    {
        prizeName: "Gold Prize",
        description: "Wow! You made it to this month’s mysterious prize draw. Stay tuned to see if you win.",
        imagePath: prizeIcon['gold'],
        starCount: 20,
        // status: false
    }
];