const  toDoForm = document.querySelector("#todo-form");
const  toDoInput = document.querySelector("#todo-form input");
const  toDoList = document.querySelector("#todo-list");

const toDos = [];

const saveToDos=()=>{
    localStorage.setItem("todos", toDos);
}

const paintToDo=(newTodo)=>{
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

const deleteToDo=(event)=>{
    const li = event.target.parentElement;
    li.remove();
}

const handleToDoSubmit = (event) =>{
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
