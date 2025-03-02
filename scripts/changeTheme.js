const toggleThemeBtn = document.getElementById("toggle__theme")
const root = document.getElementById("root");

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

toggleThemeBtn.addEventListener("click", function() {
  const r = generateRandomNumber(0, 255);
  const g = generateRandomNumber(0, 255);
  const b = generateRandomNumber(0, 255);

  root.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})