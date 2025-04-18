document.getElementById("start-button").addEventListener("click", startGame);

function startGame() {
  document.getElementById("game-container").style.display = "none";
  createBalloons();
}

function createBalloons() {
  const container = document.getElementById("balloons-container");
  
  for (let i = 0; i < 5; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.backgroundColor = getRandomColor();
    balloon.addEventListener("click", () => balloonPop(balloon));
    container.appendChild(balloon);
  }
}

function balloonPop(balloon) {
  balloon.style.display = "none"; 
  if (document.querySelectorAll(".balloon[style*='display: none']").length === 5) {
    showLetter();
  }
}

function showLetter() {
  const letter = document.getElementById("love-letter");
  letter.classList.remove("hidden");
  letter.style.animation = "fadeIn 3s";
}

// Utility Function to Generate Random Colors
function getRandomColor() {
  const colors = ['#f4c6d1', '#d84d5a', '#fff', '#f4a6b6'];
  return colors[Math.floor(Math.random() * colors.length)];
}
