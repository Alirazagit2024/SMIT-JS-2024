let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Task cannot be empty!");
    return;
  }

  tasks.push({ text: taskText, id: Date.now() });
  taskInput.value = "";
  displayTasks();
}

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button class="edit" onclick="editTask(${task.id})">Edit</button>
                <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
    taskList.appendChild(li);
  });
}

function editTask(id) {
  const newTask = prompt("Edit your task:");
  if (newTask) {
    tasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newTask } : task
    );
    displayTasks();
  }
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  displayTasks();
}
