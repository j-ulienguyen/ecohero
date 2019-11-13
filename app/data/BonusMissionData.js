const missionIcon = {
    'reduce': require('../assets/imgs/reduce-icon.png'),
    'reuse': require('../assets/imgs/reuse-icon.png'),
    'recycle': require('../assets/imgs/recycle-icon.png'),
    'eco': require('../assets/imgs/eco-icon.png')
}

var bonusMissions = [
    {
        name: "Save Big",
        description: "Reduce energy consumption by purchasing electronic or appliances that are energy-efficient. Items with “Energy Star” labels on them promotes energy efficiency, so does LED lights. Not only will you help save energy consumption, you are also investing in lower electricity bill!",
        iconPath: missionIcon['reduce'],
        starAmount: 5,
        xpAmount: 50,
        code: "ABCD"
    },
    {
        name: "Swap the Bulbs",
        description: "If you are still using traditional incandescent light bulbs, switch them out with energy efficient alternatives such as: Halogen incandescent bulbs, compact fluorescent lights, and light-emitting diode bulbs. Although they are more expensive, they use 25%~80% less energy than traditional light bulbs, and they last much longer!",
        iconPath: missionIcon['reduce'],
        starAmount: 5,
        xpAmount: 50,
        code: "ABCD"
    },
    {
        name: "No More Phantom Load",
        description: "Reduce phantom load caused by all the electronics and appliances that needs to be on standby thus wastes energy. Some examples are: Stereo, TV, cable box, Game console desktop computer, phone charger and the list goes on! You can reduce phantom load by investing and using a Smart Power Strip, they help you control the amount of power used by all the appliances when you’re not using them. Save energy and save money!",
        iconPath: missionIcon['reduce'],
        starAmount: 5,
        xpAmount: 50,
        code: "ABCD"
    },
    {
        name: "Soapy DIY",
        description: "Be green and make your own natural, non-toxic, environmentally friendly soap! A lot of cleaning products have harmful chemicals in them that are not environmentally friendly to dispose of. You can search online for recipes.",
        iconPath: missionIcon['eco'],
        starAmount: 5,
        xpAmount: 50,
        code: "ABCD"
    },
    {
        name: "Picker Upper",
        description: "Help clean up the community by cleaning up after yourself and others. Take a walk around the neighbourhood, and bring a bag with you. Pick up any plastic or garbage you see on the ground. Remember to wear gloves and be safe!",
        iconPath: missionIcon['eco'],
        starAmount: 5,
        xpAmount: 50,
        code: "ABCD"
    }
]


export default bonusMissions;