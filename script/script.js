let isNumber = function (n) {
   return !isNaN(parseFloat(n)) && isFinite(n);
};



let play = function () {

   let x = 50;

   let number = prompt("Угадай число от 1 до 100");

   if (!isNaN(parseFloat(number)) && isFinite(number)) {
      function less() {
         if (Number(number) > x) {
            alert("Загаданное число меньше");
            play();
         } else if (Number(number) < x) {
            alert("Загаданное число больше");
            play();
         } else {
            alert("Угадал!!!");
         };
      };
      less();
   } else {
      let sugg = confirm("Введи число");
      if (sugg) {
         play();
      } else {
         return
      };
   };

};

play();