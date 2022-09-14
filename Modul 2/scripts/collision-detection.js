//import map loading functions
import { loadMapsStage1 } from './map.js';
import { startCombat } from './startCombat.js';
const player = document.getElementById("player");
var coliderOn = true;
export function combatDone() {
    coliderOn = true;
}
setInterval(overlapDetect, 100); //vi gör så att function för collission detectas vare 1sekund
function overlapDetect() {
    if (coliderOn == true) {
        const interactDivs = document.getElementsByClassName("collisionDetect");
        //console.log(interactDivs)
        for (let index = 0; index < interactDivs.length; index++) {
            const eventbox = interactDivs[index].getBoundingClientRect(); //Get bounding info for boxes 
            const playerCOORDS = player.getBoundingClientRect(); //Get bounding info for player
            const xleft = eventbox.left;
            const xright = eventbox.right;
            const ytop = eventbox.top;
            const ybot = eventbox.bottom;
            const playerXleft = playerCOORDS.left;
            const playerXright = playerCOORDS.right;
            const PlayerYtop = playerCOORDS.top;
            const playerYbot = playerCOORDS.bottom;
            //gör så att den checkar även för vilken class
            if (xleft - 45 <= playerXleft && xright + 45 >= playerXright && ybot + 45 >= playerYbot && ytop - 45 <= PlayerYtop && interactDivs[index].classList.contains("next-level")) { //makes bounding info as if it was a cube
                loadMapsStage1(); //loadar en exported function från map.js vilket editas med map.ts    
            }
            if (xleft - 45 <= playerXleft && xright + 45 >= playerXright && ybot + 45 >= playerYbot && ytop - 45 <= PlayerYtop && interactDivs[index].classList.contains("monster-event")) { //makes bounding info as if it was a cube
                startCombat();
                console.log("oh no a monster appared");
                coliderOn = false;
            }
        }
    }
}
