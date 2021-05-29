class Entity {
    constructor(EntID, Colour, X,Y) {
        this._EntID = EntID
        this._Colour = Colour
        this._X = X
        this._Y = Y
    }
}
class Box extends Entity {
    constructor(EntID, Colour, X,Y) {
        super (EntID, Colour, X,Y)
    }

}
class Button extends Entity {
    constructor(EntID, Colour, X,Y, State) {
        super (EntID, Colour, X,Y)
        this._State = State
    }
    flip() {
        this._State = !_State
    }

}

class Tile {
    constructor(X,Y) {
        this._X = X
        this._Y = Y
    }
}