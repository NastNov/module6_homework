// Задание 4

function showNumbers(from, to) {
    let current = from;
    let timerId = setInterval(function() {
      console.log (current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  };
  showNumbers(5, 15)
