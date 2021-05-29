
function grab(index,X,Y) {
    Output = ""
    if (17 <= index && index <= 23) {
        Output = new Box(ObjectType.BOX, getColour(index - 17), X, Y)
    }
    else if ( 3 <= index && index <= 16) {
        Output = new Button(ObjectType.BUTTON,getColour((index + (index % 2) - 4) / 2), X, Y, !(index % 2))
    }
    else if (index == 2) {
        Output = new Tile(X,Y)
    }

    return Output
}

function getColour(offset) {
    switch (offset) {
        case(0):
            return Colour.YELLOW
        case(1):
            return Colour.GREEN
        case(2):
            return Colour.BLUE
        case(3):
            return Colour.VIOLET
        case(4):
            return Colour.RED
        case(5):
            return Colour.ORANGE
        case(6):
            return Colour.WHITE
    }
}

function InitialiseMap (map) {
    console.log(map)
    var Output = []
    for (y = 0; y < map.height; y++) {
        Output.push([])
        for (x = 0; x < map.width; x++) {
            Output[y].push([])
        }
    }
    map.layers.forEach(Layer => {
        if (Layer.name != "decoration") {
            Layer.data.forEach(Y => {
                Y.forEach(Tile => {
                    var obj = grab(Tile.index,Tile.x,Tile.y)
                    if (obj != "") {
                        Output[Tile.y][Tile.x].push(obj)
                    }
                })
            })
        }
    })
    console.log(Output)
    return Output
}