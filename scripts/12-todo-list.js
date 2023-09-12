const todoList = [{
  name: '', 
  dueDate: ''
}];

renderTodoList(); 

function renderTodoList() { //"render" means to display smth on the page
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div> 
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `; //creates html code for each element

    todoListHTML += html; // adds to the array of all htmls to have one common html code
  });

  /* alternative to <array>.forEach() method right above:

  for (let i = 0; i < todoList.length; i++) { //"Generating the HTML" technique

    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div> 
      <button onclick="
        todoList.splice(${i}, 1); 
        renderTodoList();
      " class="delete-todo-button">Delete</button>
    `; //creates html code for each element

    todoListHTML += html; // adds to the array of all htmls to have one common html code
  }
  */

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML; //fills the div element with todoListHTML as a code

  document.querySelectorAll('.js-delete-todo-button')
   .forEach((deleteButton, index) => {//selects all delete-buttons on the page as an array
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1); 
        renderTodoList();
      })
   }); 
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name=inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  
  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate
  }); //pushes the element to the end of todoList array

  inputElement.value = ''; //resets text in the textbox after clicking Add button
  
  renderTodoList(); //to display on the page after adding a new To-do
}