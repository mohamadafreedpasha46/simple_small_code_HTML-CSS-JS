/*
console.log("Introduction");
console.log("name: Mohamad Afreed Pasha");
console.log("Father Name: Chand Pasha");
console.log("Residence: India");
console.log(21);
console.log(false);
console.log(18212.21);
*/
/* print -- display */

/*
veriables:
var - traditionnal method 
2015- ES6
let - this both are mutable 
const not mutable
*/


/*
const Name ="Mohamad Afreed Pasha";
const FatherName = "chand pasha";
const Country = "INDIA"
let Age = 21;
const Gpa = 3.02;
var IsMarried = false;
let isDead = true;

console.log("Name: " + Name); // name : Mahamad Afreed Pasha
console.log("Father Name: " + FatherName);
console.log("Country: " +  Country);
console.log("Age: " +  Age + "Year");
console.log("gpa: " + Gpa);
console.log("Is Married: " + IsMarried);
console.log("is Dead: " + isDead);

// 1000
Age = 22;
IsMarried = true;
isDead = false;

console.log("Age: " +  Age + "Year");
console.log("Is Married: " + IsMarried);
console.log("is Dead: " + isDead);


// 1. No reserverd keywords
// 2. No number in start
// 3. No special characters
// 4. reasonable name

*/

// Session 2

/*let dataOfTalha = {
    name: "Talha",
    age: 21,
    city: "Arifwala",
    country: "Pakistan"
} 

console.log(dataOfTalha)*/


// C++
/* DATA TYPE:
int number = 10,
string name = "ali",
subtraction minus = 2-3,
float fluctuation = 3.984959,
boolean isfail = false */

// DYNAMIC TYPING DATA, unique, popular
//let number =  10;
//console.log(number)
//number = "abc";
//console.log(number)
//number = false;
//console.log(number)

// Operators
/* console.log(4-2);
let num1 = prompt("please enter your First number: ");
let num2 = prompt("please enter your second number: ");


let sum = Number(num1) + Number(num2); // error Ex: "5" + "4" ==> 54 this text consider if you take number rap-up like Number(variable)
let multiple = num1 * num2;
let subtruction = num1 - num2;
let division = num1 / num2;

console.log("Number One: " + num1);
console.log("Number Two: " + num2);
console.log("Sum: " + sum);
console.log("Multiple: " + multiple);
console.log("Subtruction: " + subtruction);
console.log("Division: " + division);


let n1 = 5;
let n2 = 8;
let n3 = 10;

let avg = (n1 + n2 + n3) / 3;
console.log(avg); */
 
// String - Text

let firstName = "Afreed";
let secondName = "Pasha";
const fatherName = "Chand Pasha";
const country = "India";
var age = 21;
var gpa = 78.88;
var IsMarried = false;
const isDead = true;
let education = "BS-SE"
let role = "software Engineer"
let university = "Bangalore North University"

let Introduction = "My name is" + firstName + " " + secondName + " and my father name is " + fatherName + ". I am currently living in " + country + ". I graduation from " + university + " with having a degree of " + education + " having cgpa of " + gpa;

 
console.log(Introduction);

// string literals

let  updatedIntro = `My name is ${firstName} ${secondName}  andd my ${fatherName} . I am currently living in ${country}. I graduation from ${university} with having cgpa of ${gpa} and with the degree of ${education}. I am ${age} year old` ;

console.log(updatedIntro)

// condition function

let married = false;
if (married){
    console.log("abow 25 year old will eligible to married")
}
else {
    console.log("if below 25 year will not be eligible to marrieds")
}

// Scenario : Game Restriction.

let userage = 29;
if (userage >= 18){
    console.log("user will start to play the Game")
}
else{
    console.log("user Not eligible to play the Game")
}

let marks = 31;
if (marks >= 33 ){
    console.log("pass")
}
else{
    console.log("Fail")
}


// Scenario: categories of User 
//1. kid < 12
//2. Teenager <18
//3. Adult < 30
//4. Man/Women < 50
//5. old 

// use this to multiple condition is want to apply.
let age1 = 29;

if (age1 <=12){
    console.log("Kid")
}
else if (age1 <= 18){
    console.log("Teenager")
}
else if (age1 <= 30){
    console.log("Adult")
}
else if (age1 < 50){
    console.log("Man/Women")
}
else {
    console.log("Old")
}



//Scenario:
//1. I will play if it is raining anf cloudy (both)
//2. I will go to study if Mothe gives me a candy or Father gives me pocket money. (any one appliable)
//3. I will go outside if i get a bike and drink and 2 friends and some money.

//logical Operators:

//AND === && (all should be true)
//OR ==== || (any one condition can be true either false)
//NOR === !  (reverse value)

let raining = true;
let cloudy = false;

if (raining || cloudy){
    console.log("I will play")
}
else{
    console.log("I will not play")
}

let bike = true;
let drink = true;
let friends = true;
let money = true;

if (bike && drink && friends && money){
    console.log("I will go outside")
}
else{
    console.log("I am not go outside")
}

 // reverse value

 let cry = false;           
 if (!cry){
    console.log("He is crying")
 }
 else{
    console.log("He is not crying")
 }

////////////////////////////////////////////////////////////////////////////////////////
// both and, or
 let studentMarks;
 let studentAge;

 while (true) {
    let marksInput= prompt("PLEASE ENTER THE STUDENT MARKS")
    if (!isNaN(marksInput)){
        studentMarks = parseFloat(marksInput);
        break;
    }else{
        alert("Please Enter a valid number for student marks")
    }

 }
while (true) {
    let ageInput = prompt("PLEASE ENTER THE STUDENT MARKS")
    if (!isNaN(ageInput)) {
        studentAge = parseFloat(ageInput);
        break;
    }else{
        alert("please enter a valid number for student age")
    }

}
 // age > 18 and a < 10
 // stu > 88 and < 90
if ((studentMarks >=88 && studentMarks <90) || (studentAge >=20 && studentAge <30)){
    console.log("well done! Good perfomance of student")
}
else {
    console.log("Not well performance of student")
}


// input calculater

//  let num1 = prompt("please ENTER the first number")
//  let num2 = prompt("please ENTER the second number")
//  let opr  = prompt("please ENTER the operator sign")

// if (opr == "sum"){
//     let sum = Number(num1) + Number(num2);
//     console.log("sum: " + sum)
// }else if (opr == "multiplication"){
//     let multiplication = num1 * num2;
//     console.log("Multiplication: " + multiplication)
// }else if (opr == "subtraction"){
//     let subtraction = num1 - num2;
//     console.log("Subtraction: " + subtraction)
// }else{
//     let divide = num1 % num2;
//     console.log("Divide: " + divide)
// }