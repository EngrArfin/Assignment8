/* Ansert To the Question No-3 */

function square(x) {
  return x * x;
}

function double(x) {
  return x * 2;
}

function addFive(x) {
  return x + 5;
}
function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

const composedFunction = compose(compose(double, square), addFive);

console.log(composedFunction(3));
