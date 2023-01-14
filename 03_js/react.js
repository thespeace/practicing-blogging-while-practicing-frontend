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

/*const myRoot = document.querySelector("#myRoot");
const Tit =()=> (
    <h3 id="title"
        onMouseEnter={()=>console.log("mouse enter")}
    >
        Hello I'm a title
    </h3>
);
const Btn =()=> (
    <button
        style={{
            backgroundColor: "tomato",
        }}
        onClick={()=>console.log("im clicked")}
    >
        Click me
    </button>
);
const Container =()=>(
    <div>
        <button>Hello</button>
        <Tit />
        <Btn />
    </div>
);{/!*****************직접 만든 컴포넌트는 무조건 첫글자가 대문자여야한다. <-> 소문자로 적으면 React 랑 JSX는 이게 HTML태그라고 생각한다******************!/}
ReactDOM.render(<Container/>, myRoot);*/

    /*변경된 부분만 업데이트된다는게 왜 좋은건가?
    리액트가 아닌 경우, 일반 자바스크립트를 쓴 브라우저는 노드정보가 바뀔때마다 노드트리를 처음부터 5단계에 걸쳐 다시 생성한다.
    근데 리액트는 가상돔을 써서 우리 시야에 보이는 부분만 수정해서 보여주고 모든 업뎃이 끝나면 일괄로 합쳐서 실제 돔에 던져준다!
    브라우저 작동원리와 연관있는 것으로, 프론트 엔드의 경우 이 렌더트리 단계를 얼마나 최적화하는가가 중요하다! 이상!*/


/* reRendering ! 하지만 최선의 방법은 아니다! 최선의 방법은 뒤에서 뒤에서 =====*/

/*const myRoot = document.querySelector("#myRoot");
let counter = 0; /!*변수들을 jsx에 전달하는 방식*!/
const countUp=()=>{
    counter = counter + 1;
    render();
}
const render=()=>{ 리렌더링 함수를 만들어 호출하여 ui에 변수의 업데이트를 출력하기.
    ReactDOM.render(<Container/>, myRoot);
}
const Container = () =>( 해당 컴포넌트가 #myRoot 태그에 담아 호출되면, React Element => html element
    <div>
        <h3>Total clicks : {counter}</h3> = 변수추가는 중괄호로 해결.
        <button onClick={countUp}>Click me</button>
    </div>
);
render;

여기에서 멋진 것은 vanilla js 를 사용하면 연관되어 있는 모든 컴포넌트(html element)들이 reRendering할때 새로 만들어져 뿌려지지만,
React.js는 굉장히 똑똑해서 전체를 재 생성할 필요 없이 바뀐 부분만 새로 생성할 수 있게 도와준다.
*/

/*===>   reRendering을 하는 더 좋은 방법은? React.js 어플 내에서 데이터를 보관하고 자동으로 reRendering을 일으킬 수 있는 최고의 방법을 알아 보자! 그건 바로 State!  */

/*
리액트JS에서 데이터를 저장시켜 자동으로 리렌더링을 일으킬 수 있는 방법
const data = React.useState();를 console.log 시키면
[undefined, f ] -> undefined와 함수가 적힌 배열이 나타남
undefined는 data이고 f는 data를 바꿀 때 사용하는 함수
React.useState() 함수는 초기값을 설정할 수 있음
즉, undefined는 초기값이고 두 번째 요소인 f는 그 값을 바꾸는 함수


보통 배열을 선언할 때 const box = ['pen', 'speaker', 'books'] 이렇게 하지만
이걸 꺼내서 쓰고 싶을 때는 구조 분해 할당을 쓴다. 방법은 그냥 뒤집기만 하면 되는데,

const [a, b, c] = box;

a 를 찍으면 'pen' 이 나오고 b를 찍으면 'speaker'가 나오고 c를 찍으면 'books'가 나온다. 이때의 a,b,c는 일회성으로 한 번 쓰고 사라지는 게 아니라 구조 분해 할당을 통해 변수로 선언한 것이기 때문에 a,b,c는 여러 번 사용할 수 있게 된다.(이때 주의해야 할 점은 구조 분해 할당을 할 때 ''따옴표를 사용하지 않는 것이다. 구조 분해 할당은 변수 선언이기 때문에 const 'x' = 1 변수 선언을 이렇게 하지 않는 것처럼 따옴표를 쓰지 않는다.)

구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 **변수**에 담을 수 있게 하는 JavaScript 표현식입니다.[MDN]*/

const myRoot = document.querySelector("#myRoot");

const App =()=> {
    let [counter, setCounter] = React.useState(0); /*useState()는 우리한테 배열 하나를 주는데, 첫번재 요소는 우리가 담으려는 data값이고, 두번째 요소는 이 data값을 바꿀때 사용할 modifier이다.
                                                   더불어 useState()함수는 counter같은 데이터를 숫자형 데이터로 건네줄거고 그 데이터 값을 바꿀 함수도 함께 준다.*/
    const onClick =()=>{
        setCounter((current) => current + 1);
        /*setCounter(counter + 1); 이전 값을 이용해서 현재 값을 계산. 해당 방식보다 위의 함수가 더 안전하다 이유는 리액트가 current가 확실히 현재 값이라는 걸 보장하면서 우리가 원하는 값을 정확히 계산해준다. return하면 그게 새로운 state가 된다.
        setCounter(1) 직접 값을 할당 */
    };
    console.log("rendered");
    console.log(counter);
    return (
    <div>
        <hr/>
        <h3>Total clicks : {counter}</h3>
        <button onClick={onClick}>Click me</button>
    </div>
    );
}
ReactDOM.render(<App/>,myRoot);
/*
결론적으로 결과는 같다!
변수를 컴포넌트에 연결해서
변수에 데이터를 담은 다음, 해당 변수에 담긴 값을 바꾸는 것.
하지만 지금 우리는 React 기능을 알고 그 도움을 받고 있어서, 전보다 훨씬 쉬워졌다.

modifier 함수를 가지고 state를 변경할 때, 컴포넌트가 재 생성된다.
새로운 값을 가지고 리렌더링! return 값도 재생성되지만 변수를 업데이트하고 재 실행!
*/



/*
실습 gogogo!!!

그전에 잠깐! react, reactdom을 import하는 script tag에서
production - > development 로 변경하는데
production은 배포 모드, development는 개발 모드를 의미합니다.
버그로 이어질 수 있는 요소들을 미리 경고하는 검증 코드가 포함되어 있습니다.

배포용이랑 개발용 차이가 개발용으로하면 우리들이 react에서 틀린 html문법을 쓰면 경고로 알려주고 배포용은 알려주지않는데, 아마 경고를 해주는 코드가 줄어들면서 파일이 더 가벼워질거에요. 따라서 배포하기 더 좋아집니다.

그럼 이제 단위 변환(unit conversion) 앱을 만들어보자!
*/

function MinutesToHours() {
    const [amount, setAmount] = React.useState("");
    const [inverted, setInverted] = React.useState(false); /*flipped는 단순 변수(true or false)*/
    const onChange = (event) => { /* React는 이벤트를 최적화 시키기때문에 Synthetic Event(합성 이벤트)를 발생시킨다. 원레 vanilla js의 이벤트를 얻고싶다면 nativeEvent를 살펴보면 확인 할 수 있다. */
        /*console.log("somebody wrote : " + event.target.value);*/
        setAmount(event.target.value);
    };
    const onReset = () => setAmount("");
    const onFlip = (event) => {
        onReset();
        setInverted((current) => !current);
    }; /*현재 state값을 넣어주고, 결과는 그 반대를 도출하라고 명령*/
    return (
        <div>
            <h4>You want to convert : {amount}</h4>
            <div>
                <label htmlFor="minutes">Minutes</label>
                <input
                    value={inverted ? Math.round(amount * 60) : amount}
                    id="minutes"
                    type="Number"
                    placeholder="Minutes"
                    onChange={onChange}
                    disabled={inverted}
                />
            </div>
            <div>
                <label htmlFor="hours">Hours</label>
                <input
                    value={inverted ? amount : Math.round(amount / 60)}
                    id="hours"
                    type="Number"
                    placeholder="Hours"
                    onChange={onChange}
                    disabled={!inverted}
                />
            </div>
            <button onClick={onReset}>Reset</button>
            <button onClick={onFlip}>{inverted ? "Turn back" : "Invert"}</button>
        </div>
    );
}

function KmToMiles(){
    return <h3>KM 2 M(km/miles 변환기)</h3>;
}

function ConvertApp() {
    const [index, setIndex] = React.useState("xx");
    const onSelect = (event) =>{ setIndex(event.target.value) };
    return (
        <div>
            <hr/>
            <h1 className="superConverter">Super Converter</h1>{/*미리 선점된 js의 언어인 class 및 for은 jsx언어로 바꾸어줘야 한다. htmlFor , className! */}
            <select onChange={onSelect}>
                <option value="xx">Select your units</option>
                <option value="0">Minutes & Hours</option>
                <option value="1">Km & Miles</option>
            </select>
            {/*{index === "xx" ? "Please select your units...!!" : null}*/}
            {index === "0" ? <MinutesToHours /> : null} {/*중괄호를 열면 js를 사용할 수 있다.*/} {/* 분할 정복(divide and conquer), 작은 컴포넌트들을 분할(divide)하고, 정복.*/}
            {index === "1" ? <KmToMiles /> : null}
        </div>
    );
}
const converter = document.querySelector("#converter");
ReactDOM.render(<ConvertApp />, converter);

/*React js 에서 input은 uncontrolled라고 알려져 있는 만큼 input의 value를 통제할 수가 없다.
그래서 state를 사용해줘야 한다.

위의 내용을 정리를 해보자.

첫번째로 우리는 state를 만들었다.
알다시피 setState의 결과는 array인데, 첫번재 요소는 데이터이고, 두번재 요소는 데이터를 수정하기 위한 함수이다.
그 다음으로, 우린 input의 value를 state로 연결해줬다.
state로 input value를 연결해주는 건 매우 유용한데 그 이유는 input value를 어디서든 수정해줄 수 있기 때문이다.
그다음에 데이터를 업데이트해주는 용도로 onChange 함수와 같은 이벤트 리스너를 하나 만들어서,
input에서 listening하는 데이터(event.target.value)를 업데이트 해주는 역할을 해준다.
그리고 state 두번째 요소인 함수를 사용하여 ui에 보여주면 업데이트 완료.


* */
