const findSecondaryNumber = (array) => {
  let currentIndex = 0;
  let memory = 0;
  let max = array[0];
  array.forEach((element, index) => {
    if (element > max) {
      memory = array[currentIndex];
      currentIndex = index;
      max = element;
    }
  });
  if (memory == 0) {
    return -1;
  } else {
    return memory;
  }
};

let a1 = [1, 2, 3, 4, 5, 6, 8, 7, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let a2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

console.log(findSecondaryNumber(a1));
console.log(findSecondaryNumber(a2));
