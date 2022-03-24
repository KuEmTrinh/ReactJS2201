var readlineSync = require("readline-sync");

//Show full case

const data = [
  { id: "lzyKEDrLu", name: "Tung", age: 20, sex: "male" },
  { id: "VQzDC5wlD", name: "Duc", age: 15, sex: "male" },
  { id: "xlnUUWABM", name: "Hoang", age: 13, sex: "male" },
  { id: "lylBDPuZD", name: "Khoa", age: 28 },
  { name: "Hong", age: 29, sex: "male" },
];

let showCase = () => {
  console.log("               Student Managerment                  ");
  console.log("====================================================");
  console.log(" 1. Show all student ");
  console.log(" 2.Create student and return Menu");
  console.log(" 3.Delete student");
  console.log(" 4.Edit student");
  console.log(" 5.Find student by name");
  console.log(" 6.Sort student by name ascending");
  console.log(" 7.Sort student by age ascending");
  console.log(" 8.Delete all student");
  console.log(" 9. Sum student age");
  console.log(" 10.Exit");
};
showCase();
// repeat
const repeat = () => {
  showCase();
  let selectCase = readlineSync.question("Select Case : ");
  runCase(selectCase);
};

//show student
const showStudent = () => {
  console.log(data);
};

//create student
const createStudent = () => {
  let id = readlineSync.question("Student id : ");
  let name = readlineSync.question("Student name : ");
  let age = readlineSync.question("Student age : ");
  let sex = readlineSync.question("Student sex : ");
  data.push({ id: id, name: name, age: age, sex: sex });
};

//delete student
const deleteStudent = () => {
  let id = readlineSync.question("Input u want delete student id : ");
  data.forEach((el, index) => {
    if (el.id == id) {
      data.splice(index, 1);
    }
  });
};

//edit student
const editStundent = () => {
  let id = readlineSync.question("Do u want edit student id : ");
  let findStudent = false;
  data.forEach((el, index) => {
    if (el.id == id) {
      findStudent = true;
      indexOfStudent = index;
    }
  });
  if (findStudent) {
    let name = readlineSync.question("Student name : ");
    let age = readlineSync.question("Student age : ");
    let sex = readlineSync.question("Student sex : ");
    data[indexOfStudent].name = name;
    data[indexOfStudent].age = age;
    data[indexOfStudent].sex = sex;
  } else {
    console.log("No found any more student by id!");
  }
};

//find student by name
const findStudentByName = () => {
  let name = readlineSync.question("Do u want find student name is : ");
  let student = data.filter((el) => el.name == name);
  if (student) {
    console.log(student);
  } else {
    console.log("No found any more student by name!");
  }
};

// convert name
const toNormalName = (name) => {
  return name
    .toLowerCase()
    .split(" ")
    .map((el) => {
      return el[0].toUpperCase() + el.slice(1);
    })
    .join(" ");
};
//sort by name
const sortStudentByName = () => {
  data.forEach((el) => {
    el.name = toNormalName(el.name);
  });
  data.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
};

// sort by age
const sortStudentByAge = () => {
  data.sort((a, b) => {
    if (a.age < b.age) {
      return -1;
    }
    if (a.age > b.age) {
      return 1;
    }
    return 0;
  });
};

//delete all student
const deleteAllStudent = () => {
  data.splice(0);
};

//sum age
const sumStudentAge = () => {
  let sumAge = data.reduce((sum, el) => {
    return (sum += el.age);
  }, 0);
  console.log(sumAge);
};

const runCase = (select) => {
  switch (select) {
    case "1":
      showStudent();
      repeat();
      break;
    case "2":
      createStudent();
      showStudent();
      repeat();
      break;
    case "3":
      deleteStudent();
      showStudent();
      repeat();
      break;
    case "4":
      editStundent();
      showStudent();
      repeat();
      break;
    case "5":
      findStudentByName();
      repeat();
      break;
    case "6":
      sortStudentByName();
      showStudent();
      repeat();
      break;
    case "7":
      sortStudentByAge();
      showStudent();
      repeat();
      break;
    case "8":
      deleteAllStudent();
      showStudent();
      repeat();
      break;
    case "9":
      sumStudentAge();
      repeat();
      break;
    case "10":
      console.log("Exit");
      break;
    default:
      console.log("Select case from 1 to 10 pls");
      repeat();
      break;
  }
};
repeat();
