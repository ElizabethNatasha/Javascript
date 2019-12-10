"use strict"
let yearOfBirth;

yearOfBirth = prompt ('enter year of birth')

console.log(yearOfBirth);

let currentYear = 2019;

let age = (currentYear - yearOfBirth);

console.log(age) 

if (age < 18) {

    console.log('Minor!');
}

else if (age >= 18 && age <= 36 ) {

    console.log('Youth!');
}

else if ( age > 36) {

    console.log('Elder!');
}
