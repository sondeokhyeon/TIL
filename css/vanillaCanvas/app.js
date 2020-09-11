const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName('jsColors');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
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

if(canvas) {
    canvas.addEventListener("mousemove",  onMouseMove)
    canvas.addEventListener("mousedown",  startPainting)
    canvas.addEventListener("mouseup",    stopPainting)
    canvas.addEventListener("mouseleave", stopPainting)
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