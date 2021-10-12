
// Iteration 1




var hacker1 = 'Xavi';

console.log("The driver's name is " + hacker1);

var hacker2 = 'Eva';

console.log("The navigator's name is " + hacker2);





// Iteration 2




var hacker1 = 'Xavi';
var hacker2 = 'Eva';

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
 }




 
 // Iteration 3




 // 3.1. 

var hacker1 = 'Xavi';
var newDriverName = "";
var driver = hacker1;


for (var i = 0; i < driver.length; i++) {

  if (i < driver.length - 1) {
    newDriverName += driver[i].toUpperCase() + "";
  }
  else {
    newDriverName += driver[i].toUpperCase();
  }
}

console.log("newDriverName", newDriverName);





// 3.2. 

var hacker2 = 'Eva';
var newNavigatorName = "";

for (var i = hacker2.length - 1; i >= 0; i--) {
  newNavigatorName += hacker2[i];
}

console.log("newNavigatorName", newNavigatorName);






// 3.3 Nos hemos acabado de entender el ejercicio, hemos estado investigando y al final hemos tenido que pedir ayuda... 


var compareTheName = driver.localeCompare(navigator);


if (compareTheName == -1){
  console.log("The driver's name goes first");
}
else if (compareTheName == 1){
  console.log("Yo, the navigator goes first definitely.");
}
else{
  console.log("What?! You both have the same name?");
}