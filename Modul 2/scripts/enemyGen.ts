class Enemy
{
    Name: string;
    Level: number;
    HP: number;
    STR: number;
    DEF: number;
    SPD: number;
    XpRew: Number;

    constructor(Name: string, Level: number, Health: number, Strength: number, Defense: number, Speed: number, XpRew: Number){
        
        this.Name = Name;
        this.Level = Level;
        this.HP = Health;
        this.STR = Strength;
        this.DEF = Defense;
        this.SPD = Speed;
        this.XpRew = XpRew;
    }
}

  //Forest enemies

  export var enemy = new Enemy("", 0, 0, 0, 0, 0, 0);
  let ForestMobs: string[] = ["wolf", "forestGuy", "spider"];

function genrateRandomNumber(min, max)
{

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 

}

import { flags } from './updateStats.js';

export function createEnemy()
{
    console.log("Creating enemy!");
    var enemyInd = genrateRandomNumber(0,2);
    enemy.Name = ForestMobs[enemyInd];

    enemy.Level = genrateRandomNumber(flags.stageNr - 1, flags.stageNr + 1);
    if(enemy.Level < 1)
        enemy.Level = 1;

    enemy.HP = 5;
    enemy.STR = 1;
    enemy.DEF = 1;
    enemy.SPD = 1;

    for(var i = enemy.Level * 3; i > 0; i--)
    {

       var statChosen = genrateRandomNumber(1,4);
        switch (statChosen) {

            case 1:{
                enemy.HP += 5;
                break;
            }
            case 2:{
                enemy.STR += 1;
                break;
            }
            case 3:{
                enemy.DEF += 1;
                break;
            }
            case 4:{
                enemy.SPD += 1;
                break;
            }

        }
    }
    
    return enemy;

}



export function updateStatsE() {
    let htmlElems = document.getElementsByClassName("Estat-display")[0].children
    for (let i = 0; i < htmlElems.length; i++) {
        htmlElems[i].innerHTML = htmlElems[i].id + ": "+ enemy[htmlElems[i].id];
    }
    
}