/**
 Matthew Bathurst
 Programming for Web Applications I - Online
 Instructor: Fialishia OLoughlin
 Assignment: Week #4: { Homework } - OBJECTS.Person (4h) 
file: person.js
 */

(function(){

window.Person = Person;
Person.jobs = ["he Don", "Fixer", "Soldier"];
Person.actions = ["Wacking", "Smacking", "Jacking", "Hitting", "Sleeping", "Doing Time"];


function Person(name, row){
	console.log("Person Created: ", name);
	this.name = name;
	this.action = Person.action[Math.floor(Math.random()*Person.jobs.length)];
	this.row = row;

	var id = document.getElementById("r" +this.row+"c3");
	id.innerHTML = this.action;

}






})();