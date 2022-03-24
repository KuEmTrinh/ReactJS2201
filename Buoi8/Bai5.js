// Viết chương trình tính tổng từ 1 đến n

function printSum(n) {
  let sum = 0;
  // Đây là áp dụng vòng lặp

  // for(let i = 1; i <= n; i++){
  //     sum += i;
  // }

  // Đây là áp dụng công thức toán học
  sum = (n * (n + 1)) / 2;
  console.log(sum);
}

printSum(10);
