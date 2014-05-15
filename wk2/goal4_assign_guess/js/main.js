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
	var click = function(){
		console.log(guess.limit);

	};

	var myfn = function(){
		guess.player = parseInt(dom.input.value);
		console.log(guess.limit, guess.player);
	}
	dom.button.onclick = myfn;

	
})();


