// Each room is a 3D array with each item in the array indicating

// Each number indicates an ID that is unique to that room, items earlier in each array are lower
Rooms = [
    {name : "Demo", x : 2, y : 3, room :[
    [[0],[0],[1],[0],[0]],
    [[0],[],[],[],[0]],
    [[0],[4],[],[5],[0]],
    [[0],[3],[6],[],[0]],
    [[0],[0],[2],[0],[0]]
    ],
    index : [
        {type : "Wall", tags : ["impassable","unbreakable","heavy"]},//0
        {type : "Door", tags : ["exit","controlled","heavy","toggle","locking"],facing : "south", active : false, locked : true},//1
        {type : "Door", tags : ["entrance","unbreakable","heavy","toggle","locking"],facing : "north", active : false, locked : true},//2
        {type : "Crate", tags : ["heavy","sliding","unbreakable"]},//3
        {type : "floorButton", tags : ["heavy","unbreakable","controller","toggle"], active : false, target : 1},//4
        {type : "Pedestal", tags : ["storage","heavy","unbreakable","display","toggle"], active : true, storing : [0]},//5
        {type : "Player", tags : ["player"]}//6
    ],
    stored : [
        {type : "Book", tags : ["read"],text : "Welcome to the demo of the Escape room. Please place an object on the button to continue"},//0
    ]
    }]
//impassable The player cannot exist in the same space
//unbreakable It cannot be destroyed or killed
//toggle It has a trackable active state
//heavy It cannot be picked up or stored
//door Door sends the player to a room if walked onto while it is active (open)
//controlled Its active state depnds on the active state of another object (controller)
//box Its a box
//sliding Can be moved using the Locomotion tag
//button Button
//controller Its active state affects the active state of other objects
//storage It contains objects
//display the player can see and interact with objects in the storage without grabbing them
//read It stores a text that can be read
//player Its the player

/*
class Controller extends Entity {
    constructor(id, subType, room, x, y, z, facing, active = false, target,tags) {
        super(id, subType, room, x, y, z, facing, active,tags)
        this.target = target
        if (subType = "floorButton")
        {
            this.method = "mass"
        }
        else
        {
            this.method = "interact"
        }
    }
}
class Interactable extends Entity {
    constructor(id, subType, room, x, y, z, facing, active = false,tags, storing = []) {
        super(id, subType, room, x, y, z, facing, active,tags)
        this.storage = storing
    }
    store(item)
    {
        storage.push(item)
    }
}
*/
function initializeMap (id) {
    Room = Rooms[id]
    output = []
    for(var y in Room.room)
    {
        row = []
        for(x = 0; x < Room.room[y].length;x++)
        {
            slot = []
            if (Room.room[y][x].length !== 0) {
                for (z = 0; z < Room.room[y][x].length;z++)
                {
                    if (Room.room[y][x][z] !== null)
                    {
                        if (Room.room[y][x][z] == "Player")
                        {

                        }
                        else 
                        {
                            slot.push(new Entity(id,(Room.room[y][x][z]),x,y,z))
                        }
                    }
                }
            }
            //row.push(Room.room[y][x])
            row.push(slot)
        }
        output.push(row)
    }
    return output
}
function initializeStorage(id)
{
    Room = Rooms[id]
    output = []
}

map = initializeMap(0)
//map[3][1] = new Interactable(4,"crate",0,1,3,0,null,false,null)
//console.log(map)