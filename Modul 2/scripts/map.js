//defining all images for the game
const starterTownImg = new Image();
starterTownImg.src = 'images/Pallettown.png';
const forestmap1 = new Image();
forestmap1.src = 'images/forest.png';
//defining canvas in script to draw images on it as maps
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
const player = document.getElementById("player");
ctx.imageSmoothingEnabled = true;
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
    //We need a while stageclear = true do this function
    //And we need to use player data to see which stage to load, so for example if stage is   0<stage<5 we use a function between stages 1-5 through a function
    //satte in random number generation funktionen sådana att den skulle komma med i exporten
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    switch (randomIntFromInterval(1, 2)) {
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
