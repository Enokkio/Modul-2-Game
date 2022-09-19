console.log("test");
//clear condition, genom att döda ett mosnter clearar du en stage och kan gå till nästa
import { changeClearcondition } from "./collision-detection.js";

//Gets player action buttons
const attackButton = document.getElementById('Attack');
const blockButton = document.getElementById('Block');
const healButton = document.getElementById('Heal');
const itemsButton = document.getElementById('Items');

//Gets the randomly generated enemy (needs to be updated to generate enemy on demand, inte något du måste göra nu)


//import { enemy } from './enemyGen.js';
import { createEnemy } from './enemyGen.js';

var enemy = createEnemy();

//Gets player (Needs to get saved stats instead of player framework, inte något du måste göra nu)
import { user } from './updateStats.js';
import { endCombat } from './startCombat.js';
import { endGame } from './startCombat.js';



//playerTurn visar om det är spelarens tur eller inte
var playerTurn = null;
// pBlock visar om spelaren har valt "Block", kommer vara true tills spelaren har blockerat en attack, måste sättas till "false" av fienden när fienden attackerar
var pBlock = false;
// maxH är limiten av hur mycket spelaren kan heala, så om dom börjar fighten med 10hp så kan dom inte heala up till 20hp

var maxH = user.HP;

var maxHE = enemy.HP;


// updateStats updaterar spelarens stats på skärmen, MÅSTE KALLAS VARJE GÅNG NÅGOT SOM T.EX HP ÄNDRAS!!
import { updateStats } from './updateStats.js';
// updateStatsE updaterar fiendens stats på skärmen, MÅSTE KALLAS VARJE GÅNG NÅGOT SOM T.EX HP ÄNDRAS!!
import { updateStatsE } from './enemyGen.js';


// Sätter statsen i början av figthen
updateStats();
updateStatsE();

/*
function genrateRandomNumber(min, max)
{

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 

}
*/

// Kollar vem som har högst speed och bestämmer om det är spelarens tur eller inte
function turnDecider() {

    updateStats();
    updateStatsE();

    if (enemy.SPD > user.SPD) {
        playerTurn = false;
        document.getElementById('turnCounter').innerText = enemy.Name + "s Turn";
        enemyAction();
    }
    else if (enemy.SPD <= user.SPD) {
        playerTurn = true;
        document.getElementById('turnCounter').innerText = user.Name + "s Turn";
    }
   
}
turnDecider();

function genrateRandomNumber(min, max)
{

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 

}


function changeTurn() {

        if (playerTurn == null || playerTurn == true) {
            playerTurn = false;
            console.log(playerTurn);
            document.getElementById('turnCounter').innerText = user.Name + "s Turn";
        }
        else {
            playerTurn = true;
            console.log(playerTurn);
            document.getElementById('turnCounter').innerText = user.Name + "s Turn";
        }

}


const arr: number[] = [];
arr.push(2);
arr.unshift(1);

function logger(who, action, amount){

    const el = document.createElement('p')
    const box = document.getElementById('LogBox');
    var other;

    if(who == "enemy")
        other == user.Name;
    else if (who == "player")
        other == enemy.Name;
    else
        other == "error";

    switch(action) { 
        case "attack": { 
            if(who == "player" && pBlock)
            {
                el.textContent = who + ' tried to hit ' + other + " but " + other + " blocked and only took " + amount + " DMG!";
            }
            else if(who == "enemy" && eBlock)
            {
                el.textContent = who + ' tried to hit ' + other + " but " + other + " blocked and only took " + amount + " DMG!";
            }
            else{
                el.textContent = who + ' hit ' + other + " for " + amount + " DMG!";
            }
            
           break; 
        } 
        case "block": { 
            el.textContent = who + ' used block!';
           break; 
        } 
        case "heal": { 
            el.textContent = who + ' healed themselves for ' + amount + " HP!"; 
            break; 
         } 
        default: { 
           //statements; 
           break; 
        } 
     } 

    el.classList.add('log');
    box.insertBefore(el, box.children[0]);


}

//Spelarens Attack function
attackButton.addEventListener('click', function handleClick() {

    if (playerTurn == true && enemy.HP != 0) {
        playerTurn = false;
        console.log('attack clicked ' + enemy.Name + " " + enemy.HP);
        enemy.HP -= user.STR;
        logger("player", "attack", 1)
        updateStatsE();
        changeTurn();
        setTimeout(enemyAction, 1500);
        if (enemy.HP <= 0){
            console.log("Enemy died!");
            changeClearcondition();
            console.log(changeClearcondition)

            endCombat();
        }
    }
    else if (playerTurn == false) {
        console.log("Enemies Turn!");
    }
    else {
        console.log("Enemy is dead!");
        console.log(enemy.HP);
    }


});

//Spelarens block function
blockButton.addEventListener('click', function handleClick() {

    if (playerTurn == true && pBlock == false) {
        playerTurn = false;
        pBlock = true;
        logger("player", "block", 1)
        changeTurn();
        console.log("You will block!");
        setTimeout(enemyAction, 1500);
    }
    else if (playerTurn == false) {
        console.log("Enemies Turn!");
    }
    else {
        console.log("You are already blocking!");
    }
});

//Spelarens heal function
healButton.addEventListener('click', function handleClick() {

    if (playerTurn == true && user.HP != maxH) {
        playerTurn = false;
        console.log('heal clicked');
        user.HP += 1;
        logger("player", "heal", 1)
        updateStats();
        changeTurn();
        setTimeout(enemyAction, 1500);
    }
    else if (playerTurn == false) {
        console.log("Enemies Turn!");
    }
    else {
        console.log("Your health is full!");
    }
});

//Spelarens Items function
itemsButton.addEventListener('click', function handleClick() {

    if (playerTurn == true) {
        changeTurn();
        console.log('items clicked');
    }
    else if (playerTurn == false) {
        console.log("Enemies Turn!");
    }
    else {
        console.log("Your health is full!");
    }

});

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  var eBlock = false;


function enemyAction(){
    const rndInt = randomIntFromInterval(1, 6)
    console.log(rndInt)


    switch(rndInt){
        case 1: 
        case 2:
        case 3:
        { 
            console.log("attack " + rndInt);
            logger("enemy", "attack", 1);
            user.HP -= 1;
            updateStats();
            playerTurn = true;
            if (user.HP <= 0){
                console.log("User died!");
                changeClearcondition();
                console.log(changeClearcondition)
    
                endGame();
            }
            break; 
         } 

         case 4: 
         case 5:
         { 
            console.log("Block " + rndInt);
            if(eBlock){
                console.log("tried to block");
                enemyAction();
            }
            else{
                eBlock = true;
                playerTurn = true;
                logger("enemy", "block", 1);
            }


            break; 
         } 
         case 6: { 
            console.log("Heal " + rndInt);
            logger("enemy", "heal", 1);
            enemy.HP += Math.floor(maxHE * genrateRandomNumber(0.1, 0.25));
            updateStatsE();
            playerTurn = true;
            break; 
         } 


    }
  }
