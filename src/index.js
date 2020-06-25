document.addEventListener("DOMContentLoaded", () => {

});


const taskList = document.querySelector('#tasks')
const taskForm = document.querySelector('#create-task-form')

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  handleForm(taskForm);
})

function handleForm(taskForm){
  const newTaskFormData = new FormData(taskForm);
  const newTask = newTaskFormData.get('new-task-description');
  renderTask(newTask);
}

function renderTask(newTask){
  const li = document.createElement('li');
  li.textContent = newTask;
  taskList.append(li)
}


