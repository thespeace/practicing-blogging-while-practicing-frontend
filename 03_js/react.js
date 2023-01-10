const myRoot = document.getElementById("myRoot")
const mySpan = React.createElement(
    "span",
    {id:"sexy-span", style : {color : "red"}},
    "Hello I'm a span"
); //내장함수의 argument 풀이 : createElement(유효한 html 태그 생성, property 정의(id,class 등등 모든 속성들), content(사용자에게 보여줄 text등등)).
ReactDOM.render(mySpan, myRoot);// render(what?, where?) : React element를 가지고 HTML로 만들어 배치.===사용자한테 보여준다.
//화면에 글자하나를 나타내는데에 너무 많은 작업이 소요된다. 굳이 보여주는 이유는! React Js는 우리가 해왔던 방식을 거꾸로 하고 있다는 것을 설명한것.
//바닐라 js에서 html을 먼저 만들고 js로 가져와서 html을 수정하는 식!
//반대로 react js는 모든것이 javascript로 시작하고 html로 끝난다. js에서 시작한다는 것, 이것이 바로 React JS 파워의 핵심이다!
//한마디로 js를 이용해 element를 생성하고 ReactJS가 그걸 html로 번역한다는 것. 이것이 React JS의 파워!




