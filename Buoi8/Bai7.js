function sumOldNumber(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 1) {
      sum += i;
    }
  }
  console.log(sum);
}

sumOldNumber(5);
