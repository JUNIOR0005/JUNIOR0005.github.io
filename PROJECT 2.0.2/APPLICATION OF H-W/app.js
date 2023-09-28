const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
        <span>${taskText}</span>
        <button class="complete-button" onclick="completeTask(this)">Completar</button>
        <button class="delete-button" onclick="deleteTask(this)">Eliminar</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
    }
}

function completeTask(button) {
const li = button.parentElement;
li.classList.toggle('completed');
}


function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}