// Задание 1

function howManyEvenNumbers() {
  let arr = [1, 2, 3, 4, 5];
  let result = arr.filter(function(elem) {
  if (elem % 2 == 0) {
    return true;
  } else {
    return false;
  }
  });
  console.log (result.length);
};
howManyEvenNumbers();
