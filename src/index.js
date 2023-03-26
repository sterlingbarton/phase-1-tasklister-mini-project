document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("#new-task-description");
  createTask(input);
  input.value = "";
});
});


function createTask(todo) {
  const ul = document.getElementById("tasks");
  const li = document.createElement("li");
  li.textContent = todo.value;
  ul.appendChild(li);
}