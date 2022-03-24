// (((a +b) /m *n )+ 8 ) *k
// phép tính cộng: mất 3s
// phép tinh nhân: mất 2s
// phép tính chia: mất 4s

const addition = (a, b, callback) => {
  console.log("addition Running 3 second");
  setTimeout(() => {
    let additionResult = a + b;
    console.log("addition result: ", additionResult);
    callback(additionResult);
  }, 3000);
};

const division = (a, b, callback) => {
  console.log("division Running 4 second");
  setTimeout(() => {
    let divisionResult = a / b;
    console.log("division result: ", divisionResult);
    callback(divisionResult);
  }, 4000);
};

const multiplication = (a, b, callback) => {
  console.log("multiplication Running 2 second");
  setTimeout(() => {
    let multiplicationResult = a * b;
    console.log("multiplication result: ", multiplicationResult);
    callback(multiplicationResult);
  }, 2000);
};

const lastResult = (a, b, m, n, k) => {
  addition(a, b, (additionResult) => {
    division(additionResult, m, (divisionResult) => {
      multiplication(divisionResult, n, (multiplicationResult) => {
        addition(multiplicationResult, 8, (additionResult) => {
          multiplication(additionResult, k, (lastResult) => {
            console.log("Last Result is: ", lastResult);
          });
        });
      });
    });
  });
};

lastResult(1, 2, 3, 8, 8);
