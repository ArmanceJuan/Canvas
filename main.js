document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  let lastX, lastY;
  let isDrawing = false;
  let currentColor = "black";

  canvas.width = window.innerWidth * 0.7;
  canvas.height = window.innerHeight * 0.7;

  const draw = (event) => {
    if (!isDrawing) return;

    context.strokeStyle = currentColor;
    context.lineCap = "round";
    context.lineWidth = 4;

    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
    [lastX, lastY] = [event.offsetX, event.offsetY];
  };

  canvas.addEventListener("mousedown", (event) => {
    isDrawing = true;
    [lastX, lastY] = [event.offsetX, event.offsetY];
  });

  canvas.addEventListener("mouseup", () => (isDrawing = false));

  canvas.addEventListener("mouseout", () => (isDrawing = false));

  canvas.addEventListener("mousemove", draw);

  document.querySelectorAll(".color").forEach((color) => {
    color.addEventListener("click", () => {
      currentColor = color.style.backgroundColor;
    });
  });
});
