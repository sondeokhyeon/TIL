const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
let int = setInterval(blourring, 30);

function blourring() {
  load++;
  console.log(load);
  if (load > 99) {
    clearInterval(int);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

// const scale = (num, in_min, in_max, out_min, out_max) => {
//     let cal1 = num - in_min;
//     let cal2 = out_max - out_min;
//     let cal3 = cal1 * cal2;

//     let cal4 = in_max - in_min;
//     let cal5 = cal3 / cal4;
//     let result = cal5 + out_min;
//     return result;
//   };
