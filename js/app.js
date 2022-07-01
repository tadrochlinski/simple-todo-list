const todoForm = document.querySelector('.add-todo');
const todoInput = document.querySelector('.add-todo__input');
const emptyStateDiv = document.querySelector('.empty')
const todoList = document.querySelector('.todos');
const checkedBtn = document.querySelector('.todo__completed-btn');

let todoCounter = 0;

const todoElement = (text) =>{
    return `
        <span class="todo__text" contenteditable="true">
            ${text}
        </span>
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

const createTodo = (text) =>{
    const todo = document.createElement('li');
    todo.innerHTML = todoElement(text);
    todo.classList.add('todo');
    todoList.appendChild(todo);
}


todoForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    //check if input isn't empty
    if(todoInput.value != ''){
        todoCounter++;

        //save input text into variabe and clear input after submit
        const inputText = todoInput.value;
        todoInput.value = ''; 

        //set display of empty state div to none when todo is added
        if(todoCounter > 0) emptyStateDiv.style.display = 'none';

        //adding new todo div
        createTodo(inputText);
    } 
});


todoList.addEventListener('click' , (e) =>{
    const item = e.target;

    if(item.classList[0] === 'todo__completed-btn'){
        const todo = item.parentElement.parentElement;
        const button = item;
        button.classList.toggle('todo__completed-btn--checked');
        todo.classList.toggle('todo--checked');
    }

    if(item.classList[2] === 'check'){
        const todo = item.parentElement.parentElement.parentElement;
        const button = item.parentElement;
        button.classList.toggle('todo__completed-btn--checked');
        todo.classList.toggle('todo--checked');
    }
})