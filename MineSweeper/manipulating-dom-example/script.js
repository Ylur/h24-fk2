// Function to add a new todo
function addTodo() {
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  if (todoInput.value.trim() === '') {
    alert('Please enter a todo!');
    return;
  }

  // Create a new list item (li)
  const newTodo = document.createElement('li');

  // Create the span that holds the todo text
  const todoText = document.createElement('span');
  todoText.textContent = todoInput.value;

  // Create the complete button
  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.classList.add('complete-btn');
  completeButton.onclick = function() {
    toggleComplete(this);
  };

  // Create the remove button
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.onclick = function() {
    removeTodo(this);
  };

  // Create a div to hold the action buttons (complete & remove)
  const buttonContainer = document.createElement('div');
  buttonContainer.appendChild(completeButton);
  buttonContainer.appendChild(removeButton);

  // Append the text and buttons to the new todo item
  newTodo.appendChild(todoText);
  newTodo.appendChild(buttonContainer);

  // Append the new todo item to the todo list
  todoList.appendChild(newTodo);

  // Clear the input field
  todoInput.value = '';
}

// Function to remove a todo
function removeTodo(button) {
  const todoItem = button.parentElement.parentElement;
  todoItem.remove();
}

// Function to toggle completed state
function toggleComplete(button) {
  const todoItem = button.parentElement.parentElement;
  todoItem.classList.toggle('completed');
}
