document.addEventListener("DOMContentLoaded", () => {
  const $form = document.querySelector('#create-task-form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const task = formData.get('new-task-description');
    const $li = document.createElement('li');
    $li.textContent = task
    const $deleteButton = document.createElement('button')
    $deleteButton.textContent = "x"
    $deleteButton.addEventListener('click', () => { $li.remove() })
    $li.append($deleteButton)
    document.querySelector('#tasks').append($li)
  })
});
