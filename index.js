/**
 * Q0: Write a function called `countdown` that counts down from 10 on the console and
 * then logs "Blast Off!"
 */
function countdown(){
  for (var i = 10; i > 0; i--){
  	console.log("Blasts off!");
  }

}

countdown();


/**
 * Q1: Write a function called `max` that has two Number parameters and returns
 * the larger of the two.
 */

function max(a, b){
	if (a > b) {
		return a;
	}	else {
		return b;
	}

}

console.log(max(2, 3));







/**
 * Q2: Write a function called `longer` that has two String parameters and returns
 * the String that is longer.
 */


   function longer(a, b) {
   	if (a.length > b.length){
   		return a;
   	} else {
   		return b;
   	}

 }

console.log(longer("Barcelona", "DC"));



/**
 * Q3: Write a function called `isEven` that has one Number parameter and returns `true` if
 * if the number is even and `false` otherwise.
 */

function isEven(num) {
	if (num % 2 === 0){
		return true;
	}
	return false;
}

console.log(isEven(10));



 /**
  * Q4: Write a function called `getAreaOfCircle` that has a Number parameter
  * (the circle's radius) and returns the surface area.
  */

function getAreaOfCircle(radius){
	return Math.PI * Math.pow(radius,2);
}



/**
 * Q5: Write a function called `getFullName` that has an Object parameter, of the form:
 *
 * {
 *   firstName: 'Bob',
 *   lastName: 'Evans'
 * }
 *
 * And returns the first and last name concatenated together (i.e. 'Bob Evans').
 */

function getFullName(person){
	return person.firstName + "" + person.lastName;
}

/**
 * Q6: Write a function called `reverseString` that has a String parameter and returns
 * the String reversed. Hint: look up `.split()`
 */

function reverseString(a) {
	return a.split("").reverse().join("");
}


/**
 * Q7: Write a function called `maxArray` that has one Array of Numbers parameter and returns
 * the largest number in the Array. Use a `forEach` loop.
 */


function maxArrray(a[1, 2, 3]){
	for (var = i; i < a.length; i++){
        return a;	
	
	
	}
}
/**
 * Q8: Create an Object that has each of the above functions as values.
 *
 * var answers = {
 *   q0: ?,
 *   ...
 * };
 *
 */

var answers = {
	qo: countdown;
	q1: max,
	q2: longer;
	q3: isEven,
	q4: getAreaOfCircle,
	q5: reverseString,
	q7: maxArray
}


 /**
  * Q9: Use the Object from Q8 to call all of the functions you've created.
  */

//call countdown

answers.q0();

//call max

console.log(answers.q1(2,3));

// call longer

console.log(answers.q2("hello"))

//call iseven

console.log(answers.q3(9));

//call getAreaofCircle

console.log(answers.q4(6));

// getfullName

console.log(answers.q5({
	firstName: "John",
	lastName: "Snow"
}));

//call reverseString 
console.log(answers.q6(dlrow ollen));

//call maxArray

console.log(answers.q7[(1,4,8,3,-1,2)]);



