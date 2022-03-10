//statistics counter animation

function animate(obj, initVal, lastVal, duration) {
  let startTime = null;
  let currentTime = Date.now();
  const step = (currentTime) => {
    if (!startTime) {
      startTime = currentTime;
    }

    const progress = Math.min((currentTime - startTime) / duration, 1);
    obj.innerHTML = Math.floor(progress * (lastVal - initVal));

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      window.cancelAnimationFrame(window.requestAnimationFrame(step));
    }
  };
  //start anime
  window.requestAnimationFrame(step);
}

let text01 = document.getElementById("01");
let text02 = document.getElementById("02");
let text03 = document.getElementById("03");
let text04 = document.getElementById("04");

const load = () => {
  animate(text01, 0, 6, 5000);
  animate(text02, 0, 5, 5000);
  animate(text03, 0, 35, 5000);
  animate(text04, 0, 98, 5000);
};
