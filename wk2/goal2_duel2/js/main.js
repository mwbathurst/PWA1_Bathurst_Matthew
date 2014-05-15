/*
 Matthew Bathurst
 Programming for Web Applications I - Online
 Instructor: Fialishia OLoughlin
 Assignment: Week #1 :: { Homework } - THE DUEL #1 (4h)
 Assignment Date:  May 5 - May 11, 2014 (Week 1)
 Date Finished: Thursday May 8, 2014
 file: main.js
testing

 */
(function(){
    console.log("It's Fight Night");
    var fighterOne = ["Godzilla", 100, 50, 25];
    var fighterTwo = ["Megallon", 100, 50, 25];

    /* Original Code for the 4 variables [name,health,maxdamage,mindamge]
    var fighterTwo = [];
    // Fighter Names: string variables
    var fighterOneName = "Kabal";
    var fighterTwoName = "Kratos";

    // Fighters' starting health: Num variables defined by the Assignment Guidelines

    var fighterOneHealth = 100;
    var fighterTwoHealth = 100;

    // Fighter Max Damage defined by the Assignment Guidelines
    var fighterOneMaxDamage = 50;
    var fighterTwoMaxDamage = 50;
    
    var fighterOneMinDamage = fighterOneMaxDamage/2;
    var fighterTwoMinDamage = fighterTwoMaxDamage/2;
    
    /*
    Assignment Guideline for "Damage occurs to both players at a random amount between half damage and maximum damage.
    So, if the player's damage variable is 50 then the amount of damage that can be inflicted will be between 25-50. */
    // Fighter Min Damage defined by the Assignment Guidelines



    //round intializer 
    var round = 1;



        function fight(){
          
            // Random Damage Calculator based upon given equation.
            // FightIntroduction
            alert("Welcome to the Grudge Match of the Century! \nToday we have:");
            alert(fighterOne[0] + ":" + fighterOne[1] + "  *START*  " + fighterTwo[0] + ":" + fighterTwo[1]);

            for (var i = 0; i < 10; i++){
                // Random Damage Calculator based upon given equation.
                var damageFighterOne = Math.floor(Math.random()*(fighterOne[2]-fighterOne[3])+fighterOne[3]);
                var damageFighterTwo = Math.floor(Math.random()*(fighterTwo[2]-fighterTwo[3])+fighterTwo[3]);

                //Damage Inflicted and Recorded per round
                fighterOne[1]-=damageFighterOne;
                fighterTwo[1]-=damageFighterTwo;

                matchResult = winnerCheck();
                // This Conditional outputs the results of the winnerCheck() function RESULTS to both a new alert allowing the user to continue to search for the winner or announcing the winner, also it creates a console log of round results for the user to view, in future versions this data could be converted to a set of arrays for some form of data harvesting if so desired
                if(matchResult === "No Winner!"){
                    alert("Round " + round + ": " + fighterOne[0] + ":" + fighterOne[1] + " " + fighterTwo[0] + ":" + fighterTwo[1]);
                    console.log("Round", round, fighterOne[0] + ":" + fighterOne[1] + " " + fighterTwo[0] + ":" + fighterTwo[1]);
                    round++;
                }else{
                    console.log("The Final Score\n" + "Round", round, fighterOne[0] + ":" + fighterOne[1] + " " + fighterTwo[0] + ":" + fighterTwo[1]);
                    alert(matchResult);
                    break;
                }

            }
        }
    fight();

        //function that will be called to tell who the winner is

        function winnerCheck(){

            var result = "No Winner!";
            //Conditional statement that will output results BASED UPON HEALTH AND/OR ROUND
            // Really the only time you''ll see the 10 round check nested conditional is if the damage of the fighters are modified to a lower amount
            if(fighterOne[1] < 1 && fighterTwo[1] < 1){
                result = fighterOne[0]+ " and " + fighterTwo[0] + " have died, NO WINNER!";
            }else if(fighterOne[1]< 1){
                result = fighterOne[0] + " has died. AND YOUR WINNER IS! " + fighterTwo[0].toUpperCase() +"!";
            }else if(fighterTwo[1] < 1){
                result = fighterTwo[0] + " has died. AND YOUR winner is! " + fighterOne[0].toUpperCase() +"!";
            }else if(round == 10 && fighterOne[1] > 1 && fighterTwo[1] > 1){
                if(fighterOne[1] > fighterTwo[1]){
                    result = "After 10 rounds, we have a decision " + fighterTwo[0] + " has lost AND YOUR WINNER IS! " + fighterOne[0].toUpperCase() +"!";
                }else if(fighterTwo[1] > fighterOne[1]){
                    result = "After 10 rounds, we have a decision " + fighterOne[0] + " has lost AND YOUR WINNER IS! " + fighterTwo[0].toUpperCase() +"!";
                }else if(fighterOne[1] == fighterTwo[1]){
                    result =   "AFTER 10 ROUNDS We have a DRAW! AND YOUR WINNERS ARE!\n" + fighterOne[0].toUpperCase()  + " AND " + fighterTwo[0].toUpperCase() +"!";
                }
               
            }
            return result;
        }

})();