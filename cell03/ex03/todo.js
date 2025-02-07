const ftList = document.getElementById("ft_list");
const newTaskButton = document.getElementById("newTaskButton");


window.onload = () => {
    const tasks = getTasksFromLocalStorage();
    tasks.forEach((task) => addTaskToDOM(task));
};


newTaskButton.addEventListener("click", () => {
    const task = prompt("Enter a new TO DO:");
    if (task && task.trim() !== "") {
        addTaskToDOM(task);
        saveTaskToLocalStorage(task);
    }
});


function addTaskToDOM(task) {
    const taskDiv = document.createElement("div");
    taskDiv.textContent = task;
    taskDiv.className = "todo-item";
    taskDiv.addEventListener("click", () => {
        if (confirm("Do you want to remove this TO DO?")) {
            ftList.removeChild(taskDiv);
            removeTaskFromLocalStorage(task);
        }
    });
    ftList.insertBefore(taskDiv, ftList.firstChild);
}


function saveTaskToLocalStorage(task) {
    const tasks = getTasksFromLocalStorage();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function getTasksFromLocalStorage() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}


function removeTaskFromLocalStorage(task) {
    const tasks = getTasksFromLocalStorage();
    const updatedTasks = tasks.filter((t) => t !== task);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}
