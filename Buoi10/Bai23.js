const findMaxCountNumber = (array) => {
  array.sort((a, b) => {
    return a - b;
  });

  let count = 1;
  let maxCount = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == array[i + 1]) {
      count++;
    } else {
      count = 1;
    }

    if (maxCount < count) {
      maxCount = count;
    }
  }

  return maxCount;
};

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(findMaxCountNumber(a));
