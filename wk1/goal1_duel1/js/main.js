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
    // Fighter Names: string variables
    var fighterOneName = "Kabal";
    var fighterTwoName = "Kratos";

    // Fighters' starting health: Num variables defined by the Assignment Guidelines

    var fighterOneHealth = 100;
    var fighterTwoHealth = 100;

    // Fighter Max Damage defined by the Assignment Guidelines
    var fighterOneMaxDamage = 50;
    var fighterTwoMaxDamage = 50;

    /*
    Assignment Guideline for "Damage occurs to both players at a random amount between half damage and maximum damage.
    So, if the player's damage variable is 50 then the amount of damage that can be inflicted will be between 25-50. */
    // Fighter Min Damage defined by the Assignment Guidelines

    var fighterOneMinDamage = fighterOneMaxDamage/2;
    var fighterTwoMinDamage = fighterTwoMaxDamage/2;

    //round intializer 
    var round = 1;



        function fight(){
          
            // Random Damage Calculator based upon given equation.
            // FightIntroduction
            alert("Welcome to the Grudge Match of the Century! \nToday we have:");
            alert(fighterOneName + ":" + fighterOneHealth + "  *START*  " + fighterTwoName + ":" + fighterTwoHealth);

            for (var i = 0; i < 10; i++){
                // Random Damage Calculator based upon given equation.
                var damageFighterOne = Math.floor(Math.random()*(fighterOneMaxDamage-fighterOneMinDamage)+fighterOneMinDamage);
                var damageFighterTwo = Math.floor(Math.random()*(fighterTwoMaxDamage-fighterTwoMinDamage)+fighterTwoMinDamage);

                //Damage Inflicted and Recorded per round
                fighterOneHealth-=damageFighterOne;
                fighterTwoHealth-=damageFighterTwo;

                matchResult= winnerCheck();
                if(matchResult === "No Winner!"){
                    alert("Round " + round + ": " + fighterOneName + ":" + fighterOneHealth + " " + fighterTwoName + ":" + fighterTwoHealth);
                    console.log("Round", round, fighterOneName + ":" + fighterOneHealth + " " + fighterTwoName + ":" + fighterTwoHealth);
                    round++;
                }else{
                    console.log("The Final Score\n" + "Round", round, fighterOneName + ":" + fighterOneHealth + " " + fighterTwoName + ":" + fighterTwoHealth);
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
            if(fighterOneHealth < 1 && fighterTwoHealth < 1){
                result = fighterOneName + " and " + fighterTwoName + " have died, NO WINNER!";
            }else if(fighterOneHealth < 1){
                result = fighterOneName + " has died. AND YOUR WINNER IS! " + fighterTwoName.toUpperCase() +"!";
            }else if(fighterTwoHealth < 1){
                result = fighterTwoName + " has died. AND YOUR winner is! " + fighterOneName.toUpperCase() +"!";
            }else if(round == 10 && fighterOneHealth > 1 && fighterTwoHealth > 1){
                if(fighterOneHealth > fighterTwoHealth){
                    result = "After 10 rounds, we have a decision " + fighterTwoName + " has lost AND YOUR WINNER IS! " + fighterOneName.toUpperCase() +"!";
                }else if(fighterTwoHealth > fighterOneHealth){
                    result = "After 10 rounds, we have a decision " + fighterOneName + " has lost AND YOUR WINNER IS! " + fighterTwoName.toUpperCase() +"!";
                }else if(fighterOneHealth == fighterTwoHealth){
                    result =   "AFTER 10 ROUNDS We have a DRAW! AND YOUR WINNERS ARE!\n" + fighterOneName.toUpperCase()  + " AND " + fighterTwoName.toUpperCase() +"!";
                }
               
            }
            return result;
        }

})();