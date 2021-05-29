

const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 720,
    height: 360,
    pixelArt: true,
    //scale: {mode: Phaser.Scale.ScaleModes.FIT},
    zoom: 2,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);
const Dictionary = DictionaryInit()
const LineX = 50
const LineY = 42

function preload() {
    this.load.image('mapGrid', "../assets/tilesets/mapGrid.png")
    this.load.image('wire', "../assets/tilesets/wire.png")
    this.load.image('box', "../assets/tilesets/box.png")
    this.load.image('button', "../assets/tilesets/button.png")
    this.load.tilemapTiledJSON('tilemap', "assets/map/05.json")
    this.load.bitmapFont('pixelmix', "../assets/font/pixelmix_0.png", "../assets/font/pixelmix.xml")
    //var files = fs.readdirSync("../assets/map/")
    //console.log(files)
    var fs = 
    console.log(fs)
}
function create() {
    //    Keyboard CommandText Input
    // CommandText = new BitmapText(create,200,20, "pixelmix")
    var CommandText = this.add.bitmapText(400, 10, "pixelmix", "", 8);
    var textRAW = [""]
    this.input.keyboard.on('keydown', function (event) {
        textRAW = USERtextInput(event,textRAW)
        CommandText.text = Display(textRAW,LineX,LineY)
    });

    //   Map Display
    var r1 = this.add.rectangle(180,180,350,350)
    r1.setStrokeStyle(10, 0x1a65ac);
    // var r2 = this.add.rectangle(128,128,64,64,0x1a65ac)
    // this.add.image(0,0, "mapGrid")
    var map = this.make.tilemap({key:'tilemap'})
    const tilesetBACK = map.addTilesetImage('mapGrid')
    const tilesetWIRE = map.addTilesetImage('wire')
    const tilesetBOX = map.addTilesetImage('box')
    const tilesetBUTTON = map.addTilesetImage('button')
    base = map.createLayer('base', tilesetBACK, 12, 12)
    decoration = map.createLayer('decoration', tilesetWIRE , 12, 12)
    box = map.createLayer('box', tilesetBOX , 12, 12)
    button = map.createLayer('button', tilesetBUTTON , 12, 12)
    //console.log(map)
    //
    InitialiseMap(map)
}