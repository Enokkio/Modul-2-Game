export let user = {
    Name: "",
    Level: 1,
    MHP: 5,
    CHP: 5,
    STR: 1,
    DEF: 1,
    SPD: 1,
};
loadJSON();
//console.log(user);
var nameBox = document.getElementById('nameBox');
nameBox.value = user.Name;
export let flags = {
    stageNr: 1,
    karma: 0,
    story1: false,
    story2: false,
    story3: false,
    story4: false,
};
export function saveJSON() {
    localStorage.setItem("user", JSON.stringify(user));
}
// To check if user exists
export function loadJSON() {
    if (localStorage.user == null || localStorage.user == "null") {
        console.log("sav");
        var ccScreen = document.getElementById('characterCreator');
        ccScreen.style.display = "grid";
    }
    else {
        user = JSON.parse(localStorage.getItem("user"));
        localStorage.setItem("user", JSON.stringify(user));
    }
}
updateStats();
export function updateStats() {
    let htmlElems = document.getElementsByClassName("stat-display")[0].children;
    for (let i = 0; i < htmlElems.length; i++) {
        if (i != 2) {
            htmlElems[i].innerHTML = htmlElems[i].id + ": " + user[htmlElems[i].id];
        }
        else {
            htmlElems[i].innerHTML = "HP: " + user.CHP + '/' + user.MHP;
        }
    }
}
export function deleteJSON() {
    localStorage.clear();
}
