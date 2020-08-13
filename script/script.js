// **********   ФУНКЦИИ    **********

function outputMessage() {
   console.log("Hello, World");
};
outputMessage();

const consoleMessage = function () {
   console.log("Hello, friends");
};
consoleMessage();

function outputMessageMax(name, age) {
   console.log("Hello " + name);
   console.log("My age = " + age);
};
outputMessageMax("Max", 30);

(function () {
   console.log("Hello");
}());

console.log(consoleMessage);


const doNum = function (a, b, callback) {
   if (typeof a === "number" && typeof b === "number") {
      callback(a, b);
   }
};

doNum(5, 10, function (a, b) {
   console.log(a + b);
});

function one(callback) {
   setTimeout(function () {
      console.log(1);
      callback();
   }, 1000);
};

function two() {
   console.log(2);
};

one(two);