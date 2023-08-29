/*let js = 'amazing'
console.log(40 + 8 + 23 - 10)

console.log('Jonas')
let firstName = 'Oblock'
console.log(firstName)
console.log(firstName)
console.log(firstName)
*/
//use comments to describe code beneath it, divide code into
//different sections, comment out code that we don't want to execute, etc.

//boolean
// let javascriptIsFun = true
// console.log(javascriptIsFun)

//typeof
// console.log(typeof true)
// console.log(typeof javascriptIsFun)
// console.log(typeof 23)
// console.log(typeof 'mitch')

//reassign a variable
// javascriptIsFun = 'YES!'
// console.log(typeof javascriptIsFun)

//undefined
/*let year;
console.log(year)
console.log(typeof year)
year = 1996
console.log(year)
console.log(typeof year)

console.log(typeof null) // returns 'object', a bug


//declaring variables 
let age = 30
age = 31 //this is considered 'mutating' the variable

const birthYear = 1991
//birthYear = 1990 // will throw a type error. variable is immutable 

var job = 'programmer'
job = 'teacher'

lastName = 'riccio'
console.log(lastName)


const now = 2037
const ageJonas = now - 1991
const ageSarah = now - 2018
console.log(ageJonas, ageSarah)

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
//2 ** 3 = 2 to the power of 3 AKA 2 * 2 * 2

const firstName = 'Mitch'
const lastName = 'Riccio'
console.log(firstName + ' ' + lastName) //concatenation
console.log(`${firstName} ${lastName}`) //interpolation

//assignment operators
let x = 10 + 5 // 15
x += 10 // x = x + 10 -> 25
x *= 4 //x = x * 4 -> 100
x++ // x = x + 1 -> 101
x-- //x = x - 1 => 100
console.log(x)

//comparison operators 
console.log(ageJonas > ageSarah) // true
console.log(ageSarah >= 18) // true

const isFullAge = ageSarah >= 18 //typically storing these in variables


const now = 2037
const ageJonas = now - 1991
const ageSarah = now - 2018

console.log(now - 1991 > now - 2018) // math occurs before comparison

let x, y;
x = y = 25 - 10 - 5 // math occurs first, assignment second
console.log(x, y) // both variables = 10

const averageAge = (ageJonas + ageSarah) / 2 
console.log(ageJonas, ageSarah, averageAge)


const firstName = 'mitch'
const job = 'programmer'
const birthYear = 1996
const year = 2023

//concatenation and interpolation
const mitch = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!"
console.log(mitch) 

const mitchNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
console.log(mitchNew)

console.log(`Regular string`)

//old way to do multi-line strings
console.log('String with \n\
multiple \n\
lines.')

//new way, use backticks
console.log(`String
multiple
lines`)


const age = 15

if (age >= 18) {
    console.log('Sarah can buy a drink in Ontario')
} else {
    const yearsLeft = 19 - age
    console.log(`In ${yearsLeft} years Sarah can buy a drink in Ontario`)
}

const birthYear = 1996
let century

if (birthYear <= 2000) {
    century = 20
} else {
    century = 21
}
console.log(century)


//type conversion
const inputYear = '1991'
console.log(inputYear + 18)
console.log(Number(inputYear) + 18)
console.log(String(24))

// type coercion
console.log('I am' + 27 + ' years old')
console.log('23' - '10' - 3) // 10
console.log('1' + 1 - 1) // 10
console.log('10' - '4' - '3' - 2 + '5') // '15'


// TRUTHY AND FALSY 
// console.log(Boolean(0)) -> false
// console.log(Boolean(undefined)) -> false
// console.log(Boolean('Jonas')) -> true
// console.log(Boolean({})) -> true
// console.log(Boolean('')) -> false

const money = 0 //0, falsy
if (money) {
    console.log(`Don't spend it all`)
} else {
    console.log('You should get a job')
}

let height //undefined, falsy
if (height) {
    console.log('height is defined')
} else {
    console.log('height is undefined')
}

//EQUALITY OPERATORS

const age = 18

if (age === 18) console.log('You are officially an adult')
const favorite = prompt('What is your fav number?')
console.log(favorite)

if (favorite == 23) {
    console.log('Good choice, 23 is fire')
}


// const hasDriversLicense = true
// const hasGoodVision = true
// console.log(hasDriversLicense && hasGoodVision)
// console.log(hasDriversLicense || hasGoodVision)
// console.log(!hasDriversLicense)

// const shouldDrive = hasDriversLicense && hasGoodVision
// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive')
// } else {
//     console.log('Someone else should drive')
// }

// const isTired = false
// console.log(hasDriversLicense && hasGoodVision && isTired)
// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive')
// } else {
//     console.log('Someone else should drive')
// }

//switch statement
const day = "friday";
switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy the weekend");
    break;
  default:
    console.log("not a valid day");
}

if (day === 'monday') {
    console.log('plan course structure')
    console.log('go to coding meetup')
} else if (day === 'tuesday') {
    console.log('prepare theory videos')
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('write code examples')
} else if (day === 'friday') {
    console.log('record videos')
} else if (day === 'saturday' || day === 'sunday') {
    console.log('enjoy the weekend')
} else {
    console.log('not a valid day')
}


//ternary operator
const age = 17
const drink = age >= 19 ? console.log('wine') : console.log('water')
*/
