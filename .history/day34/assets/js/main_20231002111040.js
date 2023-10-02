import {
  todos,
  listTodos,
  listTodoCompleted,
  renderUi,
  btnAddTodo,
  modal,
  btnCancel,
  btnSave,
  inputTodos,
  formTodos,
  renderLi,
} from "./renderUi.js";
import { getTodos, postTodos, deleteTodos, patchTodos } from "./crud.js";
renderUi();
btnAddTodo.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.toggle("is-show");
});

async function getId(desc, listTodos) {
  const todos = await getTodos();
  var id = Number(todos.length) + 1;
  console.log(id);
  renderLi(desc, id, listTodos);
}

formTodos.addEventListener("submit", function (e) {
  e.preventDefault();
  postTodos({ desc: inputTodos.value, status: false });
  getId(inputTodos.value, listTodos);
  inputTodos.value = "";
  modal.classList.remove("is-show");
});

btnCancel.addEventListener("click", function (e) {
  modal.classList.remove("is-show");
});

listTodos.addEventListener("click", function (e) {
  const li = e.target.parentElement.parentElement.parentElement;
  if (e.target.matches(".btn-remove")) {
    console.log(li);
  }
});
