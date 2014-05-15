/*
 Matthew Bathurst
 Programming for Web Applications I - Online
 Instructor: Fialishia OLoughlin
 Assignment: Week #2 :: { Homework } - GUESSING GAME (2h)
 */

//Game variables
(function (){

	//Defines Limits of Random Number Calculation for future modifcations
	var magicLimits = {
			max : 10,
			min : 1
		}

		
	// Calculation of the Magic Number using the Max and Min ceiling/floor defined in magicLimits
	// -------Major Calculation Number ------
	var magicNum = Math.floor((Math.random() * magicLimits.max) +magicLimits.min);

	// Console.log for testing code, user will not see this unless console is viewed
	console.log(magicNum);

	// Changing Variables
	var dom ={
		input : document.querySelector('#input'),
		output : document.querySelector('#output'),
		button : document.querySelector('button'),
	};

	// Defines the guess limit, and how many have been made 
	var guess = {
		player :0,
		limit: 3,
		made:0
	};
	//Function that runs the game
	/*var click = function(){
		console.log(guess.limit);

	};
	*/
// validates the value to be a number, within the min/max limit
		var numberVal = function(){
		guess.player = parseInt(dom.input.value);

		if(isNaN(guess.player)){
			dom.output.innerHTML = "Please Enter a Number between " + magicLimits.min + " and " + magicLimits.max;
		}else if(guess.player < magicLimits.min){
			dom.output.innerHTML = "You have entered a number less than " + magicLimits.min + ". Please enter a number between " + magicLimits.min + " and " + magicLimits.max;
		}else if(guess.player > magicLimits.max){
			dom.output.innerHTML = "You have entered a number greater than " + magicLimits.max + ". Please enter a number between " + magicLimits.min + " and " + magicLimits.max;
		}else{
			game();
		}
	}




// Creates function that the click is run through and checks if you have enough guesses left
	var limitCheck = function(){
		if(guess.limit < 0){
			dom.output.innerHTML = ("You've Reached your Guess limit");
			dom.button.removeEventListener('click', limitCheck, false);
		}else{
			numberVal();
		}
	}
	




// FUNCTION That checks your guess vs the random number, if you win there is a special surprise  
	var winnerCheck = function(){
		if(guess.player == magicNum){
			dom.output.innerHTML = ("Congrats you've Won The Guessing Game, Enjoy this video!");
			window.open("https://www.youtube.com/watch?v=2KH2gc11XQU")
			dom.button.removeEventListener('click', limitCheck, false)
		}else if(guess.player > magicNum){
			dom.output.innerHTML = ("You have entered a number that is to high, please try one lower. You have " + guess.limit + " guesses left");
		}else{
			dom.output.innerHTML = ('You have entered a number that is to low, please try one that is larger. You have ' + guess.limit + " guesses left");
		}

		}

	

//The Game 
	var game = function(){
		guess.player = parseInt(dom.input.value);
		guess.limit--;
		guess.made++;

		

		if(guess.limit == 0 && guess.made == 3 && guess.player == magicNum){
			dom.output.innerHTML = "You've Reached your Guess Limit, Thankfully you won in the nick of time. Enjoy this video!";
			window.open("https://www.youtube.com/watch?v=2KH2gc11XQU");
			dom.button.removeEventListener('click', limitCheck, false);
		}else if(guess.limit == 0 && guess.made == 3){
			dom.output.innerHTML = "You've Reached your Guess Limit, Thank you come again";
			dom.button.removeEventListener('click', limitCheck, false);
		}
		else if(guess.limit == 0 && guess.made == 3){
			dom.output.innerHTML = ("You've Reached your limit");
			dom.output.innerHTML = "You've Reached your Guess Limit, Thank you come again";
			dom.button.removeEventListener('click', limitCheck, false);
		}else{
			winnerCheck();	
			

		}
	}

	
	//clicking test
	//dom.button.onclick = myfn;

	dom.button.addEventListener('click', limitCheck, false);
})();


