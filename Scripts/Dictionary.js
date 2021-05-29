//Main Tags
const WordCategory = {VERB: 'wordcatVERB', DETERMINER: 'wordcatDETERMINER', SUBJECT: 'wordcatSUBJECT', MEMORY: 'wordcatMEMORY', ATTACHMENT: 'wordcatATTACHMENT', CONJUNCTION: 'wordcatCONJUNCTION', APPLICATION: 'wordcatAPPLICATION', PREPOSITION: 'wordcatPREPOSITION'}
const TargetCat = {PLAYER: 'targetcatPLAYER',OBJECT: 'targetcatOBJECT'}
//Verb
const VerbCat = {LOCOMOTION: 'verbcatLOCOMOTION',ATTACK: 'verbcatATTACK',COMBINE: 'verbcatCOMBINE',PICKUP: 'verbcatPICKUP',DROP: 'verbcatDROP',INTERACT: 'verbcatINTERACT'}
//Interaction Methods
const InteractCat = {DIALOG: 'interactcatDIALOG', SWITCH: 'interactcatSWITCH', DOOR: 'interactcatDOOR', LOCK: 'interactcatLOCK', BUTTON: 'interactcatBUTTON'}
const  InteractType = {ENABLE: 'interacttypeENABLE',DISABLE: 'interacttypeDISABLE',TOGGLE: 'interacttypeTOGGLE'}
//Adjectives
const  AttachType = {COLOUR: 'attachtypeCOLOUR',MATERIAL: 'attachtypeMATERIAL',PLUS: 'attachtypePLUS'}
const  Colour = {YELLOW: 'colourYELLOW', GREEN: 'colourGREEN', BLUE: 'colourBLUE', VIOLET: 'colourVIOLET', RED: 'colourRED', ORANGE: 'colourORANGE', BROWN: 'colourBROWN', BLACK: 'colourBLACK', WHITE: 'colourWHITE', GREY: 'colourGREY'}
const  Material = {METAL: 'materialMETAL', WOOD: 'materialWOOD'}
const  Plus = {DARK: 'plusDARK',LIGHT: 'plusLIGHT'}
//Application
const  ApplicationType = {DIRECTION: 'applicationtypeDIRECTION', }
const  Direction = {NORTH: 'directionNORTH', EAST: 'directionEAST', SOUTH: 'directionSOUTH', WEST: 'directionWEST'}
//Subjects
const  SubjectType = {OBJECT: 'subjecttypeOBJECT',ITEM: 'subjecttypeITEM',}
const  ObjectType = {MEMORY: 'objecttypeMEMORY',BOX: 'objecttypeBOX',BUTTON: 'objecttypeBUTTON',LEVER: 'objecttypeLEVER',}
//Conjunction Types
const  ConjuncType = {COMBINATION: 'conjunctypeCOMBINATION',INCREMENTAL: 'conjunctypeINCREMENTAL',DECREMENTAL: 'conjunctypeDECREMENTAL'}


function DictionaryInit() {
    const Dictionary = [
        //// VERBS
        /// LOCOMOTION (Move thingA directionA (+ directionB))
        {"tags" : [WordCategory.VERB, VerbCat.LOCOMOTION, TargetCat.PLAYER], "words" : ["go","move"]},
        {"tags" : [WordCategory.VERB, VerbCat.LOCOMOTION, TargetCat.OBJECT], "words" : ["move","push","pull"]},
        /// ATTACK (Attack thingA (+ thingB))
        {"tags" : [WordCategory.VERB, VerbCat.ATTACK, TargetCat.OBJECT], "words" : ["kill","murder","break","dismantle","destroy","punch","kick","attack"]},
        /// COMBINE (Combine thingA with thingB (+ thingC))
        {"tags" : [WordCategory.VERB, VerbCat.COMBINE, TargetCat.OBJECT], "words" : ["combine","craft"]},
        /// PICKUP (Pick up thingA (+ thingB) )
        {"tags" : [WordCategory.VERB, VerbCat.PICKUP, TargetCat.OBJECT], "words" : ["pick","pickup","grab","take","retrieve"]},
        /// DROP (Drop thingA (+ thingB))
        {"tags" : [WordCategory.VERB, VerbCat.DROP, TargetCat.OBJECT], "words" : ["put","drop","place","deposit","leave"]},
        /// INTERACT (Do thingA (+ thingB))
        // Dialog 
        {"tags" : [WordCategory.VERB, VerbCat.INTERACT, TargetCat.OBJECT, InteractCat.DIALOG], "words" : ["read","activate","interact"]},
        // Switch
        {"tags" : [WordCategory.VERB, VerbCat.INTERACT, TargetCat.OBJECT, InteractCat.SWITCH, InteractType.TOGGLE], "words" : ["flip","use","activate","interact"]},
        // Door
        /* Disabled
        {"tags" : [WordCategory.VERB, VerbCat.INTERACT, TargetCat.OBJECT, InteractCat.DOOR, InteractType.ENABLE], "words" : ["open"]},
        {"tags" : [WordCategory.VERB, VerbCat.INTERACT, TargetCat.OBJECT, InteractCat.DOOR, InteractType.DISABLE], "words" : ["close"]},
        {"tags" : [WordCategory.VERB, VerbCat.INTERACT, TargetCat.OBJECT, InteractCat.DOOR, InteractType.TOGGLE], "words" : ["use","interact"]},
        */
        // Lock
        {"tags" : [WordCategory.VERB, VerbCat.INTERACT, TargetCat.OBJECT, InteractCat.LOCK, InteractType.ENABLE], "words" : ["lock"]},
        {"tags" : [WordCategory.VERB, VerbCat.INTERACT, TargetCat.OBJECT, InteractCat.LOCK, InteractType.DISABLE], "words" : ["unlock"]},
        // Button
        {"tags" : [WordCategory.VERB, VerbCat.INTERACT, TargetCat.OBJECT, InteractCat.BUTTON, InteractType.ENABLE], "words" : ["push","activate"]},
        //// ATTACHMENT
        /// COLOUR
        {"tags" : [WordCategory.ATTACHMENT, AttachType.COLOUR, Colour.YELLOW], "words" : ["yellow"]},
        {"tags" : [WordCategory.ATTACHMENT, AttachType.COLOUR, Colour.GREEN], "words" : ["green"]},
        {"tags" : [WordCategory.ATTACHMENT, AttachType.COLOUR, Colour.BLUE], "words" : ["blue"]},
        {"tags" : [WordCategory.ATTACHMENT, AttachType.COLOUR, Colour.VIOLET], "words" : ["violet"]},
        {"tags" : [WordCategory.ATTACHMENT, AttachType.COLOUR, Colour.RED], "words" : ["red"]},
        {"tags" : [WordCategory.ATTACHMENT, AttachType.COLOUR, Colour.ORANGE], "words" : ["orange"]},
        {"tags" : [WordCategory.ATTACHMENT, AttachType.COLOUR, Colour.BROWN], "words" : ["brown"]},
        {"tags" : [WordCategory.ATTACHMENT, AttachType.COLOUR, Colour.BLACK], "words" : ["black"]},
        {"tags" : [WordCategory.ATTACHMENT, AttachType.COLOUR, Colour.WHITE], "words" : ["white"]},
        {"tags" : [WordCategory.ATTACHMENT, AttachType.COLOUR, Colour.GREY], "words" : ["grey","gray"]},
        /// MATERIAL
        {"tags" : [WordCategory.ATTACHMENT, AttachType.MATERIAL, Material.METAL], "words" : ["metal","iron","steel","silver"]},
        {"tags" : [WordCategory.ATTACHMENT, AttachType.MATERIAL, Material.WOOD], "words" : ["wood"]},
        /// PLUS
        {"tags" : [WordCategory.ATTACHMENT, AttachType.PLUS, Plus.DARK], "words" : ["dark"]},
        {"tags" : [WordCategory.ATTACHMENT, AttachType.PLUS, Plus.LIGHT], "words" : ["light","bright"]},
        //// SUBJECT

        {"tags" : [WordCategory.SUBJECT, SubjectType.OBJECT, ObjectType.BOX], "words" : ["box","cube","block"]},
        {"tags" : [WordCategory.SUBJECT, SubjectType.OBJECT, ObjectType.BUTTON], "words" : ["switch","button"]},
        {"tags" : [WordCategory.SUBJECT, SubjectType.OBJECT, ObjectType.LEVER], "words" : ["lever"]},
        {"tags" : [WordCategory.SUBJECT, SubjectType.OBJECT, ObjectType.MEMORY], "words" : ["it"]},
        /// MEMORY
        {"tags" : [WordCategory.MEMORY, TargetCat.OBJECT], "words" : ["it"]},
        
        //// APPLICATION (What do you do with thingA "push the box |left|right|up|down|")
        /// DIRECTION
        {"tags" : [WordCategory.APPLICATION, ApplicationType.DIRECTION, Direction.NORTH], "words" : ["north","up"]},
        {"tags" : [WordCategory.APPLICATION, ApplicationType.DIRECTION, Direction.EAST], "words" : ["east","right"]},
        {"tags" : [WordCategory.APPLICATION, ApplicationType.DIRECTION, Direction.SOUTH], "words" : ["south","down"]},
        {"tags" : [WordCategory.APPLICATION, ApplicationType.DIRECTION, Direction.WEST], "words" : ["west","left"]},
        //// DETERMINER
        {"tags" : [WordCategory.DETERMINER], "words" : ["the"]},
        //// PREPOSITION
        {"tags" : [WordCategory.PREPOSITION], "words" : ["to"]},
        //// CONJUNCTION
        {"tags" : [WordCategory.CONJUNCTION, ConjuncType.COMBINATION], "words" : ["and"]},
        {"tags" : [WordCategory.CONJUNCTION, ConjuncType.INCREMENTAL], "words" : ["then"]},
        {"tags" : [WordCategory.CONJUNCTION, ConjuncType.DECREMENTAL], "words" : ["before"]},
    ]
    var RevDictionary = []
    var EstablishedWord = []
    for (var a in Dictionary) {
        for (var b in Dictionary[a].words) {
            var term = Dictionary[a].words[b]
            var index = EstablishedWord.indexOf(term)
            if (index == -1) {
                RevDictionary.push({"term" : term, "tags" : [Dictionary[a].tags]})
                EstablishedWord.push(term)
            }
            else {
                RevDictionary[index].tags.push(Dictionary[a].tags)
            }
        }
    }
    RevDictionary.sort(function(a, b) {
        var keyA = new String(a.term)
        var keyB = new String(b.term)
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    })
    return RevDictionary
}

function FindObj (Value) {
    var low = 0
    var high = Dictionary.length - 1
    var mid
    while (low <= high) {
        mid = Math.floor((low + high) / 2)
        while (low <= high) {
            mid = Math.floor((low + high) / 2)
            if (Dictionary[mid].term == Value) {
                return mid
            }
            else if  (Dictionary[mid].term < Value) {
                low = mid + 1 
            }
            else { 
                high = mid - 1
            }
        }
        return -1
    }
}