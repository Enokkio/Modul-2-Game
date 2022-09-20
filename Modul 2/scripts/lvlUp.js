import { user } from './updateStats.js';
let freestats = 5;
var minHP = user.HP;
var minDef = user.DEF;
var minStr = user.STR;
var minSpd = user.SPD;
let Speed = document.querySelector('#SPDs2');
let Strength = document.querySelector('#STRs2');
let Defense = document.querySelector('#DEFs2');
let Health = document.querySelector('#HPs2');
var ptsCounter = document.getElementById('ptsCounter2');
var addstats = document.querySelectorAll('.add-stats-buttons');
var substats = document.querySelectorAll('.remove-stats-buttons');
export function updateDisplay() {
    Speed.innerHTML = ("SPD: ") + String(user.SPD);
    Defense.innerHTML = ("DEF: ") + String(user.DEF);
    Strength.innerHTML = ("STR: ") + String(user.STR);
    Health.innerHTML = ("HP: ") + String(user.HP);
    ptsCounter.innerHTML = "Points Available: " + freestats;
}
addstats.forEach(function (addstats) {
    addstats.addEventListener('click', function () {
        var id = addstats.getAttribute("id");
        switch (id) {
            case "SpeedAdd2":
                {
                    if (freestats > 0) {
                        freestats--;
                        user.SPD += 1;
                        console.log(user.SPD);
                        Speed.innerHTML = "SPD: " + user.SPD;
                        ptsCounter.innerHTML = "Points Available: " + freestats;
                    }
                    break;
                }
            case "StrengthAdd2":
                {
                    if (freestats > 0) {
                        freestats--;
                        user.STR += 1;
                        console.log(user.STR);
                        Strength.innerHTML = "STR: " + user.STR;
                        ptsCounter.innerHTML = "Points Available: " + freestats;
                    }
                    break;
                }
            case "DefenseAdd2": {
                if (freestats > 0) {
                    freestats--;
                    user.DEF += 1;
                    console.log(user.DEF);
                    Defense.innerHTML = "DEF: " + user.DEF;
                    ptsCounter.innerHTML = "Points Available: " + freestats;
                }
                break;
            }
            case "HealthAdd2": {
                if (freestats > 0) {
                    freestats--;
                    user.HP += 1;
                    console.log(user.HP);
                    Health.innerHTML = "HP: " + user.HP;
                    ptsCounter.innerHTML = "Points Available: " + freestats;
                }
                break;
            }
        }
    });
});
substats.forEach(function (substats) {
    substats.addEventListener('click', function () {
        var id = substats.getAttribute("id");
        switch (id) {
            case "SpeedSub2":
                {
                    if (user.SPD != minSpd) {
                        freestats++;
                        user.SPD -= 1;
                        console.log(user.SPD);
                        let Speed = document.querySelector('#SPDs2');
                        Speed.innerHTML = "SPD: " + user.SPD;
                        ptsCounter.innerHTML = "Points Available: " + freestats;
                    }
                    break;
                }
            case "StrengthSub2":
                {
                    if (user.STR != minStr) {
                        freestats++;
                        user.STR -= 1;
                        console.log(user.STR);
                        let Strength = document.querySelector('#STRs2');
                        Strength.innerHTML = "STR: " + user.STR;
                        ptsCounter.innerHTML = "Points Available: " + freestats;
                    }
                    break;
                }
            case "DefenseSub2": {
                if (user.DEF != minDef) {
                    freestats++;
                    user.DEF -= 1;
                    console.log(user.DEF);
                    let Defense = document.querySelector('#DEFs2');
                    Defense.innerHTML = "DEF: " + user.DEF;
                    ptsCounter.innerHTML = "Points Available: " + freestats;
                }
                break;
            }
            case "HealthSub2": {
                if (user.HP != minHP) {
                    freestats++;
                    user.HP -= 1;
                    console.log(user.HP);
                    let Health = document.querySelector('#HPs2');
                    Health.innerHTML = "HP: " + user.HP;
                    ptsCounter.innerHTML = "Points Available: " + freestats;
                }
                break;
            }
        }
    });
});
import { saveJSON } from './updateStats.js';
import { loadJSON } from './updateStats.js';
var continueBtn = document.getElementById('continueBtn');
continueBtn.addEventListener('click', function () {
    if (freestats == 0) {
        saveJSON();
        loadJSON();
        console.log(user);
        var ccScreen = document.getElementById('lvlUpScreen');
        ccScreen.style.display = "none";
        console.log("CanMove from CharCreator");
        freestats = 5;
    }
    else {
        alert("SPEND ALL POINTS!");
    }
});
