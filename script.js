const q = console.log;

const firstWin = document.getElementById("first");
const secondtWin = document.getElementById("second");
const three = document.getElementById("three");
const two = document.getElementById("two");
const one = document.getElementById("one");
const zero = document.getElementById("zero");

const start = () => {
  firstWin.classList.add("hidden");
  secondtWin.classList.remove("hidden");
  three.classList.add("animation");

  setTimeout(() => {
    two.classList.add("animation");
  }, 2000);
  setTimeout(() => {
    one.classList.add("animation");
  }, 4000);
  setTimeout(() => {
    zero.classList.add("animation");
  }, 6000);
  setTimeout(() => {
    firstWin.classList.remove("hidden");
    secondtWin.classList.add("hidden");
    three.classList.remove("animation");
    two.classList.remove("animation");
    one.classList.remove("animation");
    zero.classList.remove("animation");
  }, 8500);
};
