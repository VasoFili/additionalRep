let isNumber = function (n) {
   return !isNaN(parseFloat(n)) && isFinite(n);
};

function rand(min, max) {
   return Math.round((Math.random() * (max - min)) + min)
};

let x = rand(1, 100);
console.log(x);

let number = prompt("Угадай число от 1 до 100");
console.log(number);

let play = function () {

   if (!isNaN(parseFloat(number)) && isFinite(number)) {
      function control() {
         if (Number(number) > x) {
            number = prompt("Загаданное число меньше");
            play();
         } else if (Number(number) < x) {
            number = prompt("Загаданное число больше");
            play();
         } else {
            alert("Угадал, волк!!!");
         };
      };
      control();
   } else if (number === null) {
      alert("Жаль, прощайте");
      return
   } else {
      number = prompt("Введи число");
      play();
   };

};

play();