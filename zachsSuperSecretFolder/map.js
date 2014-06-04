function character(row, col, mapIndex) {
    this.row = row
    this.col = col
    this.mapIndex = mapIndex
}

var goodGuy = new character(0, 0, 0);

function moveDown() {
    goodGuy.row--;
}

var hero = new character(0, 0, 12);




function board(id, type) {
    this.id = id
    this.type = type
}

var map[5][5] = new board()