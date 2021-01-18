let state = {}

function StartGame() {
    state = {}

}
function Display () {

}
function SelectOption () {
    const nextNodeId = option.nextText
    if (nextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    Display(nextNodeId)
}

const AdventureNodes = [
    {
        id: 1,
        text: "You are surrounded by a vista of a starry sky, clouds of blue, purple and red. Stars the size beyond comprehension, specks of dust within your sight.",
        options: [
            {
                text: "Where am I?",
                nextText: 2
            },
            {
                text: "So pretty.",
                nextText: 2
            },
            {
                text: "Woah.",
                nextText: 2
            },
            {
                text: "...",
                nextNode: 2
            }
        ]
    },
    {
        id: 2,
        text: "Any thought is cut short by the sensation of falling, you look around, but nothing is moving. The stars remain motionless compared to you, their sheer distance dwarfs your acceleration.",
        options: [
            {
                text: "Look down.",
                nextNode: 3
            }
        ]
    },
    {
        id: 3,
        text: "",
        options: [
            {
                text: "",
                nextText: 4
            }
        ]
    },
]
/* Node Example
{
    id: 3,
        text: "",
            options: [
                {
                    text: "",
                    requiredState: (currentState) => currentState.blueGoo,
                    setState: { blueGoo: false, sword: true },
                    nextText: 4
                }
            ]
},
*/
StartGame()