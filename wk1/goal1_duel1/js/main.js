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
    var figherTwoMinDamage = fighterTwoMaxDamage/2;


    // Fighter Introduction
    console.log("Welcome to the Grudge Match of the Century! Today we have,", fighterOneName, "and", fighterTwoName, "to fight to the death for our pleasure!\n SO LET THE FIGHT BEGIN!");




        function fight(){
            //round counter
            for (var i = 0; i < 10; i++){
              console.log("This is Round", i, " of a scheduled", 10, "championship match.");
          }
        }
    fight();

        //function that will be called to tell who the winner is

        function winnerCheck(){

            var result = "No Winner!";
            //Conditional statement that will output results
            if(fighterOneHealth < 1 && fighterTwoHealth < 1){
                result = fighterOneName, "and", fighterTwoName, "have died, NO WINNER!";
            }else if(fighterOneHealth < 1){
                result = fighterOneName, "has died. AND YOUR WINNER IS!", fighterTwoName.toUpperCase() +"!";
            }else if(fighterTwoHealth < 1){
                result = fighterTwoName, "has died. AND YOUR winner is!", fighterOneName.toUpperCase() +"!";
            }
            return result;
        }

})();