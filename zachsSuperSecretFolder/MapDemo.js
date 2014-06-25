function doStuff() {

    var canvas = document.getElementById('canvas')
    console.log("canvas: " + canvas)
    var context = canvas.getContext('2d')
    console.log("context: " + context)

    canvas.style.backgroundColor = "yellow"
    // 0.s or grass and 1's are sand
    var mapArray =
        [
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 0]
    ]

    //grass and sand vars
    var grass = new Image()
    var sand = new Image()

    // Grass and sand files
    grass.src = "grass.png"
    sand.src = "sand.jpg"

    var xPos = 0;
    var yPos = 0;
    context.drawImage(grass, xPos, yPos, 32, 32)
    console.log("MapArray.length" + mapArray.length)
    for (var iX = 0; iX < mapArray.length; iX++) {
        console.log("iX: " + iX)
        for (var iY = 0; iY < mapArray[iX].length; iY++) {
            console.log("iY: " + iY)
            if (mapArray[iX][iY] == 0) {
                context.drawImage(grass, xPos, yPos, 32, 32)
            }
            if (mapArray[iX][iY] == 1) {
                context.drawImage(sand, xPos, yPos, 32, 32)
            }
            xPos += 32
        }
        yPos += 32
        xPos = 0
    }
}