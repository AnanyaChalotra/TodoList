let tasks = [];
let taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
let tasksCounter = document.getElementById('tasks-counter');

console.log('Working 222');

function addtasktoDOM(task) {
    const li = document.createElement('li');
    li.innerHTML = `
    <input type="checkbox" id="${task.id}{" data-id="12" class="custom-checkbox" ${task.done?'checked':''}>
          <label for="${task.id}">${task.text}</label>
          <img src="bin.svg" class="delete" data-id="${task.id}" />
    `;

    taskList.append(li);
}


function renderList () {
    taskList.innerHTML = '';
    for(let i = 0;i< tasks.length;i++)
    {
        addtasktoDOM(tasks[i]);
    }

    tasksCounter = tasks.length;
}

function toggletask (taskId) {
    const task = tasks.filter(function (task) {return task.id == taskId;})
    if(task.length > 0)
    {
        const currentTask = task[0];
        currentTask.done = !currentTask.done;
        renderList();
        showNotification("Task Toggled Succesfully");
    }
}

function deleteTask (taskId) {

    const newTask = tasks.filter(function(task) {
        return task.id != taskId;
    })
    tasks = newTask;
    renderList();
    showNotification('Task deleted succesfully');
}

function addTask (task) {

    if(task)
    {
        tasks.push(task);
        renderList();
        showNotification("Task Added Succesfully!");
        return;
    }
    else
    {
        showNotification("Task Could not be added");    
    }
}

function showNotification(text) {
    alert(text);
}

function handleInputkeypress(e) {

    if(e.key == 'Enter')
    {
        const text = e.target.value;
        if(!text)
        {
            showNotification('Task Text cannot be empty');
            return;
        }

        const task = {
            text, 
            id: Date.now().toString(),
            done: false 
        }

        e.target.value = '';
        addTask(task);
    }
}

addTaskInput.addEventListener('keyup',handleInputkeypress);