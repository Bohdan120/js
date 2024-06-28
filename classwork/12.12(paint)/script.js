document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas-element");
    const ctx = canvas.getContext("2d");
    const instrumentButtons = document.querySelectorAll("#instrument-section i");
    const widthButtons = document.querySelectorAll("#width-section i");
    const colorPalette = document.getElementById("colors");
    const coordinateDisplay = document.getElementById("bottom-panel");
    const widthValue = document.getElementById("width-value");

    let currentInstrument = "pen";
    let currentWidth = 1;
    let currentColor = "#000";

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    instrumentButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            if (button.id === "pen") {
                currentInstrument = "pen";
                ctx.globalCompositeOperation = 'source-over'; 
            } else if (button.id === "eraser") {
                currentInstrument = "eraser";
                ctx.globalCompositeOperation = 'destination-out'; 
                ctx.strokeStyle = '#fff'; 
            } else if (button.id === "clear") {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        });
    });

    widthButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            if (button.id === "increase-width") {
                currentWidth += 1;
            } else if (button.id === "decrease-width") {
                currentWidth = Math.max(1, currentWidth - 1);
            }

            widthValue.textContent = currentWidth;
        });
    });

    const colors = ["#000", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];
    colors.forEach(function (color) {
        const colorButton = document.createElement("div");
        colorButton.classList.add("color");
        colorButton.style.backgroundColor = color;
        colorButton.addEventListener("click", function () {
            currentColor = color;
            colorPalette.querySelectorAll(".color").forEach(function (button) {
                button.classList.remove("selected");
            });
            colorButton.classList.add("selected");
        });
        colorPalette.appendChild(colorButton);
    });

    let isDrawing = false;

    function startDrawing(e) {
        isDrawing = true;
        draw(e);
    }

    function endDrawing() {
        isDrawing = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!isDrawing) return;

        ctx.lineWidth = currentWidth;
        ctx.lineCap = "round";
        ctx.strokeStyle = currentColor;

        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", endDrawing);
    canvas.addEventListener("mousemove", draw);

    canvas.addEventListener("mousemove", function (e) {
        const x = e.clientX - canvas.offsetLeft;
        const y = e.clientY - canvas.offsetTop;
        coordinateDisplay.textContent = `X: ${x}, Y: ${y}`;
    });
});
