function addTask() {
  var task = document.getElementById("task").value;
  if (task === "") {
    alert("Please enter a task.");
    return;
  }
  var list = document.getElementById("taskList");
  var li = document.createElement("li");
  var text = document.createTextNode(task);
  li.appendChild(text);
  var button = document.createElement("button");
  button.appendChild(document.createTextNode("Delete"));
  button.addEventListener("click", function () {
    list.removeChild(li);
  });
  li.appendChild(button);
  list.appendChild(li);
  document.getElementById("task").value = "";
}

function deleteTask(button) {
  var li = button.parentNode;
  var list = li.parentNode;
  list.removeChild(li);
}
