const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
  if (taskInput.value !== "") {
    const task = document.createElement("li");
    task.innerHTML = taskInput.value;
    taskList.appendChild(task);
    taskInput.value = "";
    task.addEventListener("click", () => {
      task.classList.toggle("completed");
    });
  }
}
