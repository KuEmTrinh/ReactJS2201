const findMinMax = (...argument) => {
  let min = argument[0];
  let max = argument[0];
  argument.map((el, index) => {
    if (el < min) {
      min = argument[index];
    }
    if (el > max) {
      max = argument[index];
    }
  });
  console.log(min);
  console.log(max);
};

findMinMax(8, 62, 2, 1, 6, 7);
