const todoForm = document.querySelector('.add-todo');
const todoInput = document.querySelector('.add-todo__input');
const emptyStateDiv = document.querySelector('.empty')
const todoListDiv = document.querySelector('.todos');

const todoElement = (content) =>{
    return `
        <div class="todo__text">
            ${content}
        </div>
        <div class="todo__buttons">
            <button class="todo__completed-btn">
                <i class="fa-solid fa-check check"></i>
            </button>
            <button class="todo__delete-btn">
                <i class="fa fa-trash trash" aria-hidden="true"></i>
            </button>
        </div>
`
}

//todos tab
let todos = [];

//main
window.onload = () =>{
    //check if localstorage isn't empty
    if(localStorage.length > 0){
        //refresh todo output
        refreshOutput();
    }
}

//listeners
todoForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    //check if input isn't empty
    if(todoInput.value){
        //save value into variable
        const inpText = todoInput.value;
        //clear input
        todoInput.value = '';
        //add todo object to todos tab
        todos.push({id: todos.length + 1, content: inpText, checked: false});
        //save todos tab in localStorage
        localStorage.setItem('todos', JSON.stringify(todos));
        //refresh output div
        refreshOutput();
    }
});

//functions
const refreshOutput = () =>{
    //cleaning output 
    todoListDiv.innerHTML = '';
    //uptading todos tab
    todos = JSON.parse(localStorage.getItem('todos'));
    //handling empty state div 
    (todos.length > 0) ? emptyStateDiv.style.display = 'none' : emptyStateDiv.style.display = 'block';
    //creating todo divs in output
    todos.forEach(todo =>{
        createTodoDiv(todo.id, todo.content, todo.checked)
    });
}

const createTodoDiv = (id, content, checked) =>{
    //create todo element
    const todo = document.createElement('li');
    //set the structure of element
    todo.innerHTML = todoElement(content);
    //adding id to element
    todo.setAttribute('id', id);
    //adding class to element
    todo.classList.add('todo');
    //adding checked class if todo is checked
    if(checked){
        todo.classList.add('todo--checked'); 
        const completedBtn = todo.querySelector('.todo__completed-btn');
        completedBtn.classList.add('todo__completed-btn--checked');
    }
    //append todo li to list div 
    todoListDiv.appendChild(todo);
}
