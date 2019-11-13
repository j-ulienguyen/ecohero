const missionIcon = {
    'reduce': require('../assets/imgs/reduce-icon.png'),
    'reuse': require('../assets/imgs/reuse-icon.png'),
    'recycle': require('../assets/imgs/recycle-icon.png'),
    'eco': require('../assets/imgs/eco-icon.png')
}

var missions = [
    {
        name: "Be Green and Clean",
        description: "Invest and use green, non-toxic cleaning products. A lot of cleaning products have harmful chemicals in them that are not environmentally friendly to dispose of. Green cleaning products use more natural and organic method of cleaning. When buying cleaning products, look for eco-friendly labels such as: Recyclable or biodegradable material, natural and organic formula etc.",
        iconPath: missionIcon['eco'],
        starAmount: 2,
        xpAmount: 20,
        code: "ABCD"
    },
    {
        name: "LEED Spotting",
        description: "Spot and take a picture of a Leadership in Energy and Environmental Design(LEED) certified building near you. LEED is an internationally recognized green building certification, they aim to make sure buildings are built with these metrics in mind: Energy saving, water efficiency, CO2 emission reduction and improve indoor environmental quality. There are many LEED certified buildings in Vancouver, seek them out!",
        iconPath: missionIcon['eco'],
        starAmount: 1,
        xpAmount: 10,
        code: "ABCD"
    },
    {
        name: "Nah to the Straw",
        description: "Help reduce the amount of plastic straw waste by Investing in a reusable straw, and use it whenever you purchase a beverage that requires a straw.",
        iconPath: missionIcon['reduce'],
        starAmount: 1,
        xpAmount: 10,
        code: "ABCD"
    },
    {
        name: "Reuse, Reuse, Reuse",
        description: "Instead of using plastic disposal bag to store your food, use reusable containers so you can cut down on the amount of plastic bags you use.",
        iconPath: missionIcon['reuse'],
        starAmount: 1,
        xpAmount: 10,
        code: "ABCD"
    },
    {
        name: "Bring Your Cup",
        description: "Help reduce waste by bringing your own cup or thermos to coffee shops when buying a drink.",
        iconPath: missionIcon['reduce'],
        starAmount: 1,
        xpAmount: 10,
        code: "ABCD"
    }
];


// var bonusMissions = [
//     {
//         name: "Save Big",
//         description: "Reduce energy consumption by purchasing electronic or appliances that are energy-efficient. Items with “Energy Star” labels on them promotes energy efficiency, so does LED lights. Not only will you help save energy consumption, you are also investing in lower electricity bill!",
//         iconPath: missionIcon['reduce'],
//         starAmount: 5,
//         xpAmount: 50,
//         code: "ABCD"
//     },
//     {
//         name: "Swap the Bulbs",
//         description: "If you are still using traditional incandescent light bulbs, switch them out with energy efficient alternatives such as: Halogen incandescent bulbs, compact fluorescent lights, and light-emitting diode bulbs. Although they are more expensive, they use 25%~80% less energy than traditional light bulbs, and they last much longer!",
//         iconPath: missionIcon['reduce'],
//         starAmount: 5,
//         xpAmount: 50,
//         code: "ABCD"
//     },
//     {
//         name: "No More Phantom Load",
//         description: "Reduce phantom load caused by all the electronics and appliances that needs to be on standby thus wastes energy. Some examples are: Stereo, TV, cable box, Game console desktop computer, phone charger and the list goes on! You can reduce phantom load by investing and using a Smart Power Strip, they help you control the amount of power used by all the appliances when you’re not using them. Save energy and save money!",
//         iconPath: missionIcon['reduce'],
//         starAmount: 5,
//         xpAmount: 50,
//         code: "ABCD"
//     },
//     {
//         name: "Soapy DIY",
//         description: "Be green and make your own natural, non-toxic, environmentally friendly soap! A lot of cleaning products have harmful chemicals in them that are not environmentally friendly to dispose of. You can search online for recipes.",
//         iconPath: missionIcon['eco'],
//         starAmount: 5,
//         xpAmount: 50,
//         code: "ABCD"
//     },
//     {
//         name: "Picker Upper",
//         description: "Help clean up the community by cleaning up after yourself and others. Take a walk around the neighbourhood, and bring a bag with you. Pick up any plastic or garbage you see on the ground. Remember to wear gloves and be safe!",
//         iconPath: missionIcon['eco'],
//         starAmount: 5,
//         xpAmount: 50,
//         code: "ABCD"
//     }
// ];


// export default {missions, bonusMissions};
export default missions;