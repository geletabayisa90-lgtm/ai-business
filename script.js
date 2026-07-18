const addTaskButton = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
li.textContent = task;

li.addEventListener("click", () => {
    li.classList.toggle("completed");
});
const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";

deleteButton.addEventListener("click", (event) => {
    event.stopPropagation();
    li.remove();
});

li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
});