//importing functions to save
import { saveJSON } from "./updateStats.js";
import { user } from './updateStats.js';
import { flags } from './updateStats.js';
//import colidor 
import { combatDone } from './collision-detection.js';
//import updatedisplay to update stuff
import { updateDisplay } from './lvlUp.js';
function statyield1(stage) {
    let x = Math.random(); //random integer från 0.55 to 1
    let y = Math.ceil((1.672 * flags.stageNr + 0.4806) * x);
    console.log(x);
    return y;
}
//defines querythings
let innterStoryText = document.querySelector(".story-text-tag");
export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//function to update data
//---------------------------------------Function with loading stories and etc. -----------------------------------------------------------
function updateData() {
    saveJSON();
    var storydiv = document.querySelector('.storydiv');
    combatDone();
    updateDisplay();
    storydiv.style.display = "none";
}
//Needed empty function
//--------------------------------------------------------------------Functions for stories to med loaded into function random story. -----------------------------------------------------------
//--------------------------------------------------------------------Loading of commons stories -----------------------------------------------------------
function loadcommonstory() {
    let button1 = document.querySelector(".buttonYES");
    var allcommon = [];
    let x = statyield1(flags.stageNr);
    let y = statyield1(flags.stageNr);
    var commonstories = {
        HelpEnok: { title: "help Enok", storytext: `Help an Enok in need of code \n `,
            option1() {
                updateData();
                user.HP -= x;
                flags.karma += y;
                console.log(user);
                console.log("you have clicked the yes button");
            },
            option2() {
                updateData();
            }
        },
        HelpCelvin: { title: "help celvin", storytext: `Help an Celvin in need of code \n `,
            option1() {
                updateData();
                user.HP += x;
                flags.karma += y;
                console.log(user);
            },
            option2() {
                updateData();
            }
        },
        StealFromOrphans: { title: "No Orphans alive", storytext: `Steal from some orphans \n `,
            option1() {
                updateData();
                user.HP += 10;
                flags.karma -= 20;
                console.log(user);
            },
            option2() {
                updateData();
            }
        },
    };
    for (var key in commonstories) { //Each object in the object common stories is a key. So  We are telling it to att each key in commonstories to allcommon
        allcommon.push(commonstories[key]);
    }
    console.log("common story");
    let b = getRndInteger(0, allcommon.length);
    innterStoryText.innerHTML = allcommon[b].storytext;
    document.getElementById('button1').onclick = function () {
        console.log("hello");
        console.log(allcommon[b].option1);
        allcommon[b].option1();
    };
    document.getElementById('button2').onclick = function () {
        console.log("hello");
        console.log(allcommon[b].option2);
        allcommon[b].option2();
    };
}
//--------------------------------------------------------------------Loading of rare stories -----------------------------------------------------------
function loadRareStories() {
    let button1 = document.querySelector(".buttonYES");
    var allRares = [];
    let x = statyield1(flags.stageNr);
    let y = statyield1(flags.stageNr);
    var rareStories = {
        HelpJonte: { title: "help Enok", storytext: `Jonte is in need of code help him? \n `,
            option1() {
                updateData();
                user.HP += x;
                flags.karma += y;
                console.log(user);
                console.log("you have clicked the yes button");
            },
            option2() {
                updateData();
            }
        },
    };
    for (var key in rareStories) { //Each object in the object common stories is a key. So  We are telling it to att each key in commonstories to allcommon
        allRares.push(rareStories[key]);
    }
    console.log("rare story");
    let b = getRndInteger(0, allRares.length);
    innterStoryText.innerHTML = allRares[b].storytext;
    document.getElementById('button1').onclick = function () {
        console.log("hello");
        console.log(allRares[b].option1);
        allRares[b].option1();
    };
    document.getElementById('button2').onclick = function () {
        console.log("hello");
        console.log(allRares[b].option2);
        allRares[b].option2();
    };
}
//--------------------------------------------------------------------Loading of epic stories -----------------------------------------------------------
function loadEpicStories() {
    let button1 = document.querySelector(".buttonYES");
    var allEpics = [];
    let x = statyield1(flags.stageNr);
    let y = statyield1(flags.stageNr);
    var epicStories = {
        HelpDan: { title: "help Dan", storytext: `Dan would like some help with code \n`,
            option1() {
                updateData();
                user.HP += x;
                flags.karma += y;
                console.log(user);
                console.log("you have clicked the yes button");
            },
            option2() {
                updateData();
            }
        },
    };
    for (var key in epicStories) { //Each object in the object common stories is a key. So  We are telling it to att each key in commonstories to allcommon
        allEpics.push(epicStories[key]);
    }
    console.log("epic story");
    let b = getRndInteger(0, allEpics.length);
    innterStoryText.innerHTML = allEpics[b].storytext;
    document.getElementById('button1').onclick = function () {
        console.log("hello");
        console.log(allEpics[b].option1);
        allEpics[b].option1();
    };
    document.getElementById('button2').onclick = function () {
        console.log("hello");
        console.log(allEpics[b].option2);
        allEpics[b].option2();
    };
}
//--------------------------------------------------------------------Loading of mythic stories -----------------------------------------------------------
function loadMythicStories() {
    let button1 = document.querySelector(".buttonYES");
    var allMythics = [];
    let x = statyield1(flags.stageNr);
    let y = statyield1(flags.stageNr);
    var mythicStories = {
        HelpFabian: { title: "help Fabian", storytext: `Suprisingly Fabian needs help with some code \n`,
            option1() {
                user.HP += x;
                flags.karma += y;
                console.log(user);
                console.log("you have clicked the yes button");
                updateData();
            },
            option2() {
                updateData();
            }
        },
    };
    for (var key in mythicStories) { //Each object in the object common stories is a key. So  We are telling it to att each key in commonstories to allcommon
        allMythics.push(allMythics[key]);
    }
    console.log("mythic story");
    let b = getRndInteger(0, allMythics.length);
    innterStoryText.innerHTML = allMythics[b].storytext;
    document.getElementById('button1').onclick = function () {
        console.log("hello");
        console.log(allMythics[b].option1);
        allMythics[b].option1();
    };
    document.getElementById('button2').onclick = function () {
        console.log("hello");
        console.log(allMythics[b].option2);
        allMythics[b].option2();
    };
}
//--------------------------------------------------------------------To load stories in collision detection -----------------------------------------------------------
export function Randomstory() {
    var storydiv = document.querySelector('.storydiv');
    storydiv.style.display = "block";
    var storybox = document.querySelector('.story-event');
    storybox.style.display = "none";
    let chance = Math.random() * 100;
    if (chance <= 65) {
        console.log("common");
        loadcommonstory();
    }
    else if (chance <= 90) {
        console.log("rare story");
        loadRareStories();
    }
    else if (chance <= 99) {
        console.log("epic");
        loadEpicStories();
    }
    else if (chance <= 100) {
        console.log("myth");
        loadMythicStories();
    }
}
