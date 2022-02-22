//Viết chương trình in ra các số nguyên tố từ 1 đến n

function checkPrime(number){
    let flag = true
    for(let i = 2; i < number - 1; i++){
        if(number % i == 0){
            flag = false
        }
    }

    if(flag == true){
        console.log(number)
    }
}

function printPrimeNumber (n) {
    for(let i = 1; i <= n; i++){
        checkPrime(i);
    }
}

printPrimeNumber(10)