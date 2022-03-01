const students = [
  {
    id: "T3HXX1",
    firstName: "NgAN",
    lastName: "Duong Thuy",
  },
  {
    id: "T3HXX2",
    firstName: "Ha",
    lastName: "Do THI Thu",
  },
  {
    id: "T3HXX5",
    firstName: "Minh",
    lastName: "Nguyen Nhat",
  },
  {
    id: "T3HXX7",
    firstName: "AnH",
    lastName: "Nguyen Nhat",
  },
];

const toNormalName = (name) => {
  return name
    .toLowerCase()
    .split(" ")
    .map((el) => {
      return el[0].toUpperCase() + el.slice(1);
    })
    .join(" ");
};

students.forEach((element) => {
  element.firstName = toNormalName(element.firstName);
  element.lastName = toNormalName(element.lastName);
});

let findName = students.filter((element) => {
  let name = element.firstName;
  if ((name.search("a") != -1 || name.search("A") != -1) && name.length >= 3) {
    return element;
  }
});

console.log(findName);
