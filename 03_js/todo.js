const  toDoForm = document.querySelector("#todo-form");
const  toDoInput = document.querySelector("#todo-form input");
const  toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"

let toDos = [];

const saveToDos=()=>{
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); /*JavaScript 값이나 객체를 JSON 문자열로 변환*/
    /*JSON.parse() 메서드는 JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성*/
}

const paintToDo=(newTodo)=>{
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

const deleteToDo=(event)=>{
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

const handleToDoSubmit = (event) =>{
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text :newTodo,
        id:Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
