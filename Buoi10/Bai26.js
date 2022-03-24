const findMinSpacing = (array, number) => {
  let minSpacing = number - array[0];
  array.forEach((element) => {
    if (Math.abs(number - element) < minSpacing) {
      minSpacing = Math.abs(number - element);
    }
  });
  return array.filter((element) => {
    return Math.abs(number - element) == minSpacing;
  });
};

let a = [1, 2, 3, 4, 6, 7, 9];

console.log(findMinSpacing(a, 5));
