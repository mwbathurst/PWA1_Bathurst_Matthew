/**
 Matthew Bathurst
 Programming for Web Applications I - Online
 Instructor: Fialishia OLoughlin
 Assignment: Week #4: { Homework } - OBJECTS.Person (4h) 
file: person.js
 */

(function(){
//global calling
window.Person = Person;
//defines jobs & actions that can be called for the site
Person.jobs = ["The Don", "Fixer", "Soldier", "Wheel Man", "Snitch"];
Person.actions = ["Wacking", "Smacking", "Jacking", "Hitting", "Sleeping", "Doing Time"];


function Person(name, row){
	console.log("Person Created: ", name);
	this.name = name;
	this.job = Person.jobs[Math.floor(Math.random()*Person.jobs.length)];
	this.action = Person.actions[Math.floor(Math.random()*Person.jobs.length)];
	this.row = row;

	var id = document.getElementById("r" +this.row+"c3");
	id.innerHTML = this.action;

}
//random updated based on time
Person.prototype.update = function(){
	if(Math.floor(Math.random() < .01)){
		var i = Math.floor(Math.random() * Person.actions.length);
		this.action = Person.actions[i];
		var id = document.getElementById("r" +this.row+"c3");
		id.innerHTML = this.action;
	}
}




})();