const foo = () => {
 console.log("foobar");
}
foo();

function sayHello() {
 return "Hello, ";
}


function greeting(helloMessage, name) {
 console.log(helloMessage() + name);
}


function sayHello() {
 return () => {
 console.log("Hello!");
 }
}

function makeFunc() {
 const name = 'Mozilla';
 function displayName() {
 console.log(name);
 }
 return displayName;
}
const myFunc = makeFunc();
myFunc();

function exampleFunction() {
 const x = "declared inside function"; 
 console.log("Inside function");
 console.log(x);
}
console.log(x);

const x = "declared outside function";
exampleFunction();
function exampleFunction() {
 console.log("Inside function");
 console.log(x);
}
console.log("Outside function");
console.log(x);

function f() {
 try {
 console.log(0);
 throw 'bogus';
 } catch (e) {
 console.log(1);
 return true; 
 console.log(2); 
 } finally {
 console.log(3);
 return false; 
 console.log(4); 
 }

 console.log(5); 
}
console.log(f()); 

function UserException(message) {
 this.message = m
this.name = 'UserException';
}
function getMonthName(mo) {
 mo--; 
 if (months[mo] !== undefined) {
 return months[mo];
 } else {
 throw new UserException('InvalidMonthNo');
 }
}

let monthName;
try {
  const myMonth = 15; 
} catch (e) {
 monthName = 'unknown';
 console.error(e.message, e.name); 
}
