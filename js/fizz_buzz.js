var number= prompt('please enter a integer');
var num = number ;

function Calc() {
    if (num % 15 === 0) {
      return ('Fizz Buzz');
    } else if (num % 3 === 0) {
      return('Fizz');
    } else if (num % 5 === 0) {
      return('Buzz');
    } else {
      return(num);
    }
}
