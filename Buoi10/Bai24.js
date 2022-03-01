const checkPrime = (number) => {
  let flag = true;

  if (number < 2) {
    flag = false;
  } else if (number == 2) {
    flag = true;
  } else if (number % 2 == 0) {
    flag = false;
  } else {
    for (let i = 3; i < number - 1; i++) {
      if (number % i === 0) {
        flag = false;
      }
    }
  }

  return flag;
};
const filterPrimeNumber = (array) => {
  return array.filter((element) => {
    return checkPrime(element);
  });
};

let a = [1, 2, 3, 2, 3, 4, 6, 7];

console.log(filterPrimeNumber(a));
