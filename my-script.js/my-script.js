const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0, 200));

// request a weekday along with a long date
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(new Intl.DateTimeFormat("de-DE", options).format(date));
// "Donnerstag, 20. Dezember 2012"

// an application may want to use UTC and make that visible
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// "Thursday, December 20, 2012, GMT"

// sometimes you want to be more precise
options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Australia/Sydney",
  timeZoneName: "short",
};
console.log(new Intl.DateTimeFormat("en-AU", options).format(date));
// "2:00:00 pm AEDT"

// sometimes you want to be very precise
options.fractionalSecondDigits = 3; //number digits for fraction-of-seconds
console.log(new Intl.DateTimeFormat("en-AU", options).format(date));
// "2:00:00.200 pm AEDT"

// sometimes even the US needs 24-hour time
options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
  timeZone: "America/Los_Angeles",
};
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// "12/19/2012, 19:00:00"

// to specify options but use the browser's default locale, use undefined
console.log(new Intl.DateTimeFormat(undefined, options).format(date));
// "12/19/2012, 19:00:00"

// sometimes it's helpful to include the period of the day
options = { hour: "numeric", dayPeriod: "short" };
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// 10 at night

//Date
/*
const d = new Date("2022-03-25");

console.log(d);
//let mydate = new Intl.DateTimeFormat("en-US", options).format(d);
//console.log(mydate);

const options = { weekday: "long"
 };
console.log(new Intl.DateTimeFormat("en-UK", options).format(d));

document.getElementById("demo").innerHTML = d;
*/

/*

function displayDate() {
  document.getElementById("loop-demo").innerHTML = Date();
}

*/

//While Loop

//while (i < 10) {}
//ForLoop
/*
let text = "";

for (let t = 2; t <= 5; t++) {
  for (let i = 1; i <= 10; i++) {
    text += t + " * " + i + " = " + t * i + "<br>";
    //console.log(t + " * " + i + " = " + t * i);
  }
  text += "<hr>";
}

document.getElementById("loop-demo").innerHTML = text;
*/
/*
const cars = ["BMW", "Volvo", "Saab", "Ford", "Honda", "Toyota"];
//text += cars[0]
let text = "";
let len = cars.length;

for (let i = 0; i < len; i++) {
  text += cars[i] + "<br>";

  //console.log(cars[i]);
}

document.getElementById("loop-demo").innerHTML = text;
*/

//document.getElementById("loop-demo").innerHTML = cars[0];
//document.getElementById("loop-demo").innerHTML = cars[1];
//document.getElementById("loop-demo").innerHTML = cars[2];
//document.getElementById("loop-demo").innerHTML = cars[3];

/*
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i, len, text;
for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;
*/
/*
while
do while 
for in
for each
*/

//Switch Statment
/*switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
*/
/*
const time = 16;
let greeting;

switch (time) {
  case 11:
    greeting = "Good Morning";
    break;

  case 12:
    greeting = "Good Afternoon";
    break;
  default:
    greeting = "Good Evening";
    break;
}

document.getElementById("time-demo").innerHTML = greeting;
*/
/*
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
document.getElementById("switch-demo").innerHTML = "Today is " + day;
*/
//Conditional Statements
/*
if 
else
else if
switch
*/
/*
let a = 40;
let b = 30;

if (b > a) {
  document.getElementById("cs-demo").innerHTML = "integer b is greater";
} else {
  document.getElementById("cs-demo").innerHTML = "integer a is greater";
}
*/

/*
const time = new Date().getHours();
document.getElementById("log").innerHTML = time;
let greeting;

if (time < 12) {
  greeting = "Good Morning";
} else if (time == 12) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}

document.getElementById("time-demo").innerHTML = greeting;
*/

//Functions
/*
function toCelsius(f) {
  return (5 / 9) * (f - 32);
}

myCelsius = toCelsius(99);

function changeCourse(myCourseName) {
  document.getElementById("myLearning").innerHTML = "Learning " + myCourseName;
}

function msgChange(user) {
  document.getElementById("myGreeting").innerHTML = "Welcome " + user;
}

//Functions
function add(a, b) {
  return a + b;
}

function Multiply(a, b) {
  return a * b;
}

function Subtract(a, b) {
  return a - b;
}

function Divide(a, b) {
  return a / b;
}

result = add(2, 6);
console.log(result);

result = add(6, 12);
console.log(result);

result = Divide(10, 2);
console.log(result);

result = Multiply(5, 6);
console.log(result);

result = add("Alex", " Paul");
console.log(result);
*/
//Object Data Type

//key:value pairs
/*
let person = {
  firstName: "Amber",
  lastName: "Forrester",
  phone: 656565656,
  email: "abc@abc.com",
};

console.log(person.email);
console.log(person.phone);
*/
//Arrays---data structure
/*
let numbers = [1, 3, 6];
console.log(numbers);

let fsd = ["Amber", "Suzane", "Charline", "Suze"];

console.log(fsd);

console.log(fsd[0]);

let today_date = new Date();
console.log(today_date);
*/
/*
let x = 5;
x--;
console.log(x); //5//55//15//
x--;
console.log(x); //5//55//15//
--x;
console.log(x); //5//55//15//
*/
/*
let x = 5;
x++;
console.log(x);
x++;
console.log(x);
++x;
console.log(x);
*/
//Comparision Operators
/*
let myFirstLetter = "A";
let mySecondLetter = "a";

let comparied = myFirstLetter < mySecondLetter.toUpperCase();

let num1 = 10;
let num2 = 2;

let result = num1 >= num2;

console.log(result);
*/
/*let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
*/
/*
let text1 = "What a very ";
text1 += "nice day";

console.log(text1);
document.getElementById("demo").innerHTML = text1;
*/
/*
let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;

document.getElementById("demo").innerHTML = x + "<br>" + y + "<br>" + z;

console.log(x); //10
console.log(y); //55
console.log(z); //Hello5
*/
//Logical Operators
/*
let exp1 = 6;
let exp2 = "Sadeed";

let result = exp1 || exp2;
console.log(result);

result = exp1 && exp2;
console.log(result);
*/

//variable --Automatic

//scoping

//declare
/*
let z = 10;

let x; //decleration
x = 2; //Assignment

//x = x + 6;
//x *= 10;

x **= x;



console.log(x);
*/
/*

let x = 60;
console.log(x);

{
  let x = 10;
  let y = 20;
  console.log(x);
  console.log(y);
}

{
  let z = 6;
  console.log(z);
  {
    let x = 70;
    let z = 60;
    console.log(x);
    console.log(z);

    {
      let a = 30;
      console.log(a);
    }
    let a = 20;
    console.log(a);
  }
}

x = 50;
console.log(x);
let a = 50;
console.log(a);
*/

/*
let x = 10;
console.log(x);

{
  let x = 20;
  console.log(x);
}

console.log(x);
*/
/*
x = 5;
y = 10;
name = "Sadeed";
myflag = true;

result = x + y;
console.log("Total of x and y is : " + result);
document.getElementById("demo").innerHTML = result;
*/
//var
/*
var x = 15;
var y = 10;
var name = "Sadeed";
var myflag = true;

var result = x + y;
console.log("Total of x and y is : " + result);
document.getElementById("demo").innerHTML = result;
*/
//Let
/*
let x = 25;
let y = 10;
let name = "Sadeed";
let myflag = true;

let result = x + y;
console.log("Total of x and y is : " + result);

result = 50;

console.log("Total of x and y is : " + result);

document.getElementById("demo").innerHTML = result;
*/
//Const
/*
const x = 55;
const y = 10;
const name = "Sadeed";
const myflag = true;

const result = x + y;

result = 50;

console.log("Total of x and y is : " + result);

document.getElementById("demo").innerHTML = result;
*/

//alert("Welcome to learning Javascript");
/*
var greetings = "welcome ";
var myName = " Sadeed";

document.getElementById("myGreeting").innerHTML = greetings + myName;

function displayOn() {
  document.getElementById("demo").style.display = "";
}

function displayOff() {
  document.getElementById("demo").style.display = "none";
}
*/
//console.log(myName);
//console.log(36 + 56);