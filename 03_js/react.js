/*const myRoot = document.getElementById("myRoot");
const mySpan = React.createElement(
    "span",
    {id:"sexy-span", style : {color : "red"}},
    "Hello I'm a span"
); 내장함수의 argument 풀이 : createElement(유효한 html 태그 생성, property(=props가 포함된 object) 정의(id,class 등등 모든 속성들), content(사용자에게 보여줄 text등등)).
ReactDOM.render(mySpan, myRoot);  render(what?, where?) : React element를 가지고 HTML로 만들어 배치.===사용자한테 보여준다.
화면에 글자하나를 나타내는데에 너무 많은 작업이 소요된다. 굳이 보여주는 이유는! React Js는 우리가 해왔던 방식을 거꾸로 하고 있다는 것을 설명한것.
바닐라 js에서 html을 먼저 만들고 js로 가져와서 html을 수정하는 식!
반대로 react js는 모든것이 javascript로 시작하고 html로 끝난다. js에서 시작한다는 것, 이것이 바로 React JS 파워의 핵심이다!
한마디로 js를 이용해 element를 생성하고 ReactJS가 그걸 html로 번역한다는 것. 이것이 React JS의 파워!

원초적인 것(어렵게 풀어쓴)을 좀 더 쉽게=>   */

/*
const myRoot = document.querySelector("#myRoot");
const h3 = React.createElement(
    "h3",
    {
        id : "title",
        onMouseEnter: () => console.log("mouse enter")
    },
    "Hello I'm a span"
);

const btn = React.createElement(
    'button',
    {
        onClick : () => console.log("im clicked"),
        style:{
        backgroundColor : "tomato",
        }
    },
    "Click me"
);
const container = React.createElement("div",null, [h3, btn]); // 2개의 component를 가지고 있는 component를 생성.
ReactDOM.render(container, myRoot);
하나의 statement로 길던 js를 압축하여 js만으로 html을 생성, 이벤트 추가, 콘텐츠 추가를 가능하게 한다.


정리
1. React JS(interactivity의 원동력)와 ReactDOM 코드를 import
2. React JS가 element를 생성하고 event listener를 더하는 것을 도와준다. 즉, interactive power를 가지고 있다.
3. React DOM은 React element들을 가져다가 HTML로 바꿔준다. ReactDOM.render() */






/*
        JSX
JavaScript를 확장한 문법으로 HTML 문법과 친숙하게 사용하여 React 요소들를 만들 수 있게 해준다.
하지만 bable 라이브러리를 사용해야한다. script:type에는 text/babel을 꼭 붙여야 사용할 수 있다. 지금 이 페이지처럼!*/

const myRoot = document.querySelector("#myRoot");
const tit = (<h3 id="title" onMouseEnter={()=>console.log("mouse enter")}>Hello I'm a title</h3>
);
const btn = (<button style={{backgroundColor: "tomato",}} onClick={()=>console.log("im clicked")}>Click me</button>);
const container = React.createElement("div",null,[tit,btn]);
ReactDOM.render(container, myRoot);

