function sumSquare(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  console.log(sum);
}

sumSquare(3);
