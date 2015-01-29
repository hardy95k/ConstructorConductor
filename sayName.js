//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
var Person = function(name, age) {
	this.name = name;
	this.age = age;
};

//Now create three instances of Person with data you make up

  //code here
var Kelly = new Person('Kelly', 25);
var Kevin = new Person('Kevin', 26);
var Tychus = new Person('Tychus', 1);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
Person.prototype.sayName = function() {
	alert(this.name);
}