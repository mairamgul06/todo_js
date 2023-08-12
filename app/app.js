const add = document.querySelector('.btn-add'),
      message = document.querySelector('.message'),
      todo = document.querySelector('.todo');
      clearAll = document.querySelector('.btn-clear');
     let todoList = [];
     if(localStorage.getItem('todo')){
        todoList = JSON.parse(localStorage.getItem('todo'));
        addMessages();
     }
   add.addEventListener('click', function(){
    newTodo = {
        todo: message.value,
        checked: false
    }
     todoList.push(newTodo);
     addMessages();
     localStorage.setItem('todo', JSON.stringify(todoList));
   })
   function addMessages(){
    let addMessage = '';
    todoList.forEach(function(item, i){
      const newCount = document.querySelector('.count');
      newCount.textContent = todoList.length;
        addMessage += `
        <li class='li'>
        <input type='checkbox' class='check' id='item_${i}' ${item.checked ? 'checked' : ''}/>
        <label for='item_${i}'>${item.todo}</label>
        <button class='delete' onclick='deleteTodo(${i});'>x</button>
        </li>
        `;
        todo.innerHTML = addMessage;
    })
    message.value = '';
   }
   todo.addEventListener('change', function(event){
      let valueLabel = todo.querySelector('[for='+ event.target.getAttribute('id') +']').innerHTML; 
      todoList.forEach(function(item){
        if(item.todo === valueLabel){
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
      })
    
   })
   

   function deleteTodo(i){
    let getLocalStorage = localStorage.getItem('todo');
    todoList = JSON.parse(getLocalStorage);
    todoList.splice( i, 1);
    localStorage.setItem('todo', JSON.stringify(todoList));
    addMessages();
   }
  
   clearAll.onclick = () =>{
    todoList=[];
    localStorage.setItem('todo', JSON.stringify(todoList));
    addMessages();
   }