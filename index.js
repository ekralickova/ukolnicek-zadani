const Task = (props) => {
    const { name, due, done } = props;

    return `
        <div class="task">
        <div class="task__body">
          <div class="task__name">${name}</div>
          <div class="task__due">${due}</div>
        </div>
        <div class="task__done">${done === true ? "✓" : ""}</div>
      </div>
   `;
};

const renderTasks = (task) => {
    const tasksList = document.querySelector('.todo__tasks');
    tasksList.innerHTML = task
        .map((task) => Task(task))
        .join('');
};

fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
    .then((response) => response.json())
    .then(renderTasks);

const checkbox = document.querySelector('#checkbox-undone');
checkbox.addEventListener('change', (event) => {
    event.preventDefault();
    let done = '';
    if (event.target.checked) {
        done = '?done=false';
    }
    fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks' + done)
        .then((response) => response.json())
        .then(renderTasks)
}
);
