//--------------------------------
//main function to change menu
function changer(tochange, comein) {
    tochange = document.querySelector(tochange);
    comein = document.querySelector(comein);
    /*moving/fading out*/
    tochange.style.left = '-100%'
    tochange.style.opacity = '0'
    /*bringing/fading in*/
    comein.style.left = '0%'
    comein.style.opacity = '1'
}

//--------------------------------
//reverse function to reverse menu
function reverse(tochange, comein) {
    tochange = document.querySelector(tochange);
    comein = document.querySelector(comein);
    /*moving/fading out*/
    tochange.style.left = '100%'
    tochange.style.opacity = '0'
    /*bringing/fading in*/
    comein.style.left = '0%'
    comein.style.opacity = '1'
}

//--------------------------------
//function to bring top down
function topDown(tochange, comein) {
    tochange = document.querySelector(tochange);
    comein = document.querySelector(comein);
    /*moving/fading out*/
    tochange.style.top = '100%'
    tochange.style.opacity = '0'
    /*bringing/fading in*/
    comein.style.top = '-200%'
    comein.style.opacity = '1'
}

//function to bring top down
function downTop(tochange, comein) {
    tochange = document.querySelector(tochange);
    comein = document.querySelector(comein);
    /*moving/fading out*/
    tochange.style.top = '100%'
    tochange.style.opacity = '0'
    /*bringing/fading in*/
    comein.style.top = '-100%'
    comein.style.opacity = '1'
}

// var clicker = document.querySelector('#inventory')

// clicker.onclick = function() {
//     downTop('#inventory', '#game')
// }

/**************/
/*Darvils code*/
/*************/
var character = {
    xPosition: 0,
    yPosition: 0,
    mapIndex: 12
}
var map = [{
    xPosition: -2,
    yPosition: 2,
    id: 1,
    type: "the mountains"
}, {
    xPosition: -1,
    yPosition: 2,
    id: 2,
    type: "the mountains"
}, {
    xPosition: 0,
    yPosition: 2,
    id: 3,
    type: "the mountains"
}, {
    xPosition: 1,
    yPosition: 2,
    id: 4,
    type: "the forest"
}, {
    xPosition: 2,
    yPosition: 2,
    id: 5,
    type: "the forest"
}, {
    xPosition: -2,
    yPosition: 1,
    id: 6,
    type: "the mountains"
}, {
    xPosition: -1,
    yPosition: 1,
    id: 7,
    type: "the mountains"
}, {
    xPosition: 0,
    yPosition: 1,
    id: 8,
    type: "the forest"
}, {
    xPosition: 1,
    yPosition: 1,
    id: 9,
    type: "the forest"
}, {
    xPosition: 2,
    yPosition: 1,
    id: 10,
    type: "the forest"
}, {
    xPosition: -2,
    yPosition: 0,
    id: 11,
    type: "the mountains"
}, {
    xPosition: -1,
    yPosition: 0,
    id: 12,
    type: "the forest"
}, {
    xPosition: 0,
    yPosition: 0,
    id: 13,
    type: "the forest"
}, {
    xPosition: 1,
    yPosition: 0,
    id: 14,
    type: "the forest"
}, {
    xPosition: 2,
    yPosition: 0,
    id: 15,
    type: "the forest"
}, {
    xPosition: -2,
    yPosition: -1,
    id: 16,
    type: "the mountains"
}, {
    xPosition: -1,
    yPosition: -1,
    id: 17,
    type: "the forest"
}, {
    xPosition: 0,
    yPosition: -1,
    id: 18,
    type: "the forest"
}, {
    xPosition: 1,
    yPosition: -1,
    id: 19,
    type: "the forest"
}, {
    xPosition: 2,
    yPosition: -1,
    id: 20,
    type: "the forest"
}, {
    xPosition: -2,
    yPosition: -2,
    id: 21,
    type: "the mountains"
}, {
    xPosition: -1,
    yPosition: -2,
    id: 22,
    type: "the mountains"
}, {
    xPosition: 0,
    yPosition: -2,
    id: 23,
    type: "the forest"
}, {
    xPosition: 1,
    yPosition: -2,
    id: 24,
    type: "the forest"
}, {
    xPosition: 2,
    yPosition: -2,
    id: 25,
    type: "the forest"
}];

function moveUp() {
    if (character.yPosition < 2) {
        character.yPosition++;
        deleteFace(character.mapIndex)
        findIndex();
        moveFace(character.mapIndex)
    }
}


function moveDown() {
    if (character.yPosition > -2) {
        character.yPosition--;
        deleteFace(character.mapIndex)
        findIndex();
        moveFace(character.mapIndex)
    }
}

function moveRight() {
    if (character.xPosition < 2) {
        character.xPosition++;
        deleteFace(character.mapIndex)
        findIndex();
        moveFace(character.mapIndex)
    }
}

function moveLeft() {
    if (character.xPosition > -2) {
        character.xPosition--;
        deleteFace(character.mapIndex)
        findIndex();
        moveFace(character.mapIndex)
    }
}

function findIndex() {
    for (x in map) {
        if (character.xPosition == map[x].xPosition && character.yPosition == map[x].yPosition) {
            character.mapIndex = x;
        }
    }
}


function moveFace(space) {
    document.getElementById(space).innerHTML = "<img src=\"pics/Face.png\" width=\"75\" height=\"75\"></img>"

}

function deleteFace(space) {
    document.getElementById(space).innerHTML = ""
}