var character = {xPosition:0, yPosition:0, mapIndex:12}

var map = 
[ {xPosition:-2, yPosition: 2, id: 1,  type:"the mountains"},
  {xPosition:-1, yPosition: 2, id: 2,  type:"the mountains"},
  {xPosition: 0, yPosition: 2, id: 3,  type:"the mountains"},
  {xPosition: 1, yPosition: 2, id: 4,  type:"the forest"},
  {xPosition: 2, yPosition: 2, id: 5,  type:"the forest"},
  {xPosition:-2, yPosition: 1, id: 6,  type:"the mountains"},
  {xPosition:-1, yPosition: 1, id: 7,  type:"the mountains"},
  {xPosition: 0, yPosition: 1, id: 8,  type:"the forest"},
  {xPosition: 1, yPosition: 1, id: 9,  type:"the forest"},
  {xPosition: 2, yPosition: 1, id: 10, type:"the forest"},
  {xPosition:-2, yPosition: 0, id: 11, type:"the mountains"},
  {xPosition:-1, yPosition: 0, id: 12, type:"the forest"},
  {xPosition: 0, yPosition: 0, id: 13, type:"the forest"},
  {xPosition: 1, yPosition: 0, id: 14, type:"the forest"},
  {xPosition: 2, yPosition: 0, id: 15, type:"the forest"},
  {xPosition:-2, yPosition:-1, id: 16, type:"the mountains"},
  {xPosition:-1, yPosition:-1, id: 17, type:"the forest"},
  {xPosition: 0, yPosition:-1, id: 18, type:"the forest"},
  {xPosition: 1, yPosition:-1, id: 19, type:"the forest"},
  {xPosition: 2, yPosition:-1, id: 20, type:"the forest"},
  {xPosition:-2, yPosition:-2, id: 21, type:"the mountains"},
  {xPosition:-1, yPosition:-2, id: 22, type:"the mountains"},
  {xPosition: 0, yPosition:-2, id: 23, type:"the forest"},
  {xPosition: 1, yPosition:-2, id: 24, type:"the forest"},
  {xPosition: 2, yPosition:-2, id: 25, type:"the forest"}];


function moveUp(){
  character.yPosition ++;
  deleteFace(character.mapIndex)
  findIndex();
  display(character.xPosition, character.yPosition);
  moveFace(character.mapIndex)
}

function moveDown(){
  character.yPosition --;
  deleteFace(character.mapIndex)
  findIndex();
  display(character.xPosition, character.yPosition);
  moveFace(character.mapIndex)

}

function moveRight(){
  character.xPosition ++;
  deleteFace(character.mapIndex)
  findIndex();
  display(character.xPosition, character.yPosition);
  moveFace(character.mapIndex)
}

function moveLeft(){
  character.xPosition --;
  deleteFace(character.mapIndex)
  findIndex();
  display(character.xPosition, character.yPosition);
  moveFace(character.mapIndex)
}

// Navigation Key listener 
document.onkeydown = function() {
    switch (window.event.keyCode) {
        case 37:
            moveLeft();
            break;
        case 38:
            moveUp();
            break;
        case 39:
            moveRight();
            break;
        case 40:
            moveDown();
            break;
    }
};





function findIndex(){
  for(x in map){
    if(character.xPosition == map[x].xPosition && character.yPosition == map[x].yPosition){
      character.mapIndex = x;
    }
  }
}

function display(x,y){
  document.getElementById('display').innerHTML = "(" + x + "," + y + ")";
  document.getElementById('display2').innerHTML = "You are in " + map[character.mapIndex].type;
}

function moveFace(space){
  document.getElementById(space).innerHTML = "<img src=\"Face.png\" width=\"75\" height=\"75\"></img>"

}

function deleteFace(space){
  document.getElementById(space).innerHTML = ""
}