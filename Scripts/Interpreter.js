
var Thesaurus = [
    //Verbs
        {key : "Verb|Locomotion|Player",value :  ["go","run","walk"]}, //Move Player
        {key : "Verb|Locomotion|Any" ,value : ["move"]},//Move Anything
        {key : "Verb|Locomotion|Object" ,value : ["push","drag","pull"]},//Move Objects
        
        {key : "Verb|Rotate|Player" ,value : ["look","face"]},//Rotate Player
        {key : "Verb|Rotate|Any" ,value : ["rotate"]},//Rotate Anything
        {key : "Verb|Rotate|Object" ,value : []},//Rotate Objects
        
        {key : "Verb|Attack|Living" ,value : ["kill","murder","fight"]},//Attack Living
        {key : "Verb|Attack|Any" ,value : ["kick","punch","attack"]},//Attack Anything
        {key : "Verb|Attack|Object" ,value : ["break","destroy","dismantle"]},//Attack Objects
        
        {key : "Verb|Combine" ,value : ["combine","craft"]},//Combine Objects
        
        {key : "Verb|PickUp" ,value : ["take","grab","store"]},//Pick Up Object
        
        {key : "Verb|Drop" ,value : ["drop","leave","place","deposit"]},//DropObject
        
        {key : "Verb|Interact|Living" ,value : ["talk"]},//General Living Interaction
        {key : "Verb|Interact|Any" ,value : ["interact"]},//General Interaction
        {key : "Verb|Interact|Object" ,value : ["use"]},//General Object Interaction
        {key : "Verb|Interact|Open" ,value : ["open"]},
        {key : "Verb|Interact|Close" ,value : ["close","shut"]},
        {key : "Verb|Interact|Lock" ,value : ["lock"]},
        {key : "Verb|Interact|Unlock" ,value : ["unlock"]},
    //Objects
        {key : "Object|Memory" ,value : ["it"]},
        {key : "Object|Box" ,value : ["box","crate","cube"]},//Box
    //Connectors
        {key : "Connector|Subsequent", value : ["and","then"]},//Connector
    //Living

    //Indicator
        {key : "Indicator|Target", value : ["the"]},
        {key : "Indicator|Location", value : ["to"]},
        {key : "Indicator|Tool" ,value : ["with"]},
    //Location
        {key : "Location|North", value : ["north","up"]},
        {key : "Location|East", value : ["east","right"]},
        {key : "Location|South", value : ["south","down"]},
        {key : "Location|West", value : ["west","left"]}
    ]

// Reverse Dictionary array to allow for simpler searching
var RevThesaurus = []
for (var a in Thesaurus)
{
    for (var b in Thesaurus[a].value)
    {
        RevThesaurus.push({key: Thesaurus[a].value[b],value: Thesaurus[a].key})
    }
}

// sorts array for faster search times
RevThesaurus.sort(function(a, b) {
    var A = new String(a.key)
    var B = new String(b.key)
    if (A < B) return -1
    if (A > B) return 1
    return 0;
})
//console.log(RevThesaurusVerbs)
function dBSearch (Array, Value) // function to do a binary search 
{
    var low = 0
    var high = Array.length - 1
    var mid
    while (low <= high)
    {
        mid = Math.floor((low + high) / 2)
        if (Array[mid].key == Value) 
        {
            return mid
        }
        else if  (Array[mid].key < Value) 
        {
            low = mid + 1 
        }
        else
        { 
            high = mid - 1
        }
    }
    return -1
}

//console.log (RevThesaurusVerbs[dBSearch(RevThesaurusVerbs,"move")].value)

//console.log(end - start);

function interpret(Input) {
    words = Input.toLowerCase().split(' ')
    usable = []
    for (var i in words) {
        search = dBSearch(RevThesaurus, words[i])
        if (search > -1)
        {
            usable.push(RevThesaurus[search].value.split('|'))
        }
        //console.log(Convert(words[i]))
    }
    console.log(usable)
    pattern = ""
    for (var i in usable)
    {
        switch (usable[i][0]) {
            case "Verb":
                pattern = pattern +  
        }
    }
}
