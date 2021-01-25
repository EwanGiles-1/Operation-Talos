var Direction = ["north","east","south","west"]
class Entity {
    constructor(roomId,id, x, y, z) {
        this.roomId = roomId
        this.id = id
        this.subType = Rooms[roomId].index[id].type
        this.coordinates = {x : x, y : y, z : z}
        if (Rooms[roomId].index[id].facing != null) {
        this.facing = Rooms[roomId].index[id].facing
        }
        //this.active = Rooms[roomId].index[id].active
        this.meta = {}
        this.meta.heavy = false //If the object can be picked up/stored
        this.meta.strength = 1 //Generalised HP for objects
        this.meta.moving = false //If the user is able to push the object around
        for (var tag in Rooms[roomId].index[id].tags)
        {
            //console.log(Rooms[roomId].index[id].tags[tag])
             switch (Rooms[roomId].index[id].tags[tag]) //special case tags that not all objects will have
            {
                case "toggle":
                    this.meta.active = Rooms[roomId].index[id].active
                    break
                case "locking":
                    this.meta.locked = Rooms[roomId].index[id].locked
                    break
                case "storage":
                    this.meta.storage = Rooms[roomId].index[id].storing
                    break
                case "controller":
                    this.meta.target = Rooms[roomId].index[id].target
                    break
                case "heavy":
                    this.meta.heavy = true
                    break
                case "unbreakable":
                    this.meta.strength = -1
                    break
                case "sliding":
                    this.meta.moving = true
                    break
                case "display":
                    this.meta.display = true
                    break
                case "read":
                    this.meta.read = Rooms[roomId].index[id].text
                    break
                case "player":
                    this.meta.player = true
                    break
            }
        }
        //this.tags = Rooms[roomId].index[id].tags
    }
}
class Player 
{
    constructor (x,y,z)
    {
        this.coordinates = {x : x, y : y, z : z}
        this.reach = 1
        this.inventory = []
    }
    Search () // returns list of entities within the player's interactable reach
    {
        output = []
        for (xC = 0 - reach; xC < reach; xC++)
        {
            for (yC = reach; yC > 0 - this.reach; yC--)
            {
                output.push(map[y+yC][x+xC])
            }
        }
        return output
    }
    execute ()
    {
        
    }
}
//
