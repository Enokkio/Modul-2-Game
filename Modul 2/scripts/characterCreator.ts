import { user } from './updateStats.js';

let freestats = 40;

var ptsCounter = document.getElementById('ptsCounter');
var addstats = document.querySelectorAll('.add-stats-buttons');
var substats = document.querySelectorAll('.remove-stats-buttons');

addstats.forEach(function(addstats)
{

    addstats.addEventListener('click', function() 
    {
     var id= addstats.getAttribute("id");

        switch (id) 
        {
            case "SpeedAdd": 
            {
                if (freestats > 0) {
                    freestats--;
                    user.SPD += 1;
                    console.log(user.SPD);

                    let Speed = <HTMLElement>document.querySelector('#SPDs');

                    Speed.innerHTML = "SPD: " + user.SPD;
                    ptsCounter.innerHTML = "Points Available: " + freestats;

                }
                break;
            }
                

            case "StrengthAdd": 
            {
                if (freestats > 0) {
                    freestats--;
                    user.STR += 1;
                    console.log(user.STR);

                    let Strength = <HTMLElement>document.querySelector('#STRs');
                    
                    Strength.innerHTML = "STR: " + user.STR;
                    ptsCounter.innerHTML = "Points Available: " + freestats;
                }
                break;
            }
                
            case "DefenseAdd": {
                if (freestats > 0) {
                    freestats--;
                    user.DEF += 1;
                    console.log(user.DEF);

                    let Defense = <HTMLElement>document.querySelector('#DEFs');

                    Defense.innerHTML = "DEF: " + user.DEF;
                    ptsCounter.innerHTML = "Points Available: " + freestats;
                }
                break;
            }

            case "HealthAdd": {
                if (freestats > 0) {
                    freestats--;
                    user.HP += 1;
                    console.log(user.HP);

                    let Health = <HTMLElement>document.querySelector('#HPs');

                    Health.innerHTML = "HP: " + user.HP;
                    ptsCounter.innerHTML = "Points Available: " + freestats;
                }
                break;
            }
        }
    }
)}
)

substats.forEach(function(substats)
{

    substats.addEventListener('click', function() 
    {
     var id= substats.getAttribute("id");

        switch (id) 
        {
            case "SpeedSub": 
            {
                if (user.SPD != 1) {
                    freestats++;
                    user.SPD -= 1;
                    console.log(user.SPD);

                    let Speed = <HTMLElement>document.querySelector('#SPDs');

                    Speed.innerHTML = "SPD: " + user.SPD;
                    ptsCounter.innerHTML = "Points Available: " + freestats;

                }
                break;
            }
                

            case "StrengthSub": 
            {
                if (user.STR != 1) {
                    freestats++;
                    user.STR -= 1;
                    console.log(user.STR);

                    let Strength = <HTMLElement>document.querySelector('#STRs');

                    Strength.innerHTML = "STR: " + user.STR;
                    ptsCounter.innerHTML = "Points Available: " + freestats;
                }
                break;
            }
                
            case "DefenseSub": {
                if (user.DEF != 1) {
                    freestats++;
                    user.DEF -= 1;
                    console.log(user.DEF);

                    let Defense = <HTMLElement>document.querySelector('#DEFs');

                    Defense.innerHTML = "DEF: " + user.DEF;
                    ptsCounter.innerHTML = "Points Available: " + freestats;
                }
                break;
            }

            case "HealthSub": {
                if (user.HP != 5) {
                    freestats++;
                    user.HP -= 1;
                    console.log(user.HP);

                    let Health = <HTMLElement>document.querySelector('#HPs');

                    Health.innerHTML = "HP: " + user.HP;
                    ptsCounter.innerHTML = "Points Available: " + freestats;
                }
                break;
            }

            
        }
    }
)}
)

import { saveJSON } from './updateStats.js';
import { loadJSON } from './updateStats.js';

var startBtn = document.getElementById('startBtn');
var nameBox = document.getElementById('nameBox') as HTMLInputElement;

startBtn.addEventListener('click', function(){

    user.Name = nameBox.value;
    saveJSON();
    loadJSON();
    console.log(user);
    var ccScreen = document.getElementById('characterCreator');
    ccScreen.style.display = "none";
    console.log("CanMove from CharCreator");
    window.location.reload();

})