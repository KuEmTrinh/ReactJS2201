let newArray = ["hong", "tung", "xoan", "truong"];

// newArray.splice(0, 0, 1, 2);
// console.log(newArray);
// newArray.splice(3, 2, 3, 4);
// console.log(newArray);
// newArray.splice(newArray.length, 0, 5);
// console.log(newArray);

// tim so co tuan suat xuat hien nhieu nhat

const findMaxNumbers = (numbers) => {
  numbers.sort(function (a, b) {
    return a - b;
  });
  console.log("Mang sau khi sap xep :" + numbers);
  let maxFlag = 1;
  let maxCount = 1;
  let count = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i + 1] == numbers[i]) {
      count++;
    } else {
      maxCount = count;
      count = 1;
      if (maxCount >= maxFlag) {
        maxFlag = maxCount;
      }
    }
  }
  return maxFlag;
};

var numbers = [
  4, 4, 4, 2, 3, 2, 3, 1, 2, 6, 7, 9, 2, 8, 4, 2, 4, 3, 2, 5, 1, 3,
];
console.log(findMaxNumbers(numbers));
