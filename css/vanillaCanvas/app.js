const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName('jsColors');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');
const saveBtn = document.getElementById('jsSave')

const INITAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white"
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
ctx.strokeStyle = INITAL_COLOR;
ctx.fillStyle = INITAL_COLOR;
ctx.lineWidth = 2.5

let paingting = false;
let filling = false;

function stopPainting() {
    paingting = false;
}

function startPainting() {
    paingting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!paingting) {
        ctx.beginPath();
        ctx.moveTo(x, y)
    } else {
        ctx.lineTo(x, y)
        ctx.stroke();
    }
}

function changeColor(event) {
    const color = event.target.style.backgroundColor
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event) {
    const size = event.target.value
    ctx.lineWidth = size;
}

function handleModeClick(event) {
    if(filling === true) {
        filling = false;
        mode.innerText = "Fill"
    }  else {
        filling = true;
        mode.innerText = "PAINT"
    }
}

function handleCanvasClick() {
    if (filling) {
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
    }
}

function handleContextMenu(event) {
    event.preventDefault();
}

function handleSaveClick() {
    const image = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.href = image
    link.download = "PaintJS"
    link.click();
}

if(canvas) {
    canvas.addEventListener("mousemove",  onMouseMove)
    canvas.addEventListener("mousedown",  startPainting)
    canvas.addEventListener("mouseup",    stopPainting)
    canvas.addEventListener("mouseleave", stopPainting)
    canvas.addEventListener('click', handleCanvasClick);
    canvas.addEventListener('contextmenu', handleContextMenu)
}
if(colors) {
    Array.from(colors).forEach(color => {
        color.addEventListener('click', changeColor)
    })
}

if(range) {
    range.addEventListener('input', handleRangeChange)
}

if(mode) {
    mode.addEventListener('click', handleModeClick)
}

if(saveBtn) {
    saveBtn.addEventListener('click', handleSaveClick);
}