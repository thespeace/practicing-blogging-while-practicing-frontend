
/*fillRect()
ctx.fillRect(50, 50, 100, 200); //rect로 선을 그리고, fill로 채운다. / fillRect : 단축함수 || shortcut function
=> 세분화
*/
/* rect(),fill()
ctx.rect(50,50,100,100);
ctx.rect(150,150,100,100);
ctx.rect(250,250,100,100);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath(); // 경로를 새로 잡아야 한다. context경로(path)에 대한 개념 : 순서가 있고, 메모리를 갖고있다.
ctx.rect(350,350,100,100);
ctx.rect(450,450,100,100);
ctx.fillStyle = 'white';
ctx.fill();
=> 세분화
*/
/*moveTo() lineTo()
ctx.moveTo(50,50); //선을 긋지않고 좌표를 움직이기
ctx.lineTo(150,50); //선을 그으면서 좌표를 움직이기
ctx.lineTo(150,150);
ctx.lineTo(50,150);
ctx.lineTo(50,50);
ctx.strokeStyle = 'white';
ctx.stroke();*/

/*arc() 원을 그릴때 사용
ctx.arc(400, 400, 50,0,2 * Math.PI);
ctx.fillStyle = 'white';
ctx.fill();*/

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");//context는 그림을 그릴때 사용하는 붓(페인트 브러쉬), 항상 좌표 0,0에서 시작한다.

const CANVAS_WIDTH = 700;
const CANVAS_HEIGHT = 700;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
const lineWidth = document.querySelector("#line-width");
const color = document.querySelector("#color");
const colorOptions = Array.from(
    document.getElementsByClassName("color-option")
);
const modeBtn = document.querySelector("#mode-btn");
const destroyBtn = document.querySelector("#destroy-btn");
const eraserBtn = document.querySelector("#eraser-btn");


const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
    "#32ff7e",
    "#7efff5",
];

let isPainting = false;
let isFilling = false;
const onMove= (event)=>{
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
};
const startPainting=()=>{
    isPainting = true;
}
const cancelPainting=()=>{
    isPainting = false;
}
const onLineWidthChange=(event)=>{
    ctx.lineWidth = event.target.value;
}
const onColorChange=(event)=>{
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}


const onColorClick=(event)=>{
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}

const onModeClick=()=>{
    if(isFilling){
        isFilling = false;
        modeBtn.innerText = "Fill";
    }else{
        isFilling = true;
        modeBtn.innerText = "Draw";
    }
}

const onCanvasClick=()=>{
    if(isFilling){
        ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    }else{

    }
}

const onDestroyClick=()=>{
    ctx.fillStyle= "rgb(37, 37, 37)";
    ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
}

const onEraserClick=()=>{
    ctx.strokeStyle = "rgb(37, 37, 37)";
    isFilling = false;
    modeBtn.innerText = "Fill"
    color.value = "rgb(37, 37, 37)";
}

canvas.addEventListener("mousemove",onMove);
canvas.addEventListener("mousedown",startPainting);
canvas.addEventListener("mouseup",cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach(color => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click",onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);

