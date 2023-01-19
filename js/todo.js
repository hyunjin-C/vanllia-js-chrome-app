const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  // JSON.stringify(): js의 object, array 등 어떤 js 코드든 string으로 만들어 줌.
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove(); // UI에만 삭제되는 것임.
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // 삭제 업데이트
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  // JSON.parse(): js에서 사용가능한 object로 만들어줌. 이 경우는 string을 array로 만들어줌
  toDos = parsedToDos; // 이전의 todos를 저장함(업데이트)
  parsedToDos.forEach(paintToDo);
  // forEach: array의 각 item에 대해 function을 실행해줌
}

// array의 item을 유지하고 싶으면 true를 리턴해야됨
// filter는 새로운 array를 만들며, 기존의 array는 변하지 않음
