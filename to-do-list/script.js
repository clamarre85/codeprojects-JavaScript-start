const formE1 = document.querySelector(".form");

const inputE1 = document.querySelector(".input");

const ulE1 = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"));
//console.log(list);

/*
if (list) {
  list.forEach((task) => {
    toDoList(task);
  });
}
*/

if (list) {
  list.forEach((task) => {
    toDoList(task);
  });
}

//console.log(myList);

formE1.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
});

function toDoList(task) {
  let newTask = inputE1.value;

  if (task) {
    newTask = task.name;
  }

  const liE1 = document.createElement("li");

  if (task && task.checked) {
    liE1.classList.add("checked");
  }

  liE1.innerText = newTask;
  ulE1.appendChild(liE1);

  inputE1.value = "";

  const checkBtnE1 = document.createElement("div");
  checkBtnE1.innerHTML = `<i class="fas fa-check-square"></i>`;

  liE1.appendChild(checkBtnE1);

  const trashBtnE1 = document.createElement("div");
  trashBtnE1.innerHTML = ` <i class="fas fa-trash"></i>`;
  liE1.appendChild(trashBtnE1);

  checkBtnE1.addEventListener("click", () => {
    liE1.classList.toggle("checked");
    updateStorage();
  });

  trashBtnE1.addEventListener("click", () => {
    liE1.remove();
    updateStorage();
  });

  updateStorage();
}

function updateStorage() {
  const liE1s = document.querySelectorAll("li");
  console.log(liE1s);
  list = [];

  liE1s.forEach((liE1) => {
    list.push({
      name: liE1.innText,
      checked: liE1.classList.contains("checked"),
    });
  });

  /*console.log(
    liE1s.forEach(() => {
      list.push({
        name: "Sadeed",
        checked: "checked",
      });
    })
  );
*/
  //console.log(list);

  localStorage.setItem("list", JSON.stringify(list));
}