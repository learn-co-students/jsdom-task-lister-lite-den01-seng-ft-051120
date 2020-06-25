document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('input[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault()
    const $newTask = document.querySelector('input[type="text"]')
    addToDo($newTask.value)
    $newTask.value = ""
  })
});

function addToDo(toDo) {
  const $tasks = document.getElementById('tasks')
  const $task = document.createElement('li')
  $task.textContent = toDo
  $task.addEventListener('dblclick', event => doubleClick(event))
  remove($task)
  $tasks.append($task)
}

function doubleClick(event) {
  event.stopPropagation() 
  const originalText = event.target.textContent.slice(0, -1)
  // replace the li with a field for update 
  event.target.innerHTML = `
    <form>
      <input type='text' value='${originalText}' name='update' />
    </form>
  `
  console.log('event.target = ', event.target)
  event.target.addEventListener('submit', updateTask)
}

function updateTask(event) {
  event.preventDefault()
  const $formData = new FormData(event.target)
  // console.log(event.target)
  // console.log(...$formData)
  const updatedToDo = $formData.get('update')
  console.log('parentNode', event.target.parentNode)
  event.target.parentNode.remove()
  addToDo(updatedToDo)
}

function remove($task) {
  const $remove = document.createElement('button')
  $remove.textContent = 'x'
  $remove.addEventListener('click', event => event.path[1].remove())
  $task.append($remove)
}
