//In ra các số lẻ từ 1 đến n

function printOddNumber(n){
    for(let i = 1; i <= n; i++){
        if(i % 2 == 1){
            console.log(i)
        }
    }
}

printOddNumber(10)