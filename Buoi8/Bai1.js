// Viết chương trình kiểm tra đó có phải là số nguyên tố hay là không

function checkPrime(number) {
  let flag = true;

  if (number < 2) {
    flag = false;
  } else if (number == 2) {
    flag = true;
  } else if (number % 2 == 0) {
    flag = false;
  } else {
    for (let i = 3; i < number - 1; i++) {
      if (number % 2 === 0) {
        flag = false;
      }
    }
  }

  if (flag == true) {
    console.log("n la so nguyen to");
  } else {
    console.log("n khong la so nguyen to");
  }
}

checkPrime(5);
checkPrime(10);
