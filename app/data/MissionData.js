const missionIcon = {
    'reduce': require('../assets/imgs/reduce-icon.png'),
    'reuse': require('../assets/imgs/reuse-icon.png'),
    'recycle': require('../assets/imgs/recycle-icon.png'),
    'eco': require('../assets/imgs/eco-icon.png')
}

// =============================================================================================

export const missions = [
    {
        missionName: "Be Green and Clean",
        description: "Invest and use green, non-toxic cleaning products. A lot of cleaning products have harmful chemicals in them that are not environmentally friendly to dispose of. Green cleaning products use more natural and organic method of cleaning. When buying cleaning products, look for eco-friendly labels such as: Recyclable or biodegradable material, natural and organic formula etc.",
        iconPath: missionIcon['eco'],
        starAmount: 2,
        xpAmount: 20,
        code: "ABCD"
    },
    {
        missionName: "LEED Spotting",
        description: "Spot and take a picture of a Leadership in Energy and Environmental Design(LEED) certified building near you. LEED is an internationally recognized green building certification, they aim to make sure buildings are built with these metrics in mind: Energy saving, water efficiency, CO2 emission reduction and improve indoor environmental quality. There are many LEED certified buildings in Vancouver, seek them out!",
        iconPath: missionIcon['eco'],
        starAmount: 1,
        xpAmount: 10,
        code: "ABCD"
    },
    {
        missionName: "Nah to the Straw",
        description: "Help reduce the amount of plastic straw waste by Investing in a reusable straw, and use it whenever you purchase a beverage that requires a straw.",
        iconPath: missionIcon['reduce'],
        starAmount: 1,
        xpAmount: 10,
        code: "ABCD"
    },
    {
        missionName: "Reuse, Reuse, Reuse",
        description: "Instead of using plastic disposal bag to store your food, use reusable containers so you can cut down on the amount of plastic bags you use.",
        iconPath: missionIcon['reuse'],
        starAmount: 1,
        xpAmount: 10,
        code: "ABCD"
    },
    {
        missionName: "Bring Your Cup",
        description: "Help reduce waste by bringing your own cup or thermos to coffee shops when buying a drink.",
        iconPath: missionIcon['reduce'],
        starAmount: 1,
        xpAmount: 10,
        code: "ABCD"
    },
    {
        missionName: "Page Turner",
        description: "When printing, use both sides of the paper, or write on both sides of the paper when you take notes. This will reduce the amount of paper you use by half!",
        iconPath: missionIcon['reduce'],
        starAmount: 1,
        xpAmount: 10,
        code: "ABCD"
    },
    {
        missionName: "One Less Bottle",
        description: "Invest in a refillable water bottle instead of buying disposable plastic bottles for water, this will help to reduce plastic waste.",
        iconPath: missionIcon['reduce'],
        starAmount: 1,
        xpAmount: 10,
        code: "ABCD"
    },
    {
        missionName: "Got Lunch?",
        description: "Use reusable containers to pack your lunch, instead of plastic bags. This will reduce the amount of one-time-use plastic bags you throw out!",
        iconPath: missionIcon['reduce'],
        starAmount: 1,
        xpAmount: 10,
        code: "ABCD"
    },
    {
        missionName: "Transform Them",
        description: "Transform something that is broken or getting thrown out, and make them into something useful. Give the item another purpose, be creative! For example, various containers, bottles, and unwanted clothings.",
        iconPath: missionIcon['recycle'],
        starAmount: 2,
        xpAmount: 20,
        code: "ABCD"
    },
    {
        missionName: "Bring Your Own!",
        description: "Doing some shopping? Bring your own bag to the grocery store when you shop! Help reduce the usage of plastic grocery bags by bringing your own!",
        iconPath: missionIcon['reduce'],
        starAmount: 1,
        xpAmount: 10,
        code: "ABCD"
    },
    {
        missionName: "Fix It Up",
        description: "Instead of throwing out broken items, challenge yourself and fix it so it can be reused, be creative!",
        iconPath: missionIcon['reuse'],
        starAmount: 2,
        xpAmount: 20,
        code: "ABCD"
    },
    {
        missionName: "Donate Your Clothes",
        description: "Clean your closet and find any clothes that you no longer wear, and donate them at the nearest thrift store. Even though you may no longer wear them, your clothes can be reused by others in need.",
        iconPath: missionIcon['recycle'],
        starAmount: 2,
        xpAmount: 20,
        code: "ABCD"
    },
    {
        missionName: "Donate Your Books",
        description: "Go through your bookshelf and look for any books you no longer read, and donate them to your local library. This way, unneeded books can be reused by other people, prolonging the lifespan and usability of that book.",
        iconPath: missionIcon['recycle'],
        starAmount: 2,
        xpAmount: 20,
        code: "ABCD"
    },
    {
        missionName: "Let's Recycle!",
        description: "Collect a bag of bottles and cans and bring them to the nearest recycling depot! Help recycle AND get your money back.",
        iconPath: missionIcon['recycle'],
        starAmount: 2,
        xpAmount: 20,
        code: "ABCD"
    }
];

// =============================================================================================

export const bonusMissions = [
    {
        missionName: "Save Big",
        description: "Reduce energy consumption by purchasing electronic or appliances that are energy-efficient. Items with “Energy Star” labels on them promotes energy efficiency, so does LED lights. Not only will you help save energy consumption, you are also investing in lower electricity bill!",
        iconPath: missionIcon['reduce'],
        starAmount: 5,
        xpAmount: 50,
        code: "ABCD"
    },
    {
        missionName: "Swap the Bulbs",
        description: "If you are still using traditional incandescent light bulbs, switch them out with energy efficient alternatives such as: Halogen incandescent bulbs, compact fluorescent lights, and light-emitting diode bulbs. Although they are more expensive, they use 25%~80% less energy than traditional light bulbs, and they last much longer!",
        iconPath: missionIcon['reduce'],
        starAmount: 5,
        xpAmount: 50,
        code: "ABCD"
    },
    {
        missionName: "No More Phantom Load",
        description: "Reduce phantom load caused by all the electronics and appliances that needs to be on standby thus wastes energy. Some examples are: Stereo, TV, cable box, Game console desktop computer, phone charger and the list goes on! You can reduce phantom load by investing and using a Smart Power Strip, they help you control the amount of power used by all the appliances when you’re not using them. Save energy and save money!",
        iconPath: missionIcon['reduce'],
        starAmount: 5,
        xpAmount: 50,
        code: "ABCD"
    },
    {
        missionName: "Soapy DIY",
        description: "Be green and make your own natural, non-toxic, environmentally friendly soap! A lot of cleaning products have harmful chemicals in them that are not environmentally friendly to dispose of. You can search online for recipes.",
        iconPath: missionIcon['eco'],
        starAmount: 5,
        xpAmount: 50,
        code: "ABCD"
    },
    {
        missionName: "Picker Upper",
        description: "Help clean up the community by cleaning up after yourself and others. Take a walk around the neighbourhood, and bring a bag with you. Pick up any plastic or garbage you see on the ground. Remember to wear gloves and be safe!",
        iconPath: missionIcon['eco'],
        starAmount: 5,
        xpAmount: 50,
        code: "ABCD"
    }
];