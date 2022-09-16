//defining all images for the game
const starterTownImg = new Image();
starterTownImg.src = 'images/Pallettown.png';
const forestmap1 = new Image();
forestmap1.src = 'images/forest.png';
const cavemap1 = new Image();
cavemap1.src = 'images/pixelCave.png';
//event define boxes
var MonsterEvent = document.querySelector('.monster-event');
var NextLevel = document.querySelector('.next-level');
var StoryEvent = document.querySelector('.story-event');
//define self collission
function overlaps() {
    var rect1 = NextLevel.getBoundingClientRect();
    var rect2 = MonsterEvent.getBoundingClientRect();
    var isInHoriztonalBounds = rect1.x < rect2.x + rect2.width + 100 && 100 + rect1.x + rect1.width > rect2.x;
    var isInVerticalBounds = rect1.y < rect2.y + rect2.height + 100 && rect1.y + rect1.height + 100 > rect2.y;
    var isOverlapping = isInHoriztonalBounds && isInVerticalBounds;
    var istrueoverlap = xleft - 80 <= monsterXleft && xright + 80 >= monsterXright && ybot + 80 >= monsterYbot && ytop - 80 <= monsterYtop;
    var xleft = parseInt(StoryEvent.style.left);
    var xright = parseInt(StoryEvent.style.right);
    var ybot = parseInt(StoryEvent.style.bottom);
    var ytop = parseInt(StoryEvent.style.top);
    var monsterXleft = parseInt(MonsterEvent.style.left);
    var monsterXright = parseInt(MonsterEvent.style.right);
    var monsterYbot = parseInt(MonsterEvent.style.bottom);
    var monsterYtop = parseInt(MonsterEvent.style.top);
    return istrueoverlap;
}
//defining canvas in script to draw images on it as maps
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
const player = document.getElementById("player");
ctx.imageSmoothingEnabled = true;
// function randompos() {
//   var storyTop = randomIntFromInterval(100,300);
//   var storyleft = randomIntFromInterval(0,500);
//   var monsterTop = randomIntFromInterval(100,300);
//   var monsterleft = randomIntFromInterval(0,500);
//   StoryEvent.style.left = storyleft + 'px';
//   StoryEvent.style.top = storyTop + 'px';
//   MonsterEvent.style.top = monsterTop + 'px';
//   MonsterEvent.style.left = monsterleft + 'px';
//   overlaps();
//   if (overlaps() == true) {
//     console.log("SHIT IS OVERLAPPING")
//     randompos();
//   }
// }
// function randomizePos(currentElem:HTMLElement, avoidElem:HTMLElement) {
//   currentElem.style.left = randomIntFromInterval(100,300)+"px";
//   currentElem.style.top  = randomIntFromInterval(100,500)+"px";
//   var overlap = 
//   (
//     parseInt(currentElem.style.left)    +'px'  <= avoidElem.style.left && parseInt(currentElem.style.right)    +'px'  >= avoidElem.style.right || 
//     parseInt(currentElem.style.top)      +'px'  <= avoidElem.style.top && parseInt(currentElem.style.bottom)   +'px'  >= avoidElem.style.bottom)
//   if (!overlap) {
//   }
//   else {
//     randomizePos(currentElem, avoidElem)
//   }
// }
/*
document.addEventListener("mousemove", function(e){
  
  MonsterEvent.style.left = e.clientX-290+"px";
  MonsterEvent.style.top = e.clientY-170+"px";

  console.log(  isColiding(MonsterEvent, StoryEvent)  );
});
*/
console.log("Detta scriptet kör två gånger!!");
moveEventRandomly(document.getElementsByClassName("collisionDetect")[1], document.getElementsByClassName("collisionDetect"));
moveEventRandomly(MonsterEvent, document.getElementsByClassName("collisionDetect"));
function moveEventRandomly(mainElem, avoidElems) {
    var collided = false;
    do {
        console.log("colide-------------------------------------------------------------d");
        mainElem.style.left = randomIntFromInterval(325, 400) + "px";
        mainElem.style.top = randomIntFromInterval(200, 400) + "px";
        for (let i = 0; i < avoidElems.length; i++) {
            if (isColiding(mainElem, avoidElems[i]) && avoidElems[i] != mainElem) {
                collided = true;
                console.log("COLLLL" + i);
            }
        }
        console.log("col" + collided);
    } while (collided);
    console.log(avoidElems);
    /*
    if (mainElem != avoidElems[i]) {
      let tried = 0
      do {
        mainElem.style.left = randomIntFromInterval(100,300)+"px";
        mainElem.style.top  = randomIntFromInterval(100,500)+"px";
        tried++
        if (tried > 10) {
          console.log(!isColiding(mainElem, avoidElems[0]))
          return;
        }
      } while (!isColiding(mainElem, avoidElems[0]));
    }
*/
}
function isColiding(elemOne, elemTwo) {
    elemOne = elemOne.getBoundingClientRect();
    elemTwo = elemTwo.getBoundingClientRect();
    return !(elemOne.top > elemTwo.bottom ||
        elemOne.right < elemTwo.left ||
        elemOne.bottom < elemTwo.top ||
        elemOne.left > elemTwo.right);
}
// randomizePos(StoryEvent, MonsterEvent);
// randomizePos(MonsterEvent, StoryEvent);
// //randomizeEventsPos();
// //function to randomize location
// function randomizeEventsPos(){
//   var storyTop = randomIntFromInterval(100,300);
//   var storyleft = randomIntFromInterval(100,500);
//   var monsterTop = randomIntFromInterval(100,300);
//   var monsterleft = randomIntFromInterval(100,500);
//   MonsterEvent.style.top = monsterTop + 'px';
//   MonsterEvent.style.left = monsterleft + 'px';
//   StoryEvent.style.top = storyTop + 'px';
//   StoryEvent.style.left = storyleft + 'px';
// //    const interactDivs = document.getElementsByClassName("collisionDetect")
//   StoryEvent.getBoundingClientRect();
//   MonsterEvent.getBoundingClientRect();
//   NextLevel.getBoundingClientRect();
// var xleft = parseInt(StoryEvent.style.left);
// var xright = parseInt(StoryEvent.style.right);
// var ybot = parseInt(StoryEvent.style.bottom);
// var ytop = parseInt(StoryEvent.style.top);
// var monsterXleft = parseInt(MonsterEvent.style.left);
// var monsterXright = parseInt(MonsterEvent.style.right);
// var monsterYbot = parseInt(MonsterEvent.style.bottom);
// var monsterYtop = parseInt(MonsterEvent.style.top);
// var overlap2 = (xleft -80 <= monsterXleft && xright +80 >= monsterXright && ybot +80>= monsterYbot && ytop-80 <= monsterYtop)
// var overlap = (parseInt(StoryEvent.style.left) -100 +'px' <= MonsterEvent.style.left && 
// parseInt(StoryEvent.style.right) + 100 +'px' >= MonsterEvent.style.right && 
// parseInt(StoryEvent.style.top) -100 +'px'<= MonsterEvent.style.top && 
// parseInt(StoryEvent.style.bottom) +100 +'px'  >= MonsterEvent.style.bottom)
// if (overlap){
//   //randomizeEventsPos();
//   console.log("hello");
// }
// }
///////////////////////////////////
// setInterval(semirandom, 500)
// function semirandom() {
//   let x = randomIntFromInterval(1,7)
//   console.log("x is" + x)
//   switch (x) {
//       case 1:
//       StoryEvent.style.left = 200 + 'px'
//       StoryEvent.style.top = 300 + 'px'
//       break;
//       case 2:
//         StoryEvent.style.left = 380 + 'px'
//         StoryEvent.style.top = 390 + 'px'
//       break;
//       case 3:
//         StoryEvent.style.left = 450 + 'px'
//         StoryEvent.style.top = 275 + 'px'
//       break;
//       case 4:
//         StoryEvent.style.left = 400 + 'px'
//         StoryEvent.style.top = 150 + 'px'
//       break;
//       case 5:
//         StoryEvent.style.left = 125 + 'px'
//         StoryEvent.style.top = 250 + 'px'
//       break;
//       case 6:
//         StoryEvent.style.left = 300 + 'px'
//         StoryEvent.style.top = 250 + 'px'
//       break;
//       case 7:
//         StoryEvent.style.left = 200 + 'px'
//         StoryEvent.style.top = 300 + 'px'
//       break;
//   }
//   let y = randomIntFromInterval(1,8)
// console.log("y is " + y)
//   switch (y) {
//     case 1:
//       MonsterEvent.style.left = 150 + 'px'
//       MonsterEvent.style.top = 200 + 'px'
//       break;
//       case 2:
//         MonsterEvent.style.left = 405 + 'px'
//         MonsterEvent.style.top = 305 + 'px'
//       break;
//       case 3:
//         MonsterEvent.style.left = 500 + 'px'
//         MonsterEvent.style.top = 250 + 'px'
//       break;
//       case 4:
//         MonsterEvent.style.left = 225 + 'px'
//         MonsterEvent.style.top = 100 + 'px'
//       break;
//       case 5:
//         MonsterEvent.style.left = 550 + 'px'
//         MonsterEvent.style.top =  150+ 'px'
//       break;
//       case 6:
//         MonsterEvent.style.left = 225 + 'px'
//         MonsterEvent.style.top = 200 + 'px'
//       break;
//       case 7:
//         MonsterEvent.style.left = 550 + 'px'
//         MonsterEvent.style.top = 200 + 'px'
//       break;
//       case 8:
//         MonsterEvent.style.left = 325 + 'px'
//         MonsterEvent.style.top = 100 + 'px'
//       break;
// }}
//Define enemy box to restart
//Drawing starterTown image
window.onload = function () {
    ctx.drawImage(starterTownImg, 0, 0, starterTownImg.width, starterTownImg.height, // source rectangle
    0, 0, canvas.width, canvas.height);
};
//define player to reset position later
//Function for creating random numbers
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
export function loadMapsStage1() {
    //reset location of player
    player.style.top = 325 + 'px';
    player.style.left = 325 + 'px';
    MonsterEvent.style.display = "block";
    //We need a while stageclear = true do this function
    //And we need to use player data to see which stage to load, so for example if stage is   0<stage<5 we use a function between stages 1-5 through a function
    //satte in random number generation funktionen sådana att den skulle komma med i exporten
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    switch (randomIntFromInterval(1, 1)) {
        case 1: //draws 1 possible map of forests map
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(forestmap1, 0, 0, forestmap1.width, forestmap1.height, // source rectangle
            0, 0, canvas.width, canvas.height);
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
    }
}
export function loadMapsStage2() {
    //reset location of player
    player.style.top = 325 + 'px';
    player.style.left = 325 + 'px';
    MonsterEvent.style.display = "block";
    //We need a while stageclear = true do this function
    //And we need to use player data to see which stage to load, so for example if stage is   0<stage<5 we use a function between stages 1-5 through a function
    //satte in random number generation funktionen sådana att den skulle komma med i exporten
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    switch (randomIntFromInterval(1, 1)) {
        case 1: //draws 1 possible map of forests map
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(cavemap1, 0, 0, cavemap1.width, cavemap1.height, // source rectangle
            0, 0, canvas.width, canvas.height);
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
    }
}
