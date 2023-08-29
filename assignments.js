// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console
const country = "Canada";
const continent = "North America";
let population = 40000000;

console.log("Assignment 1:");
console.log(
  `${country} is located in ${continent} and has a population of ${population}.`
);

// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

const isIsland = false;
let language;

console.log("Assignment 2:");
console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);

/*
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens
*/

language = "English";

console.log("Assignment 3:");
console.log(typeof language);

/*
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese
*/

console.log("Assignment 4:");

const half = population / 2;
console.log(
  `If ${country}'s population was split in half, ${half} people would be in each half.`
);

population++;
console.log(population);

const populationFinland = 6000000;
if (population > populationFinland) {
  console.log(`${country}'s population is greater than Finland's`);
} else {
  console.log(`${country}'s population is less than Finland's`);
}

const averagePopulation = 33000000;
if (population < averagePopulation) {
  console.log(
    `${country}'s population is less than the average population of ${averagePopulation}`
  );
} else {
  console.log(
    `${country}'s population is greater than the average population of ${averagePopulation}`
  );
}

console.log(
  `${country} is in ${continent}, and it's ${population} people speak ${language}`
);

// CODING CHALLANGE 1

//define variables
console.log("Coding Challenge 1:");
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
//calc BMI
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
//log BMI
console.log(BMIMark, BMIJohn);
//create boolean variable that checks if mark's bmi > john's
const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

//CODING CHALLENGE 2
console.log("Coding Challenge 2:");

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else if (BMIMark < BMIJohn) {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
} else {
  console.log("Mark and John have the same BMI");
}

//ASSIGNMENT 5

console.log("Assignment 5:");
//type coercion:
//predict the result
console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // '617'
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // FALSE
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143

//ASSIGNMENT 6
console.log("Assignment 6:");

// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this
// situation

// const numNeighbours = Number(prompt('How many neightbour countries does your country have?'))
// if (numNeighbours === 1) {
//   console.log('Only 1 border!')
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border')
// } else {
//   console.log('No borders')
// }

// CODING CHALLENGE 3
console.log("Coding Challenge 3:");
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const dolphinsAvg = (196 + 108 + 89) / 3;
const koalasAvg = (196 + 108 + 89) / 3;

if (dolphinsAvg >= 100 || koalasAvg >= 100) {
  if (dolphinsAvg > koalasAvg) {
    console.log("Dolphins win the trophy");
  } else if (dolphinsAvg < koalasAvg) {
    console.log("Koalas win the trophy");
  } else {
    console.log("Both win the trophy");
  }
} else {
  console.log("No team wins the trophy");
}

//ASSIGNMENT 7
console.log("Assignment 7:");
if (language === "English" && population < 50000000 && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}

// ASSIGNMENT 8
console.log("Assignment 8:");

popularity = "english";

switch (popularity) {
  case "chinese":
  case "mandarin":
    console.log("Most number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("great language too.");
}

// ASSIGNMENT 9
console.log("Assignment 9:");
population > 33000000
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);

// CODING CHALLENGE 4

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �

console.log("Coding Challange 4:");

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value was ${
    bill + tip
  }`
);
