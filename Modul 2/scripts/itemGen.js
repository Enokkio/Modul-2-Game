import { flags, saveJSON, sword, helmet, armor } from './updateStats.js';
let userStage = flags.stageNr;
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let Gsword = {
    Name: 'Sword',
    HP: 0,
    STR: Math.ceil(3 ** ((userStage / 10) + 1)),
    DEF: 0,
    SPD: Math.ceil(3 ** ((userStage / 10) + 1)),
};
let Garmor = {
    Name: 'Armor',
    HP: Math.ceil(1.5 ** ((userStage / 10) + 1)),
    STR: Math.ceil(1.5 ** ((userStage / 10) + 1)),
    DEF: Math.ceil(1.5 ** ((userStage / 10) + 1)),
    SPD: Math.ceil(1.5 ** ((userStage / 10) + 1)),
};
let Ghelmet = {
    Name: 'Helmet',
    HP: Math.ceil(3 ** ((userStage / 10) + 1)),
    STR: 0,
    DEF: Math.ceil(3 ** ((userStage / 10) + 1)),
    SPD: 0,
};
function createSword() {
    for (var i = userStage * 3; i > 0; i--) {
        var statChosen = randomIntFromInterval(1, 4);
        switch (statChosen) {
            case 1: {
                Gsword.HP += 5;
                break;
            }
            case 2: {
                Gsword.STR += 1;
                break;
            }
            case 3: {
                Gsword.DEF += 1;
                break;
            }
            case 4: {
                Gsword.SPD += 1;
                break;
            }
        }
    }
    console.log(Gsword);
}
function createArmor() {
    for (var i = userStage * 3; i > 0; i--) {
        var statChosen = randomIntFromInterval(1, 4);
        switch (statChosen) {
            case 1: {
                Garmor.HP += 5;
                break;
            }
            case 2: {
                Garmor.STR += 1;
                break;
            }
            case 3: {
                Garmor.DEF += 1;
                break;
            }
            case 4: {
                Garmor.SPD += 1;
                break;
            }
        }
    }
    console.log(Garmor);
}
function createHelmet() {
    for (var i = userStage * 3; i > 0; i--) {
        var statChosen = randomIntFromInterval(1, 4);
        switch (statChosen) {
            case 1: {
                Ghelmet.HP += 5;
                break;
            }
            case 2: {
                Ghelmet.STR += 1;
                break;
            }
            case 3: {
                Ghelmet.DEF += 1;
                break;
            }
            case 4: {
                Ghelmet.SPD += 1;
                break;
            }
        }
    }
    console.log(Ghelmet);
}
export function createItem() {
    var whatItem = randomIntFromInterval(1, 3);
    switch (whatItem) {
        case 1:
            createSword();
            sword.HP = Gsword.HP;
            sword.STR = Gsword.STR;
            sword.DEF = Gsword.DEF;
            sword.SPD = Gsword.SPD;
            break;
        case 2:
            createArmor();
            armor.HP = Garmor.HP;
            armor.STR = Garmor.STR;
            armor.DEF = Garmor.DEF;
            armor.SPD = Garmor.SPD;
            break;
        case 3:
            createHelmet();
            helmet.HP = Ghelmet.HP;
            helmet.STR = Ghelmet.STR;
            helmet.DEF = Ghelmet.DEF;
            helmet.SPD = Ghelmet.SPD;
            break;
    }
}
createItem();
saveJSON();
