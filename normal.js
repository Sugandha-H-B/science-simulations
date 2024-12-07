const canvas = document.getElementById("eyeCanvas");
const ctx = canvas.getContext("2d");
const infoText = document.getElementById("infoText");

function drawEyeStructure() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw eyeball
  ctx.beginPath();
  ctx.arc(300, 150, 140, 0, Math.PI * 2);
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw lens
  ctx.beginPath();
  ctx.arc(300, 150, 50, 0, Math.PI * 2);
  ctx.fillStyle = "#a3c6ff";
  ctx.fill();

  // Draw retina
  ctx.beginPath();
  ctx.moveTo(440, 50);
  ctx.lineTo(440, 250);
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Add labels
  ctx.fillStyle = "#000";
  ctx.font = "14px Arial";

  // Label Lens
  ctx.fillText("Lens", 290, 210);

  // Label Retina
  ctx.fillText("Retina", 445, 150);

  // Label Eyeball
  ctx.fillText("Eyeball", 360, 50);

  // Label Light Rays Source
  ctx.fillText("Light Rays", 100, 50);
}

function normalVision() {
  drawEyeStructure();

  // Draw light rays converging on retina
  ctx.strokeStyle = "#ff0000";
  ctx.lineWidth = 1;

  ctx.beginPath();
  ctx.moveTo(160, 100);
  ctx.quadraticCurveTo(300, 150, 440, 150);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(160, 200);
  ctx.quadraticCurveTo(300, 150, 440, 150);
  ctx.stroke();

  infoText.innerHTML = `<b>Normal Vision:</b>Light focuses directly on the retina, producing a clear image.`;
}

function myopia() {
  drawEyeStructure();

  // Draw light rays converging before retina
  ctx.strokeStyle = "#ff0000";
  ctx.lineWidth = 1;

  ctx.beginPath();
  ctx.moveTo(160, 100);
  ctx.quadraticCurveTo(300, 150, 400, 150);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(160, 200);
  ctx.quadraticCurveTo(300, 150, 400, 150);
  ctx.stroke();

  infoText.innerHTML =` <b>Myopia:</b>Light focuses in front of the retina, resulting in blurred distance vision. Corrected with a concave lens.`;
}

function hypermetropia() {
  drawEyeStructure();

  // Draw light rays converging beyond retina
  ctx.strokeStyle = "#ff0000";
  ctx.lineWidth = 1;

  ctx.beginPath();
  ctx.moveTo(160, 100);
  ctx.quadraticCurveTo(300, 150, 480, 150);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(160, 200);
  ctx.quadraticCurveTo(300, 150, 480, 150);
  ctx.stroke();

  infoText.innerHTML = `<b>Hypermetropia:</b>Light focuses behind the retina, causing difficulty focusing on near objects. Corrected with a convex lens.`;
}

// Event Listeners
document.getElementById("normalVision").addEventListener("click", normalVision);
document.getElementById("myopia").addEventListener("click", myopia);
document.getElementById("hypermetropia").addEventListener("click", hypermetropia);