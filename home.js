const input = document.getElementById("todo");
const btn = document.getElementById("btn");
const todoList = document.getElementById("todo-list");

let todos = [];

window.onload = ()=>{
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.forEach((todo)=>addtodo(todo));
}

btn.addEventListener('click',()=>{
  todos.push(input.value);
  localStorage.setItem('todos',JSON.stringify(todos));
  addtodo(input.value);
  input.value = '';
}); 

function addtodo(todo){
  let task = document.createElement('p');
  task.innerText = todo;
  todoList.appendChild(task);
  task.addEventListener('click',()=>{
    task.style.textDecoration = "line-through";
    remove(todo); 
  });
  task.addEventListener('dblclick',()=>{
    todoList.removeChild(task);
    remove(todo);
  });
};

function remove(todo){
  let index = todos.indexOf(todo);
  if(index>-1){
    todos.splice(index,1);
  }
  localStorage.setItem('todos',JSON.stringify(todos));
};