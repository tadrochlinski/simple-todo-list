const todoForm = document.querySelector('.add-todo');
const todoInput = document.querySelector('.add-todo__input');
const emptyStateDiv = document.querySelector('.empty')
const todoList = document.querySelector('.todos');

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

const handleCompleting = (item) =>{
    todo = item.closest('li.todo');
    completedBtn = item.closest('button');
    todo.classList.toggle('todo--checked');
    completedBtn.classList.toggle('todo__completed-btn--checked');
}

todoList.addEventListener('click' , (e) =>{
    const item = e.target;

    if(item.classList[2] === 'check' || item.classList[0] === 'todo__completed-btn')
        handleCompleting(item);
})