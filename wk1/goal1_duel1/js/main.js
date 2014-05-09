/*
 Matthew Bathurst
 Programming for Web Applications I - Online
 Instructor: Fialishia OLoughlin
 Assignment: Week #1 :: { Homework } - THE DUEL #1 (4h)
 Assignment Date:  May 5 - May 11, 2014 (Week 1)
 Date Finished: Thursday May 8, 2014
 file: main.js


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

    var round = 0;



        function fight(){
            //round counter
            // Random Damage Calculator based upon given equation.
            // FightIntroduction
            alert("Welcome to the Grudge Match of the Century! Today we have,");
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
                    console.log(fighterOneName + ":" + fighterOneHealth + " " + fighterTwoName + ":" + fighterTwoHealth);
                }else{
                    console.log("The Final Score\n" + fighterOneName + ":" + fighterOneHealth + " " + fighterTwoName + ":" + fighterTwoHealth);
                    alert(matchResult);
                    break;
                }

            }
        }
    fight();

        //function that will be called to tell who the winner is

        function winnerCheck(){

            var result = "No Winner!";
            //Conditional statement that will output results
            if(fighterOneHealth < 1 && fighterTwoHealth < 1){
                result = fighterOneName + " and " + fighterTwoName + " have died, NO WINNER!";
            }else if(fighterOneHealth < 1){
                result = fighterOneName + " has died. AND YOUR WINNER IS! " + fighterTwoName.toUpperCase() +"!";
            }else if(fighterTwoHealth < 1){
                result = fighterTwoName + " has died. AND YOUR winner is! " + fighterOneName.toUpperCase() +"!";
            }
            return result;
        }
})();