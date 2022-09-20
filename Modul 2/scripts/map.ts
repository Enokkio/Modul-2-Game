//defining all images for the game
const starterTownImg = new Image();
starterTownImg.src ='images/Pallettown.png'

const forestmap1 = new Image();
forestmap1.src = 'images/forest.png';


const cavemap1 = new Image();
cavemap1.src = 'images/pixelCave.png';

//event define boxes
var MonsterEvent = document.querySelector('.monster-event') as HTMLElement;
var NextLevel = document.querySelector('.next-level') as HTMLElement;
var StoryEvent = document.querySelector('.story-event') as HTMLElement;

//define self collission
// function overlaps() {
//   var rect1 = NextLevel.getBoundingClientRect();
//   var rect2 = MonsterEvent.getBoundingClientRect();
//   var isInHoriztonalBounds =
//     rect1.x < rect2.x + rect2.width +100 && 100 +rect1.x + rect1.width > rect2.x;
//   var isInVerticalBounds =
//     rect1.y < rect2.y + rect2.height + 100 && rect1.y + rect1.height + 100 > rect2.y;
//   var isOverlapping = isInHoriztonalBounds && isInVerticalBounds;
//   var istrueoverlap = xleft -80 <= monsterXleft && xright +80 >= monsterXright && ybot +80>= monsterYbot && ytop-80 <= monsterYtop
//  var xleft = parseInt(StoryEvent.style.left);
//   var xright = parseInt(StoryEvent.style.right);
//   var ybot = parseInt(StoryEvent.style.bottom);
//   var ytop = parseInt(StoryEvent.style.top);

//   var monsterXleft = parseInt(MonsterEvent.style.left);
//   var monsterXright = parseInt(MonsterEvent.style.right);
//   var monsterYbot = parseInt(MonsterEvent.style.bottom);
//   var monsterYtop = parseInt(MonsterEvent.style.top);

//   return istrueoverlap;


// }


//-----------------------------------------------------------CODE FOR SELFDETECTION BAD NAMING BE WARNED ASK ENOK FOR INFO----------------------------------------------------------------------------------------------------------------------
//randompositionning
function randompos(){
MonsterEvent.style.left = randomIntFromInterval(100,600) + 'px';
MonsterEvent.style.top = randomIntFromInterval(75,300) + 'px';

StoryEvent.style.left = randomIntFromInterval(100,600) + 'px';

StoryEvent.style.top = randomIntFromInterval(75,300) + 'px';
colideron = true;


}

let colideron = true;

overlapDetectself();
//self collision checker
function overlapDetectself(){
  randompos();
  if(colideron == true){
  let interactDivs = document.querySelector(".monster-event")
  let interactDivs2 = document.querySelector(".story-event")

  //console.log(interactDivs)

for (let index = 0; index < 1; index++) {

  let eventbox = interactDivs.getBoundingClientRect();//Get bounding info for boxes 
  let eventbox2 = interactDivs2.getBoundingClientRect();//Get bounding info for player

  let xleft = eventbox.left ;
  let xright = eventbox.right ;
  let ytop = eventbox.top ;
  const ybot = eventbox.bottom ;

  let playerXleft = eventbox2.left;
  let playerXright = eventbox2.right;
  let PlayerYtop = eventbox2.top;
  let playerYbot = eventbox2.bottom;
                                                                                                                           //gör så att den checkar även för vilken class
  if (xleft -45 <= playerXleft && xright +45 >= playerXright && ybot +45>= playerYbot && ytop-45 <= PlayerYtop && colideron == true ) 
  {
    console.log("they are doing da thing");
    randompos();

  }
  else{
    console.log(colideron)
    colideron = false;
    console.log(colideron)

    console.log("I am happening")
  }
}}}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

import { changeClearcondition } from "./collision-detection.js";

//import flags to check for story spawning
 import { flags } from "./updateStats.js";

//defining canvas in script to draw images on it as maps
var canvas : any = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
const player = document.getElementById("player")
ctx.imageSmoothingEnabled = true;

//Define enemy box to restart

//Drawing starterTown image
window.onload = function() {

    ctx.drawImage(
        starterTownImg, 0, 0, starterTownImg.width, starterTownImg.height,     // source rectangle
        0, 0, canvas.width, canvas.height
        );

    
    
}

//function to load eventboxes
function loadboxes(){
  StoryEvent.style.display = "block";
  MonsterEvent.style.display = "block";

}

function uponloadOfStage(){

  loadboxes();
  overlapDetectself(); //to detect overlap between randoms pos

}

//Function for creating random numbers
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }



  export function loadMapsStage1(){//Exporteras så den kan användas i collission-detection.ts
    //reset location of player
    player.style.top = 325 + 'px' ;
    player.style.left = 325 + 'px' ;
    colideron = true;
    

uponloadOfStage();    
    //We need a while stageclear = true do this function
    //And we need to use player data to see which stage to load, so for example if stage is   0<stage<5 we use a function between stages 1-5 through a function
    //satte in random number generation funktionen sådana att den skulle komma med i exporten
    function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
          }
    
    
        switch(randomIntFromInterval(1, 1)){
    
            case 1://draws 1 possible map of forests map
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(
                    forestmap1, 0, 0, forestmap1.width, forestmap1.height,     // source rectangle
                    0, 0, canvas.width, canvas.height
                    );
    
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

export function loadMapsStage2(){//Exporteras så den kan användas i collission-detection.ts
//reset location of player
player.style.top = 325 + 'px' ;
player.style.left = 325 + 'px' ;


uponloadOfStage();    
StoryEvent.style.display = "block";

MonsterEvent.style.display = "block";

//We need a while stageclear = true do this function
//And we need to use player data to see which stage to load, so for example if stage is   0<stage<5 we use a function between stages 1-5 through a function
//satte in random number generation funktionen sådana att den skulle komma med i exporten
function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }


    switch(randomIntFromInterval(1, 1)){

        case 1://draws 1 possible map of forests map
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
                cavemap1, 0, 0, cavemap1.width, cavemap1.height,     // source rectangle
                0, 0, canvas.width, canvas.height
                );

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
