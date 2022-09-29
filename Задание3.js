// Задание 3

function sum(x) {
  return function(n) {
      return x + n;
  };
};
console.log( sum(3)(5), sum(1)(6), sum(13)(2) );
