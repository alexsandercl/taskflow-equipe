// TaskFlow - lógica da aplicação
// Estado em memória (sem backend / sem banco de dados, conforme requisitos)

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const emptyState = document.getElementById('empty-state');
const taskSummary = document.getElementById('task-summary');

let tasks = [];
let nextId = 1;

function addTask(title) {
  tasks.push({
    id: nextId++,
    title: title.trim(),
    completed: false,
  });
  render();
}

function toggleTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = !task.completed;
    render();
  }
}

function removeTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  render();
}

function render() {
  taskList.innerHTML = '';

  if (tasks.length === 0) {
    emptyState.classList.add('visible');
    taskSummary.textContent = '';
    return;
  }

  emptyState.classList.remove('visible');

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.className = 'task-item' + (task.completed ? ' completed' : '');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTask(task.id));

    const span = document.createElement('span');
    span.textContent = task.title;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = '✕';
    removeBtn.setAttribute('aria-label', 'Remover tarefa');
    removeBtn.addEventListener('click', () => removeTask(task.id));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(removeBtn);
    taskList.appendChild(li);
  });

  const done = tasks.filter((t) => t.completed).length;
  taskSummary.textContent = `${done} de ${tasks.length} tarefas concluídas`;
}

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = taskInput.value.trim();
  if (!value) return;
  addTask(value);
  taskInput.value = '';
  taskInput.focus();
});

render();
