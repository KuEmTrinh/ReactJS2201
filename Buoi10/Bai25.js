const squareArray = (array) => {
  return array.map((element) => {
    return element * element;
  });
};

let a = [1, 2, 3, 2, 3, 4, 6, 7];

console.log(squareArray(a));
