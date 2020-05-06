const input = document.querySelector('.inputField');
const form = document.querySelector('form');
const taskListWrapper = document.querySelector('.taskList');
const taskList = [];
const myStorage = localStorage;

// localStorage.clear();

//wyrenderoanie listy widocznej w html
const renderList = () => {
    taskListWrapper.textContent = '';
    taskList.forEach((task, key) => {
        task.key = key;
        taskListWrapper.appendChild(task);
    });
}

//dodanie zadania
const addTask = (e) => {
    e.preventDefault();
    const taskName = input.value;
    if (taskName === '') {
        alert('Nie wprowadziłeś nazwy zadania');
        return;
    } else {
        const task = document.createElement('li');
        task.innerHTML = taskName + '<i class="material-icons">delete</i>';
        task.classList.add('liItem');
        taskList.push(task);
        renderList();

        const deleteIcons = Array.from(document.querySelectorAll('.material-icons'));
        deleteIcons.forEach(icon => {
            icon.style.cursor = 'pointer';
            icon.style.fontSize = '42px';
        })
        input.value = '';
    }
}

form.addEventListener('submit', addTask);

//usuwanie zadania
taskListWrapper.addEventListener('click', function (e) {
    if (e.target && e.target.className == 'material-icons') {
        e.target.parentNode.remove();
        const index = e.target.parentNode.key;
        taskList.splice(index, 1);
        renderList();
    } else {
        return;
    }
});