const getInfoFacebook = (str) => {
  return str
    .replace("https://www.facebook.com", "")
    .split(".")
    .join(" ")
    .split("/")
    .join("");
};

console.log(getInfoFacebook("https://www.facebook.com/tung.nguyenthac.1/"));
