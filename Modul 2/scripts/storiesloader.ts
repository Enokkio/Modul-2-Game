//importing functions to save
import { saveJSON } from "./updateStats.js";
import { updateStats } from './updateStats.js';
import { user } from './updateStats.js';
import { flags } from './updateStats.js';
//import colidor 
import { combatDone} from './collision-detection.js'
import { changeClearcondition} from './collision-detection.js'
import { endGame } from './startCombat.js'

//import updatedisplay to update stuff
import {updateDisplay} from './lvlUp.js'
function statyield1(stage) {
    let x = Math.random()+0.3;//random integer från 0.3 to 1
    
    let y = Math.ceil((1.672 *flags.stageNr+ 0.4806)*x)
    console.log(x)
    return y;
  }
  
//defines querythings
  let innterStoryText = document.querySelector(".story-text-tag");
  let titleText = document.querySelector(".story-title-tag");


  
  
  
  export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
function hideStorydiv(){
  var storydiv = <HTMLElement>document.querySelector('.storydiv');
  storydiv.style.display = "none"

}
  //function to update data
  //---------------------------------------Function with loading stories and etc. -----------------------------------------------------------
  function updateData() {
    saveJSON();
    combatDone();
    hideStorydiv();
console.log("Im updating at the wrong time")

}
function buttonDisplaChange(){
  let button1 = document.querySelector(".buttonYES") as HTMLElement;
  let button2 = document.querySelector(".buttonNO") as HTMLElement;
  button1.style.visibility = "hidden"
  button2.style.visibility = "hidden"
}
//Needed empty function



  //--------------------------------------------------------------------Functions for stories to med loaded into function random story. -----------------------------------------------------------
          //--------------------------------------------------------------------Loading of commons stories -----------------------------------------------------------

  function loadcommonstory(){

    let button1 = document.querySelector(".buttonYES") as HTMLElement;
    let button2 = document.querySelector(".buttonNO") as HTMLElement;

    var allcommon = [];  
  
    let x=statyield1(flags.stageNr)
    let y=statyield1(flags.stageNr)
    var commonstories = {
      helpoldman: { title: "Help an old man", storytext: `An old man is struggling with walking, help him?\n `,
          option1() {
      
            buttonDisplaChange();
            let z = Math.random() *100;
            console.log(z)

            if (z <=  20) {
              user.CHP -= (x+5);
              flags.karma += 10;
              console.log(user);
              
              innterStoryText.innerHTML = `The old man stabbed you, and you lost ${x+5} HP`;
              if (user.CHP <=0) {
  
                setTimeout(hideStorydiv, 3000)
                endGame();
              }
            }
            else if(z <=100){
              innterStoryText.innerHTML = `The old man thanks you`;
              flags.karma += 10;
              setTimeout(updateData, 3000)
            }

          
              
          },
          option2(){
            updateData();

          }
         },
      StealFromOrphans: { title: "Unflattering thievery", storytext: `Steal food from some orphans \n `,
          option1() {

              user.MHP += 10;
              flags.karma -= 20;
              console.log(user);
              updateData();

              
          },
          option2(){
            updateData();
          }
        },
          StrangeFood: { title: "A strange looking apple appeared", storytext: `Do you wish to consume it? \n `,
          option1() {
            buttonDisplaChange();
            let z = Math.random() *100;
            if (z <= 10) {
              innterStoryText.innerHTML = `the apple was quite delicious \n Healed for ${x}`;
              user.CHP +=x;
              flags.deliciousApple = true;
              setTimeout(updateData, 3000)


            }
            else
            {
              innterStoryText.innerHTML = `That was a horrid tasting apple \n Lost ${x} HP`;

              user.CHP -=x*100;
              flags.horridApple = true;
              if (user.CHP<=0) {
                setTimeout(hideStorydiv,3000)
                endGame();
              }


            }

              
          },
          option2(){
            updateData();
          }
          
        },
     
    };
    
    
    for (var key in commonstories) { //Each object in the object common stories is a key. So  We are telling it to att each key in commonstories to allcommon
        allcommon.push(commonstories[key]);
    }
  
    console.log("common story");
    let b = getRndInteger(0, allcommon.length);
    titleText.innerHTML = allcommon[b].title;
    innterStoryText.innerHTML = allcommon[b].storytext;
    document.getElementById('button1').onclick = function(){
      console.log("hello")
      console.log(allcommon[b].option1)

      allcommon[b].option1();
  }

  document.getElementById('button2').onclick = function(){
    console.log("hello")
    console.log(allcommon[b].option2)
    allcommon[b].option2();
}
  }
  
          //--------------------------------------------------------------------Loading of rare stories -----------------------------------------------------------

  function loadRareStories(){

    let button1 = document.querySelector(".buttonYES") as HTMLElement;
    let button2 = document.querySelector(".buttonNO") as HTMLElement;

    var allRares = [];  
  
    let x=statyield1(flags.stageNr)
    let y=statyield1(flags.stageNr)
    var rareStories = {

      HelpJonte: { title: "", storytext: `Jonte is in need of code help him? \n `,
          option1() {
            buttonDisplaChange()
              user.MHP += Math.ceil(x);
              flags.karma += Math.ceil(y);
              console.log(user);
              console.log("you have clicked the yes button");
              updateData();

          },
          option2(){
            updateData();
          },


          RawChicken: { title: "Someones favorite food", storytext: `Upon your journey you get offered some raw chicken, wanna try? \n `,
          option1() {
            buttonDisplaChange();
            let z = Math.random() *100;
            if (z <= 20) {
              innterStoryText.innerHTML = `Chicken = protenin, Protein = Strength \n Gained ${Math.ceil(x)}`;
              user.STR+=Math.ceil(x);
              flags.ChickenEater = true;

              setTimeout(updateData, 3000)

            }
            else
            {
              innterStoryText.innerHTML = `Nex time someone offers you raw chicken you should question yourself if you eat it \n lost ${Math.ceil(x)}`;

              user.CHP -=Math.ceil(x);
              flags.Foodpoisoning = true;
              if (user.CHP <=0) {
                setTimeout(hideStorydiv,3000)
                endGame();
              }


            }

              
          },
          option2(){
            updateData();
          }
         },    
    }
  };
    
    
  
    for (var key in rareStories) { //Each object in the object common stories is a key. So  We are telling it to att each key in commonstories to allcommon
        allRares.push(rareStories[key]);
    }
  
    console.log("rare story");
    let b = getRndInteger(0, allRares.length);
    titleText.innerHTML = allRares[b].title;
    innterStoryText.innerHTML = allRares[b].storytext;
    document.getElementById('button1').onclick = function(){
      console.log("hello")
      console.log(allRares[b].option1)

      allRares[b].option1();
  }

  document.getElementById('button2').onclick = function(){
    console.log("hello")
    console.log(allRares[b].option2)
    allRares[b].option2();
}
  }

            //--------------------------------------------------------------------Loading of epic stories -----------------------------------------------------------


  function loadEpicStories(){

    let button1 = document.querySelector(".buttonYES") as HTMLElement;
    let button2 = document.querySelector(".buttonNO") as HTMLElement;

    var allEpics = [];  
  
    let x=statyield1(flags.stageNr)
    let y=statyield1(flags.stageNr)
    var epicStories = {

         FindingTreasure: { title: "The classic Treasure", storytext: `You've found a treasure chest, do you wish to open it?\n`,
         option1() {

          //Run Random item generation script
        updateData();           

         },
         option2(){
           updateData();
         }
         },
         WagyuCow: { title: "Delicious Meat", storytext: `You've stumbled upon a fat cow and feel quite hungry, wanna go for a hunt? \n`,
         option1() {
          let z = Math.random() *100;
          if (z <= 80) {
            let b =Math.random() *100;
            innterStoryText.innerHTML = `You've succesfully hunted a cow \n`
            if (b <= 95) {
              innterStoryText.innerHTML += ' and you cooked it succesfully \n healed for max HP';
              user.CHP = user.MHP;
              buttonDisplaChange();

            }
            else{
              innterStoryText.innerHTML += ' But you succesfully managed to burn the meat when cooking it';
              buttonDisplaChange();
            }
          }
          else if ( z <= 90)
          {
            innterStoryText.innerHTML = `Failed to capture a ccow i see\n`
            buttonDisplaChange();
          }
          else if ( z <= 100)
          {
            innterStoryText.innerHTML = `You broke your arm when you fell while hunting the cow \n lost permanent 10% HP`
            user.MHP -= Math.ceil(user.MHP*0.1)
            buttonDisplaChange();
          }
          
          setTimeout(updateData,3000)
                   

         },
         option2(){
           updateData();
         }
         },
    };
    
    
  
    for (var key in epicStories) { //Each object in the object common stories is a key. So  We are telling it to att each key in commonstories to allcommon
        allEpics.push(epicStories[key]);
    }
  
    console.log("epic story");
    let b = getRndInteger(0, allEpics.length);
    titleText.innerHTML = allEpics[b].title;
    innterStoryText.innerHTML = allEpics[b].storytext;
    document.getElementById('button1').onclick = function(){
      console.log("hello")
      console.log(allEpics[b].option1)

      allEpics[b].option1();
  }
  document.getElementById('button2').onclick = function(){
    console.log("hello")
    console.log(allEpics[b].option2)
    allEpics[b].option2();
}

  }


  //--------------------------------------------------------------------Loading of mythic stories -----------------------------------------------------------


  function loadMythicStories(){

  let button1 = document.querySelector(".buttonYES") as HTMLElement;
  let button2 = document.querySelector(".buttonNO") as HTMLElement;


    var allMythics = [];
  
  
    let x=statyield1(flags.stageNr)
    let y=statyield1(flags.stageNr)
    var mythicStories = {

       CardGame: { title: "A Game Of Cards", storytext: `A groud of strangers appears in front of you and invites you to a game of cards. Do you wish to join them?  \n`,
      option1() {
      
        buttonDisplaChange();
        let z = Math.random() *100;
        console.log(z)

        if (z <=  80) {
          console.log(user);
          
          innterStoryText.innerHTML = `While you didn't win the game was quite relaxing \n You become fully healed ` ;
          user.CHP = user.MHP;
        }
        else if(z <= 100){
          innterStoryText.innerHTML = "After an intense game you somehow come out on top \n You get a 15% STR increase ";
          user.STR = Math.ceil(user.STR*1.15)
        }
          


          setTimeout(updateData, 3000)
      },
      option2(){
        updateData();

      }
        }, 
        DevilsDeal: { title: "A deal with the  Devil", storytext: `The Devil has watched your journey and offers you a deal, 90% of your HP in exchange for great power. Do you wish to take the deal?  \n`,
        option1() {
        
          buttonDisplaChange();
          let z = Math.random() *100;
          console.log(z)
  
          if (z <=  99.9) {
            console.log(user);
            
            innterStoryText.innerHTML = `Taking the deal with the devil doubled your strength in exchange for ${user.MHP*0.9}` ;
            user.MHP = Math.ceil(user.MHP*0.1);
            user.STR = Math.ceil(user.STR*2);
            flags.DevilsDeal = true;
          }
          else if(z <= 100){
            innterStoryText.innerHTML = "the Devil is engraged as the odds are with you, you tricked even the devil, getting you 50% strength at no cost.";
            user.STR = Math.floor(user.STR*1.50)
          }
            
  
  
            setTimeout(updateData, 3000)
        },
        option2(){
          updateData();
  
        }
      },
      StatueOfDivnity: { title: "A statue of divinity", storytext: `You see a statue with divine radiance, do you wish to give your HP to it?\n`,
        option1() {
        
          buttonDisplaChange();
  
  
          if (flags.karma > 0) {
            console.log(user);
            
            innterStoryText.innerHTML = `The statue blesses you with a minor increase in all stats,` ;
            user.MHP = Math.ceil(user.MHP*1.1);
            user.STR = Math.ceil(user.STR*1.1);
            user.SPD = Math.ceil(user.SPD*1.1);
            user.DEF = Math.ceil(user.DEF*1.1);
            
            
          }
          else if(flags.karma > 300){
            innterStoryText.innerHTML = "The statue blesses your with a greater blessing due to your good karm, and you get fully healed";
            user.MHP = Math.ceil(user.MHP*1.2);
            user.STR = Math.ceil(user.STR*1.2);
            user.SPD = Math.ceil(user.SPD*1.2);
            user.DEF = Math.ceil(user.DEF*1.2);        
            user.CHP = user.MHP;
            flags.HolyWarrior = true;
            }
            else if (flags.karma<=0){

              innterStoryText.innerHTML = "The statue gives no reaction";


            }
            else if (flags.karma<=-100){

              innterStoryText.innerHTML = "The statue gives takes 20% HP for your bad karma ";
              user.MHP = user.MHP*0.8;


            }
            
  
  
            setTimeout(updateData, 3000)
        },
        option2(){
          updateData();
  
        }
      }
    };
    
    
  
    for (var key in mythicStories) { //Each object in the object common stories is a key. So  We are telling it to att each key in commonstories to allcommon
        allMythics.push(allMythics[key]);
    }
  
    console.log("mythic story");
    let b = getRndInteger(0, allMythics.length);
    innterStoryText.innerHTML = allMythics[b].storytext;
    titleText.innerHTML = allMythics[b].title;

    document.getElementById('button1').onclick = function(){
      console.log("hello")
      console.log(allMythics[b].option1)

      allMythics[b].option1();
  }
    document.getElementById('button2').onclick = function(){
      console.log("hello")
      console.log(allMythics[b].option2)
      allMythics[b].option2();
}
    }

  




              
 //--------------------------------------------------------------------To load stories in collision detection -----------------------------------------------------------
 export function Randomstory() {
   
    var storydiv = <HTMLElement>document.querySelector('.storydiv');
    storydiv.style.display = "block"

    var storybox = <HTMLElement>document.querySelector('.story-event');
    storybox.style.display = "none"

  let button1 = document.querySelector(".buttonYES") as HTMLElement;
  let button2 = document.querySelector(".buttonNO") as HTMLElement;
  

  button1.style.visibility = "visible";
  button2.style.visibility = "visible";
  button1.style.display = "block";
  button2.style.display = "block";

   let chance = Math.random() *100;
   if (chance <=65) {

     console.log("common") 
     loadcommonstory();
     
 
   }
   else if (chance <= 90) {
       console.log("rare story");
       loadRareStories();
 
   }
   else if (chance <= 99) {
    console.log("epic") 

        loadEpicStories();
    }

   else if (chance <= 100) {
    console.log("myth") 

       loadMythicStories();
   }
 }