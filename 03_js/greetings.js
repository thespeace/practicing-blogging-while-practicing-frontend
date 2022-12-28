document.addEventListener('DOMContentLoaded', () => {
    alert("Welcome, Vanilla Js World!");
})

const toggle=(el)=>{
    el.parentNode.nextElementSibling !== null ?
        el.parentNode.nextElementSibling.style.display === 'none' ? el.parentNode.nextElementSibling.style.display = ''
                                                                  : el.parentNode.nextElementSibling.style.display = 'none'
    : alert("준비된 코드가 없습니다."); }
    /*if(el.parentNode.nextElementSibling !== null){
        if(el.parentNode.nextElementSibling.style.display === 'none'){ el.parentNode.nextElementSibling.style.display = ''; }
        else{ el.parentNode.nextElementSibling.style.display = 'none'; }
    }else{ alert("준비된 코드가 없습니다."); }*/

//7
const clickSevenEl = () => { alert(document.querySelector("#sevenEl").innerText); }
document.querySelector("#sevenClick").addEventListener("click", clickSevenEl);

//8,9
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HiDDEN_CLASSNAME = "hidden"; //String만 포함된 변수, 중요하지 않은 내용은 대문자로 표기(관습)
const USERNAME_KEY = "username";
const onLoginSubmit = (event) => {
    event.preventDefault();
    loginForm.classList.add(HiDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    alert(`localStorage.setItem : ${localStorage.getItem(USERNAME_KEY)}!!`);
}

const paintGreetings=(username)=>{
    greeting.innerText = `Hello! ${username}`; //백틱 기호를 사용하여 변수만 넣어주면 끝
    greeting.classList.remove(HiDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HiDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}

//10
const clock = document.querySelector("div#clock");
const sayHello = () => console.log("hello");
setInterval(sayHello, 5000); // sayHello 함수를 5초마다 실행.
/*setTimeout(() => console.log('Loaded'), 5000);*/
setTimeout(sayHello, 5000); // sayHello 함수를 5초뒤에 한번 실행.
