const sortArray = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i+1; j <= array.length - 1; j++) {
      if (array[i] >= array[j]) {
        let swap = array[i];
        array[i] = array[j];
        array[j] = swap;
      }
    }
  }
  return array
};

let a = [9, 8, 7, 6, 4, 5, 3, 2, 1];
console.log(sortArray(a));
