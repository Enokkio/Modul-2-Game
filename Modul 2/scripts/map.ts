//defining all images for the game
const starterTownImg = new Image();
starterTownImg.src ='images/Pallettown.png'

const forestmap1 = new Image();
forestmap1.src = 'images/forest.png';


const cavemap1 = new Image();
cavemap1.src = 'images/pixelCave.png';

//event define boxes
const MonsterEvent = document.querySelector('.monster-event') as HTMLElement;
const StoryEvent = document.querySelector('.story-event') as HTMLElement;



import { changeClearcondition } from "./collision-detection.js";
//import flags to check for stage spawning
 import { flags } from "./updateStats.js";

//defining canvas in script to draw images on it as maps
var canvas : any = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
const player = document.getElementById("player")
ctx.imageSmoothingEnabled = true;

//function to randomize location
function randomizeEventsPos(){
  
  var storyTop = randomIntFromInterval(50,500);
  var storyleft = randomIntFromInterval(50,700);
  var monsterTop = randomIntFromInterval(50,500);
  var monsterleft = randomIntFromInterval(50,700);

  MonsterEvent.style.top = monsterTop + 'px';
  MonsterEvent.style.left = monsterleft + 'px';

console.log(monsterTop)
}

//Define enemy box to restart

//Drawing starterTown image
window.onload = function() {

    ctx.drawImage(
        starterTownImg, 0, 0, starterTownImg.width, starterTownImg.height,     // source rectangle
        0, 0, canvas.width, canvas.height
        );

    
    
}

//define player to reset position later


//Function for creating random numbers
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


  export function loadMapsStage1(){//Exporteras så den kan användas i collission-detection.ts
    //reset location of player
    player.style.top = 325 + 'px' ;
    player.style.left = 325 + 'px' ;
    
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