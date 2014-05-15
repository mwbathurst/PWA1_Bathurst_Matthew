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
	var magicNum = Math.floor((Math.random() * magicLimits.max) +magicLimits.min);

	// Console.log for testing code

	console.log(magicNum);
	// Variable setup for the GAME
	var dom ={
		input : document.querySelector('#input'),
		output : document.querySelector('#output'),
		button : document.querySelector('button'),
	};

	









})();


