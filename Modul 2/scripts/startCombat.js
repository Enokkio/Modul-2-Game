var combatScreen = document.getElementById("window");
var Incombat;
const player = document.getElementById("player");
var playTop;
var playLeft;
function savePP() {
    playTop = player.style.top;
    playLeft = player.style.left;
}
function loadPP() {
    player.style.top = playTop;
    player.style.left = playLeft;
}
//Import enemy generator to call it when combat starts
import { createEnemy } from './enemyGen.js';
import { combatDone } from './collision-detection.js';
import { deleteJSON } from './updateStats.js';
import { updateDisplay } from './lvlUp.js';
export function startCombat() {
    Incombat = true;
    savePP();
    createEnemy();
    document.getElementById('player').style.display = "none";
    combatScreen.style.display = "initial";
}
export function endCombat() {
    Incombat = true;
    loadPP();
    combatDone();
    document.getElementById('player').style.display = "initial";
    document.getElementById('monster-event').style.display = "none";
    combatScreen.style.display = "none";
}
export function endGame() {
    document.getElementById('window').style.display = "none";
    document.getElementById('deathScreen').style.display = "initial";
    deleteJSON();
}
export function lvlUp() {
    document.getElementById('lvlUpScreen').style.display = "initial";
    updateDisplay();
}
