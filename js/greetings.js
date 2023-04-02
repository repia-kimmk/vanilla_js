// todo.js

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// 로컬 스토리지에서 할 일 리스트를 가져와 화면에 출력합니다.
const renderTodoList = () => {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  let todoHtml = "";
  for (let i = 0; i < todos.length; i++) {
    todoHtml += `<li>${i + 1}. ${todos[i]}</li>`;
  }
  todoList.innerHTML = todoHtml;
};

// 할 일을 추가하고 화면에 출력합니다.
const addTodo = (todo) => {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodoList();
};

// 이벤트 리스너를 등록합니다.
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const todo = todoInput.value.trim();
  if (todo !== "") {
    addTodo(todo);
    todoInput.value = "";
  }
});

// 초기 로딩 시 할 일 리스트가 있다면 화면에 출력합니다.
renderTodoList();
