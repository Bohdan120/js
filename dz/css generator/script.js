let insetElement = document.getElementById("inset");
let horizontalLengthElement = document.getElementById("horizontalLength");
let verticalLengthElement = document.getElementById("verticalLength");
let blurRadiusElement = document.getElementById("blurRadius");
let spreadElement = document.getElementById("spread");
let colorTypeElement = document.getElementById("colorType");
let redElement = document.getElementById("red");
let greenElement = document.getElementById("green");
let blueElement = document.getElementById("blue");
let alphaElement = document.getElementById("alpha");
let outputElement = document.getElementById("output");

insetElement.addEventListener("input", generateBoxShadow);
horizontalLengthElement.addEventListener("input", generateBoxShadow);
verticalLengthElement.addEventListener("input", generateBoxShadow);
blurRadiusElement.addEventListener("input", generateBoxShadow);
spreadElement.addEventListener("input", generateBoxShadow);
colorTypeElement.addEventListener("input", generateBoxShadow);
redElement.addEventListener("input", generateBoxShadow);
greenElement.addEventListener("input", generateBoxShadow);
blueElement.addEventListener("input", generateBoxShadow);
alphaElement.addEventListener("input", generateBoxShadow);

function generateBoxShadow() {
    let inset = insetElement.value;
    let horizontalLength = horizontalLengthElement.value + "px";
    let verticalLength = verticalLengthElement.value + "px";
    let blurRadius = blurRadiusElement.value + "px";
    let spread = spreadElement.value + "px";
    let colorType = colorTypeElement.value;
    let red = redElement.value;
    let green = greenElement.value;
    let blue = blueElement.value;
    let alpha = alphaElement.value;

    let boxShadow = inset + " " + horizontalLength + " " + verticalLength + " " + blurRadius + " " + spread + " " + colorType + "(" + red + "," + green + "," + blue + "," + alpha + ")";

    outputElement.textContent = "-webkit-box-shadow: " + boxShadow + ";\nbox-shadow: " + boxShadow + ";";
}