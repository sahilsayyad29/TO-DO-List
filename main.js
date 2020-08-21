//selectors
const btn = document.querySelector(".inputbtn");
const inputText = document.querySelector(".inputtext");
const todoList = document.querySelector(".todo-list");

//event listener
btn.addEventListener("click", addFunction);
todoList.addEventListener("click", deleteCheck);

//function
function addFunction(e) {
  e.preventDefault();

  //todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //creating li
  const newTodo = document.createElement("li");
  newTodo.innerText = inputText.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //cheack button
  const completedButton = document.createElement("button");
  completedButton.innerText = "check";
  completedButton.classList.add("completed-btn");
  todoDiv.appendChild(completedButton);
  //trash button
  const trashButton = document.createElement("button");
  trashButton.innerText = "trash";
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //append to list
  todoList.appendChild(todoDiv);
  inputText.value = "";
}

//delete function
function deleteCheck(event) {
  const item = event.target;

  //delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
  //check marking list item
  if (item.classList[0] === "completed-btn") {
    const todo = item.parentElement;
    todo.classList.add("completed");
  }
}
