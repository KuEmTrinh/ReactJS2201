function checkSym(str) {
  let maxLength = str.length;
  let flag = true;
  for (let i = 0; i < maxLength / 2; i++) {
    if (str[i] == str[maxLength - 1 - i]) {
      flag = true;
    } else {
      flag = false;
    }
  }

  if ((flag = false)) {
    console.log("No");
  } else {
    console.log("Yes");
  }
}

checkSym("123456787654321");
