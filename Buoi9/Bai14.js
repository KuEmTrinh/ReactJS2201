const findString = (s1, s2) => {
  let lastIndex = -1;
  s1.split(" ").map((el, index) => {
    if (s2 == el) {
      lastIndex = index + 1;
    }
  });

  return lastIndex;
};

console.log(findString("This i a beautiful day", "is"));
console.log(findString("This si a beautiful day", "is"));
console.log(findString("This is a beautiful day", "is"));
console.log(findString("This is a beautiful day, is", "is"));
