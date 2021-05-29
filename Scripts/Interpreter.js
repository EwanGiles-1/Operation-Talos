var NavTree = [
    { "id":0,   "searchType":WordCategory.VERB,         "next":[1,3]},
    { "id":1,   "searchType":WordCategory.DETERMINER,   "next":[2,4]},
    { "id":2,   "searchType":WordCategory.SUBJECT,      "next":[13,9,6,7]},
    { "id":3,   "searchType":WordCategory.CONJUNCTION,  "next":[3,6]},
    { "id":4,   "searchType":WordCategory.ATTACHMENT,   "next":[5,2]},
    { "id":5,   "searchType":WordCategory.CONJUNCTION,  "next":[4]},
    { "id":6,   "searchType":WordCategory.APPLICATION,  "next":[13]},
    { "id":7,   "searchType":WordCategory.PREPOSITION,  "next":[3,8]},
    { "id":8,   "searchType":WordCategory.DETERMINER,   "next":[6,9,10]},
    { "id":9,   "searchType":WordCategory.SUBJECT,      "next":[13]},
    { "id":10,  "searchType":WordCategory.ATTACHMENT,   "next":[9,11]},
    { "id":11,  "searchType":WordCategory.CONJUNCTION,  "next":[10]},
    { "id":12,  "searchType":WordCategory.MEMORY,       "next":[13]},
    { "id":13,  "searchType":WordCategory.CONJUNCTION,  "next":[0,6,13]}
]

function CommandCycle (input) {
    var TInput = input.toLowerCase().split(' ')
    var NavId = [0]
    var Output = []
    var AttachArray = []
    //console.log(Dictionary)
    TInput.forEach(word => {
        var id = FindObj(word)
        if (id >= 0) {
            var wordTags = Dictionary[id].tags
            wordTags.forEach(x => {
                NavId.forEach(Nav => {
                    if (x[0] == NavTree[Nav].searchType) {
                        NavId = NavTree[Nav].next
                        //console.log(x)
                        switch (x[0]) {
                            case (WordCategory.VERB):
                                
                                switch (x[1]) {
                                    case (VerbCat.ATTACK):
                                        ActObj = new Attack()
                                        break;
                                    case (VerbCat.COMBINE):
                                        ActObj = new Combine()
                                        break;
                                    case (VerbCat.DROP):
                                        ActObj = new Drop()
                                        break;
                                    case (VerbCat.INTERACT):
                                        ActObj = new Interact()
                                        break;            
                                    case (VerbCat.LOCOMOTION):
                                        ActObj = new Locomotion()
                                        break;            
                                    case (VerbCat.PICKUP):
                                        ActObj = new Pickup()
                                        break;            
                                }
                                Output.push(ActObj)

                                break;
                            case (WordCategory.DETERMINER):
                                break;
                            case (WordCategory.SUBJECT):
                                if (Output[Output.length - 1].target =! null) {
                                    ActionSubject = new Subject(x[2],AttachArray)
                                    Output[Output.length - 1].target = ActionSubject
                                }
                                break;
                            case (WordCategory.ATTACHMENT):
                                AttachArray.push({"cat": x[1], "desc": x[2]})
                                break;
                            case (WordCategory.APPLICATION):
                                switch (x[1]) {
                                    case (ApplicationType.DIRECTION):
                                        Output[Output.length - 1].directions.push(x[2]) 
                                        break
                                        
                                }
                                break;
                            case (WordCategory.CONJUNCTION):
                                break;
                        }
                    }
                })
            })
        }
    })
    //Output[0].Run()
    console.log(Output)
}