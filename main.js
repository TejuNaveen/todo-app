//variables
const todoInput =  document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoContainer = document.querySelector('.todo-container');

const selectList = document.querySelector('.select-list');
//eventlisteners
if(todoButton) {todoButton.addEventListener('click', addTodo, false)};
if(todoContainer) todoContainer.addEventListener('click', deleteTodo);
if(selectList) selectList.addEventListener('change', orderTodo);


//functions
function addTodo(event){
    event.preventDefault();
    //adding div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //adding list
    const todoList = document.createElement('li')
    todoList.classList.add('todo-item');
    todoList.innerText = todoInput.value;
    todoDiv.appendChild(todoList);

    //adding checked button
    const checkedTodo = document.createElement('button')
    checkedTodo.classList.add('checked-button');
    checkedTodo.innerHTML = '&#10003;';
    todoDiv.appendChild(checkedTodo);

    //delete todo button
    const deleteTodo = document.createElement('button')
    deleteTodo.classList.add('delete-button');
    deleteTodo.innerHTML = '&#215;';
    todoDiv.appendChild(deleteTodo);

    //empty input
    if(todoInput.value !== '' && todoInput.value !== null){
        todoContainer.appendChild(todoDiv);
        todoInput.value = "";
    }
    else {
        alert('please add value')
    }

}

function deleteTodo(event){
    const item = event.target;
    //delete todo
    if(item.classList[0] === 'delete-button'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })

    }

    //check todo
    if(item.classList[0] === 'checked-button'){
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}

function orderTodo(event){
    const todos = selectList.childNodes;
    console.log('hi', todos)
    todos.forEach(function(i){
        console.log('target', event.target.value)
        console.log('todo', i)
        switch(event.target.value){
            case 'all':
                break;
            case 'completed':
                if(i.classList.contains("completed")){
                    i.style.display = 'flex';
                }
                else{
                    i.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if(!i.classList.contains('completed')){
                    i.style.display = 'flex';
                }
                else {
                    i.style.display = 'none';
                }
            break;
        }
    })
}