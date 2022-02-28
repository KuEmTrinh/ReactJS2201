const sumArray = (arr) => {
  let sum = 0;
  arr.forEach((el) => {
    sum += el;
  });
  return sum;
};

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(sumArray(a));
