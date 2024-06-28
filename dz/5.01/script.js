//task_1

// let numberInput = document.getElementById('num')
// let increaseButton = document.getElementById('increase')
// let decreaseButton = document.getElementById('decrease')
// increaseButton.addEventListener("click", function(){
//     numberInput.value++;
//   });

//   decreaseButton.addEventListener("click", function(){
//     numberInput.value--;
//   });

//task_2

// function getRandom(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let container = document.getElementById('container')
// let btn = document.getElementById('btn')

// btn.addEventListener('click', function () {
//     let block = document.createElement('div')
//     block.setAttribute('class', 'block')
//     block.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`
//     container.appendChild(block)

//     block.addEventListener('click', function () {
//         container.removeChild(block)
//     })

// })

//task_3

// let currentColor = "#000";
// let colorPalette = document.getElementById("colors");
// let text = document.getElementById('text')

// let colors = ["#000", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];
//     colors.forEach(function (color) {
//         let colorButton = document.createElement("div");
//         colorButton.classList.add("color");
//         colorButton.style.backgroundColor = color;
//         colorButton.addEventListener("click", function () {
//             currentColor = color;
//             colorPalette.querySelectorAll(".color").forEach(function (button) {
//                 button.classList.remove("selected");
//             });
//             colorButton.classList.add("selected");
//             text.style.color = currentColor
//         });        
//         colorPalette.appendChild(colorButton);
        
//     });

