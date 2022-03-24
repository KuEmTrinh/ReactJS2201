const findMinMaxAverageNumber = (array) => {
  // let min = array[0];
  // let max = array[0];
  // array.forEach((element, index) => {
  //   if (element <= min) {
  //     min = element;
  //   }
  //   if (element >= max) {
  //     max = element;
  //   }
  // });
  // let average = Math.round((max + min) / 2);
  // let averageNumber = array[0];
  // let averageFlag = average - array[0];
  // array.forEach((element, index) => {
  //   if (Math.abs(element - average) < averageFlag) {
  //     averageNumber = element;
  //     averageFlag = average - element;
  //   }
  // });

  // console.log(min);
  // console.log(max);
  // console.log(averageNumber);

  let minNumber = Math.min(...array);
  let maxNumber = Math.max(...array);

  let averageNumber =
    array.reduce((sum, element) => (sum += element), 0) / array.length;

  return { minNumber, maxNumber, averageNumber };
};

let a = [1, 2, 3, 4, 6, 7, 8, 9, 9, 8, 7, 6, 4, 3, 2, 1];

console.log(findMinMaxAverageNumber(a));
