const data = [
  { name: "Tung", age: 27, isSchool: false },
  { name: "Khoa", age: 20, isSchool: true },
  { name: "Triet", age: 18, isSchool: false },
  { name: "Hong", age: 15, isSchool: false },
  { name: "Tring", age: 10, isSchool: false },
];
// Tìm tất cả những người có tuổi lớn hơn 18
// Tìm tất cả những người còn đang đi học
const ageFilter = data.filter((el) => el.age > 18);
console.log(ageFilter);

const isSchoolFilter = data.filter((el) => el.isSchool);
console.log(isSchoolFilter);

//
const ageAverage = data.reduce((sum, el) => (sum += el.age), 0) / data.length;
console.log(ageAverage);
