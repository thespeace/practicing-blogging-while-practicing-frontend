
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
ctx.lineCap = "round";
const lineWidth = document.querySelector("#line-width");
const color = document.querySelector("#color");
const colorOptions = Array.from(
    document.getElementsByClassName("color-option")
);
const modeBtn = document.querySelector("#mode-btn");
const destroyBtn = document.querySelector("#destroy-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const fileInput = document.querySelector("#file");
const textInput = document.querySelector("#text");
const saveBtn = document.querySelector("#save");

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

const onFileChange=(event)=>{
    /*console.dir(event.target);*/
    const file = event.target.files[0]; //js를 이용해서 그 파일을 가져오고~  /////// 파일이 배열인 이유? input에 multiple 속성을 추가할 수 있기 때문.
    const url = URL.createObjectURL(file); // 그 파일을 가리키는 브라우저 메모리의 url를 얻는 것. 해당 url은 현실의 인터넷에는 존재하지 않고, 해당 브라우저 메모리에 있는 파일을 드러내는 방식.
    /*console.log(url);*/
    const image = new Image();// === document.createElement("img");
    image.src = url;
    image.onload =()=>{
        ctx.drawImage(image, 0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        fileInput.value = null;
    }
}

const onDoubleClick=(event)=>{
    ctx.save();//현재 상태, 색상, 스타일등 모든것을 저장
    const text = textInput.value;
    if(text !== ""){
        ctx.lineWidth = 1;
        ctx.font = "48px serif"
        ctx.fillText(text, event.offsetX, event.offsetY); //fill || stroke
        ctx.restore(); //save와 restore 사이에는 어떤한것도 저장이 되지 않는다.
    }
}

const onSaveClick=()=>{
    const url = canvas.toDataURL();//이미지를 base64로 인코딩해준다.(즉, 캔버스에 있는 그림데이터를 url로 변환해주는 메소드)
    const a = document.createElement("a");
    a.href = url;
    a.download = "myDrawing.png"
    a.click();
}

canvas.addEventListener("mousemove",onMove);
/*canvas.onmousemove = ()=>{}  위의 리스너와 같다. 하지만 addEventListener는 같은 event안에 많은 event listener들을 추가 할수 있기 때문에 더 효율적이다*/
canvas.addEventListener("mousedown",startPainting);
canvas.addEventListener("mouseup",cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);
canvas.addEventListener("dblclick", onDoubleClick);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach(color => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click",onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);