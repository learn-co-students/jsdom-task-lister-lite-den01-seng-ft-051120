document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  form.addEventListener("submit", function(event){
    event.preventDefault();
    const input = document.getElementById('new-task-description').value
    console.log(selection)
    printToDos(input)
  })
});

function printToDos(input){
  const taskList = document.getElementById('tasks')
  $li = document.createElement('li')
  $li.textContent = input
  $li.id = priority 
  taskList.appendChild($li)
}