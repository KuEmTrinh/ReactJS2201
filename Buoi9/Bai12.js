const convertString = (str) => {
  return str.split(" ").join("").split("/n").join("");
};

console.log(convertString("VO    DAI /n TRINH"));
