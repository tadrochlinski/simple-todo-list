const todoForm = document.querySelector('.add-todo');
const todoInput = document.querySelector('.add-todo__input');
const emptyStateDiv = document.querySelector('.empty')
const todoList = document.querySelector('.todos');

const todoElement = (text) =>{
    return `
        <div class="todo__text">
            ${text}
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

