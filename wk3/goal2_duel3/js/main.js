/*
 Matthew Bathurst
 Programming for Web Applications I - Online
 Instructor: Fialishia OLoughlin
 Assignment: Week #3 :: { Homework } - THE DUEL #3 
file: main.js


 */

(function(){
   
    //variable objects for fighter 1 "godzilla"
    var fighterOne = {
        name : "Godzilla",
        health : 100, 
        maxDamage : 50,
        minDamage : 25
    };
    // variable object for figheter 2 "megallon"
    var fighterTwo = {
        name : "Megallon", 
        health : 100, 
        maxDamage : 50,
        minDamage : 25
    };

    var round = 1;
    // var document object for the main 4 items in the html file
    var dom = {
        fighter1_txt : document.getElementById('godzilla'),
        fighter2_txt : document.getElementById('megallon'),
        round : document.getElementById('round'),
        button : document.getElementById('fight_btn')
    };

 

dom.button.addEventListener('click', fight, false);

function fight(){
                // Random Damage done per click
                var damageFighterOne = Math.floor(Math.random()*(fighterOne.maxDamage-fighterOne.minDamage)+fighterOne.minDamage);
                var damageFighterTwo = Math.floor(Math.random()*(fighterTwo.maxDamage-fighterTwo.minDamage)+fighterTwo.minDamage);

                //Damage Inflicted and Recorded per round
                fighterOne.health-=damageFighterTwo;
                fighterTwo.health-=damageFighterOne;

            //condintional statement that defines the outcome of every click if round >10 then fight is done, and no more clicks, if a fighter is dead or both are dead no more clicks 
            if(round > 10){
                dom.round.innerHTML = "<p> The Fighters: " + fighterOne.name + " and " + fighterTwo.name + " have fought to a draw in 10 rounds!</p>"
                dom.fighter1_txt.innerHTML = "<p>" + fighterOne.name + ":" + fighterOne.health + "</p>";
                dom.fighter2_txt.innerHTML = "<p>" + fighterTwo.name + ":" + fighterTwo.health + "</p>";
                dom.button.removeEventListener('click', fight, false);
            }else if(fighterOne.health > 0 && fighterTwo.health > 0){
              dom.round.innerHTML = "<p> Results after Round " + round + "</p>";
              dom.fighter1_txt.innerHTML = "<p>" + fighterOne.name + ":" + fighterOne.health + "</p>";
              dom.fighter2_txt.innerHTML = "<p>" + fighterTwo.name + ":" + fighterTwo.health + "</p>";
            }else if(fighterOne.health > 0 && fighterTwo.health < 0){
                dom.round.innerHTML = "<p> The Winner in Round " + round + " is " + fighterOne.name + "</p>";
                dom.fighter1_txt.innerHTML = "<p>" + fighterOne.name + ":" + fighterOne.health + "</p>";
                dom.fighter2_txt.innerHTML = "<p>" + fighterTwo.name + ":" + fighterTwo.health + "</p>";
                dom.button.removeEventListener('click', fight, false);
            }else if(fighterOne.health < 0 && fighterTwo.health > 0){
                dom.round.innerHTML = "<p> The Winner in Round " + round + " is " + fighterTwo.name + "</p>";
                dom.fighter1_txt.innerHTML = "<p>" + fighterOne.name + ":" + fighterOne.health + "</p>";
                dom.fighter2_txt.innerHTML = "<p>" + fighterTwo.name + ":" + fighterTwo.health + "</p>";
                dom.button.removeEventListener('click', fight, false);
           }else{
                dom.round.innerHTML = "<p> The Fighters: " + fighterOne.name + " and " + fighterTwo.name + " have killed each other in Round " +  round + "</p>"
                dom.fighter1_txt.innerHTML = "<p>" + fighterOne.name + ":" + fighterOne.health + "</p>";
                dom.fighter2_txt.innerHTML = "<p>" + fighterTwo.name + ":" + fighterTwo.health + "</p>";
                dom.button.removeEventListener('click', fight, false);
            }
             round++
}









/*

        function fight(){
    
            // Random Damage Calculator based upon given equation.
            // FightIntroduction
            alert("Welcome to the Grudge Match of the Century! \nToday we have:");
            alert(fighterOne.name + ":" + fighterOne.health + "  *START*  " + fighterTwo.name + ":" + fighterTwo.health);

            for (var i = 0; i < 10; i++){
                // Random Damage Calculator based upon given equation.
                var damageFighterOne = Math.floor(Math.random()*(fighterOne.maxDamage-fighterOne.minDamage)+fighterOne.minDamage);
                var damageFighterTwo = Math.floor(Math.random()*(fighterTwo.maxDamage-fighterTwo.minDamage)+fighterTwo.minDamage);

                //Damage Inflicted and Recorded per round
                fighterOne.health-=damageFighterTwo;
                fighterTwo.health-=damageFighterOne;

                matchResult = winnerCheck();
                // This Conditional outputs the results of the winnerCheck() function RESULTS to both a new alert allowing the user to continue to search for the winner or announcing the winner, also it creates a console log of round results for the user to view, in future versions this data could be converted to a set of arrays for some form of data harvesting if so desired
                if(matchResult === "No Winner!"){
                    dom.fighter1_txt.innerHTML = "<p>" + fighterOne.name + ":" + fighterOne.health + "</p>";
                    alert("Round " + round + ": " + fighterOne.name + ":" + fighterOne.health + " " + fighterTwo.name + ":" + fighterTwo.health);
                    console.log("Round", round, fighterOne.name + ":" + fighterOne.health + " " + fighterTwo.name + ":" + fighterTwo.health);
                    round++;
                }else{
                    console.log("The Final Score\n" + "Round", round, fighterOne.name + ":" + fighterOne.health + " " + fighterTwo.name + ":" + fighterTwo.health);
                    alert(matchResult);
                    break;
                }

            }

        }
  

        //function that will be called to tell who the winner is

        function winnerCheck(){

            var result = "No Winner!";
            //Conditional statement that will output results BASED UPON HEALTH AND/OR ROUND
            // Really the only time you''ll see the 10 round check nested conditional is if the damage of the fighters are modified to a lower amount
                   if(fighterOne.health < 1 && fighterTwo.health < 1){
                    result = Dead;
                    dom.fighter1_txt.innerHTML = "<p>" + fighterOne.name + ": " + fighterOne.health + "</p>"; 
                    dom.round.innerHTML = "<p> In Round " + round + ": Both " + fighterOne.name+ " and " + fighterTwo.name + " have died, NO WINNER!</p>";
            }else if(fighterOne.health< 1){
                result = dom.round.innerHTML = "<p> In Round " + round + ". " + fighterOne.name + " has died. AND YOUR WINNER IS! " + fighterTwo.name.toUpperCase() +"! </p>";
            }else if(fighterTwo.health < 1){
                result = fighterTwo.name + " has died. AND YOUR winner is! " + fighterOne.name.toUpperCase() +"!";
            }else if(round == 10 && fighterOne.health > 1 && fighterTwo.health > 1){
                if(fighterOne.health > fighterTwo.health){
                    result = "After 10 rounds, we have a decision " + fighterTwo.name + " has lost AND YOUR WINNER IS! " + fighterOne.name.toUpperCase() +"!";
                }else if(fighterTwo.health > fighterOne.health){
                    result = "After 10 rounds, we have a decision " + fighterOne.name + " has lost AND YOUR WINNER IS! " + fighterTwo.name.toUpperCase() +"!";
                }else if(fighterOne.health == fighterTwo.health){
                    result =   "AFTER 10 ROUNDS We have a DRAW! AND YOUR WINNERS ARE!\n" + fighterOne.name.toUpperCase()  + " AND " + fighterTwo.name.toUpperCase() +"!";
                }
               
            }
            return result;
        }
        */
        


})();