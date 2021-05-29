class Subject {
    constructor(object,attach) {
        
        this._object = object
        this._attach = attach
    }
    set object(object) {
        this._object = object
    }
    get object() {
        return this._object
    }
}

class Action {
    constructor(id) {
        this._id = id
        this._target = null
    }
    set target(target) {
        this._target = target
    }
    get id() {
        return this._id
    }
}

class Locomotion extends Action {
    constructor() {
        super(VerbCat.LOCOMOTION)
        this._directions = []
    }
    set directions(directions) {
        this._directions = directions
    }
    get directions() {
        return this._directions
    }
    Run() {
        console.log("LocomotionRun")
    }
}
class Attack extends Action {
    constructor() {
        super(VerbCat.ATTACK)
    }
    Run() {
        console.log("AttackRun")
    }

}
class Interact extends Action {
    constructor() {
        super(VerbCat.INTERACT)
    }
    Run() {
        console.log("InteractRun")
    }
}
class Pickup extends Action {
    constructor() {
        super(VerbCat.PICKUP)
    }
    Run() {
        console.log("PickupRun")
    }
}
class Drop extends Action {
    constructor() {
        super(VerbCat.DROP)
    }
    Run() {
        console.log("DropRun")
    }
}
class Combine extends Action {
    constructor() {
        super(VerbCat.COMBINE)
    }
    Run() {
        console.log("CombineRun")
    }
}


