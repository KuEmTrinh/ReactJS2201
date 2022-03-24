const inputNumberToSortedArray = (array, number) => {
  array.forEach((el, index) => {
    if (el > number) {
      array.splice(index, 0, number);
    }
  });
  return array;
};

let a = [1, 3, 6, 9, 11, 20];
console.log(inputNumberToSortedArray(a, 13));
