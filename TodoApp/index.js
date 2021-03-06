// selector all element

const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const pendingTask = document.querySelector(".pendingTask");
const clearAll = document.querySelector(".footer button");
const taskInput = document.querySelector("#task");
// local storage
showTask();
addBtn.onclick = () => {
  let userEnterValue = inputBox.value;
  let getLocalStorage = localStorage.getItem("Newtodo");
  if (!getLocalStorage) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorage);
  }
  console.log(listArray);
  if (userEnterValue == "") {
    alert("Hãy nhập gì đó");
  } else {
    listArray.push(userEnterValue);
  }
  localStorage.setItem("Newtodo", JSON.stringify(listArray));
  showTask();
};
clearAll.onclick = deleteAll;

function showTask() {
  let getLocalStorage = localStorage.getItem("Newtodo");
  if (!getLocalStorage) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorage);
  }
  let newTask = "";
  listArray.forEach((item, index) => {
    newTask += `<li><p ondblclick ="editTask(${item})"> ${item}</p> <span onclick="deleteTask(${index})"  class="icon"><i class="fa-solid fa-trash"></i></span>  </li>`;
  });
  todoList.innerHTML = newTask;
  inputBox.value = "";
  pendingTask.textContent = listArray.length;
}
function deleteAll() {
  listArray = [];
  localStorage.setItem("Newtodo", JSON.stringify(listArray));
  showTask();
}

function deleteTask(index) {
  listArray.splice(index, 1);
  localStorage.setItem("Newtodo", JSON.stringify(listArray));
  showTask();
}

function editTask(item) {
  alert(item);
}
// bài tạp về nhà hoàn thiện các chức năng todo app
// - validate ô input có kí tự mới được phép add task, click enter cũng add được task
// - double click -> xuất hiện ô input để edit
// - có ô checkbox để check task đã hoàn thành hay chưa
