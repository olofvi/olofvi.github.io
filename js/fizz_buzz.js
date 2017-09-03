var number= prompt('please enter a integer');
var num = number ;

function Calc() {
    if (num % 15 === 0) {
      alert ('Fizz Buzz');
    } else if (num % 3 === 0) {
      alert ('Fizz');
    } else if (num % 5 === 0) {
      alert('Buzz');
    } else {
      alert(num);
    }
}
