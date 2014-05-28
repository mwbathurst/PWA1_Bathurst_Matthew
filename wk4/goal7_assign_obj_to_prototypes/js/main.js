/*
 Matthew Bathurst
 Programming for Web Applications I - Online
 Instructor: Fialishia OLoughlin
 Assignment: Week #4: { Homework } - OBJECTS.Person (4h) 
file: main.js
*/

(function(){

// Global Variables defined
var capPeople = 3;
var people = [];
var names = ["Vito Corleone", "Michael Corleone", "Sonny Corleone", "Fredo Corleone", "Tom Hagen"];
var interval;

// Main output for site in HTML
for (var i = 0; i < capPeople ; i++){
	var index = Math.floor(Math.random() * names.length);
	var person = new Person(names[index], i+1);
	//populates the HTML with the info
	populateHTML(person.name,"r"+(i+1)+"c1");
	populateHTML(person.job,"r"+(i+1)+"c2");

	people.push(person);
	//Code that allows for no repeat in names
	names.splice(index,1);
}

//set the interval as the assignment calls for 
interval = setInterval(runUpdate, 1000 / 30);


function populateHTML(data, field){
	var id = document.getElementById(field);
	id.innerHTML = data;
}

function runUpdate(){
	people.forEach(function(element){
		element.update();
	});
}




})();
