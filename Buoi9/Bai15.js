const toNormalName = (name) => {
  return name
    .toLowerCase()
    .split(" ")
    .map((el) => {
      return el[0].toUpperCase() + el.slice(1);
    })
    .join(" ");
};

console.log(toNormalName("Vo DAI TRinh"));
