let todoList = [
  {
    item: 'Buy Milk',
    dueDate: '4/27/2024'
  },
  {
    item: 'Go to Office',
    dueDate: '4/27/2024'
  }
];

displayItems();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item: todoItem, dueDate: todoDate});
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    let {item, dueDate} = todoList[i];
    newHtml += `
      <div class='flex justify-between p-5 border-2 m-2'>
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class='btn-delete bg-red-800 text-white px-4 h-9 rounded hover:scale-105' 
      onclick="todoList.splice(${i}, 1);
      displayItems();"
      >Delete</button></div>
    `;
  }
  containerElement.innerHTML = newHtml;
}