// Viết chương trình kiểm tra đó có phải là số nguyên tố hay là không

function checkPrime(number){
    let flag = true
    for(let i = 2; i < number - 1; i++){
        if(number % i == 0){
            flag = false
        }
    }

    if(flag == true){
        console.log(number + " is Prime")
    }else{
        console.log(number + " is not Prime")
    }
}

checkPrime(5);
checkPrime(10);