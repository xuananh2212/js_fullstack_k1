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

formTodos.addEventListener("submit", function (e) {
  e.preventDefault();
  postTodos({ desc: inputTodos.value, status: false });
  var id = listTodos.querySelectorAll("li").length;
  console.log(id);
  renderLi(inputTodos.value, id, listTodos);
  inputTodos.value = "";
  modal.classList.remove("is-show");
});

btnCancel.addEventListener("click", function (e) {
  modal.classList.remove("is-show");
});
