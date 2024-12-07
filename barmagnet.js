const canvas = document.getElementById("magnetic-field-canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;

let northPole = { x: 250, y: 250 };
let southPole = { x: 550, y: 250 };
let isReversed = false;

// Draw the magnetic field
function drawMagneticField() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawMagnet();
  drawFieldLines(northPole, southPole, isReversed);
}

// Draw the bar magnet
function drawMagnet() {
  ctx.fillStyle = "#ff6666"; // North Pole color
  ctx.fillRect(northPole.x - 40, northPole.y - 20, 80, 40);
  ctx.fillStyle = "#6666ff"; // South Pole color
  ctx.fillRect(southPole.x - 40, southPole.y - 20, 80, 40);

  // Add pole labels
  ctx.fillStyle = "#fff";
  ctx.font = "16px Arial";
  ctx.fillText("N", northPole.x - 5, northPole.y + 5);
  ctx.fillText("S", southPole.x - 5, southPole.y + 5);
}

// Draw field lines
function drawFieldLines(north, south, reversed) {
  const lineCount = 10; // Number of field lines
  const spread = 100; // Spread of field lines

  for (let i = 0; i < lineCount; i++) {
    const offset = (i - lineCount / 2) * spread;

    ctx.beginPath();
    ctx.moveTo(north.x, north.y + offset);
    ctx.bezierCurveTo(
      canvas.width / 2, // Control point 1 (x)
      north.y - 200, // Control point 1 (y)
      canvas.width / 2, // Control point 2 (x)
      south.y + 200, // Control point 2 (y)
      south.x, // End point (x)
      south.y + offset // End point (y)
    );
    ctx.strokeStyle = reversed ? "#00aaff" : "#000000";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Add arrows to indicate direction
    addArrow(reversed ? south : north, offset);
  }
}

// Add arrowhead to field lines
function addArrow(pole, offset) {
  ctx.beginPath();
  ctx.moveTo(pole.x, pole.y + offset);
  ctx.lineTo(pole.x + 10, pole.y + offset - 10);
  ctx.lineTo(pole.x + 10, pole.y + offset + 10);
  ctx.closePath();
  ctx.fillStyle = "#ff0000";
  ctx.fill();
}

// Reverse poles
document.getElementById("reverse-poles").addEventListener("click", () => {
  [northPole, southPole] = [southPole, northPole];
  isReversed = !isReversed;
  drawMagneticField();
});

// Reset simulation
document.getElementById("reset").addEventListener("click", () => {
  northPole = { x: 250, y: 250 };
  southPole = { x: 550, y: 250 };
  isReversed = false;
  drawMagneticField();
});

// Initial render
drawMagneticField();
