// Основні події миші:
// mousedown - кнопка миші нажата на елемент.
// mouseup - кнопка миші відпущена на елементі.
// mouseover - курсор миші наведено на елемент.
// mouseout - курсор миші виведено з елемента.
// mousemove - курсор миші водиться на елементі.

// Комплексні події миші
// click - клік на елемент
// dblckick - подвійний клік на елемент.
// contextmenu - клік на праву кнопку миші на елементі.

// let box = document.getElementById("box")

// box.onmousedown = function () {
//     console.log("onmousedown")
// }

// box.onmouseup = function () {
//     console.log("onmouseup")
// }

// box.onmouseover = function () {
//     console.log("onmouseover")
// } 

// box.onmouseout = function () {
//     console.log("onmouseout")
// }

// box.onmousemove = function () {
//     console.log("onmousemove")
// }

// box.onclick = function () {
//     box.style.backgroundColor = "black"
// }

// box.ondblclick = function () {
//     box.style.width = "100px"
//     box.style.height = "100px"
// }

// box.oncontextmenu = function () {
//     box.style.backgroundColor = "brown"
//     box.style.width = "50px"
//     box.style.height = "50px"
// }

// let body = document.body
// let btn = document.getElementById("btn")

// btn.onmouseover = function () {
//     btn.style.color = "white"
//     btn.style.backgroundColor = 'black'
// }

// btn.onmouseout = function () {
//     btn.style.color = "black"
//     btn.style.backgroundColor = 'white'
// }

// btn.onmousedown = function () {
//     body.style.backgroundColor = 'yellow'
// }

// btn.onmouseup = function () {
//     body.style.backgroundColor = 'white'
// }

// let box = document.getElementById("box")

// console.log(box.className)
// box.className = "class1"
// console.log(box.className)

// let box = document.getElementById("box")
// let classBox = box.classList

// console.log(classBox)
// classBox.add("post")
// console.log(classBox)
// classBox.remove("class1")
// console.log(classBox)

// Об'єкт event

// let box = document.getElementById('div1')
// let info = document.getElementById('info')
// box.onmousemove = mouseHandle

// function mouseHandle(e) {
//     info.innerText = `
//     Type: ${e.type}
//     Button: ${e.button} - 0 ліва кнопка, 1 - середня, 2 - права кнопка 
//     Alt: ${e.altKey} - true, якщо нажато alt під час події.
//     Ctrl: ${e.ctrlKey} - true, якщо нажато ctrl під час події.
//     Shift: ${e.shiftKey} - true, якщо нажато shift під час події.
//     OffsetX: ${e.offsetX} - координати миші відносно лівого верхнього кута елемента.
//     OffsetY: ${e.offsetY} - координати миші відносно лівого верхнього кута елемента.
//     ClientX: ${e.clientX} - координати миші відносно лівого верхнього кута документа.
//     ClientY: ${e.clientY} - координати миші відносно лівого верхнього кута документа.
//     ScreenX: ${e.screenX} - координати миші відносно лівого верхнього кута екрану.
//     ScreenY: ${e.screenY} - координати миші відносно лівого верхнього кута екрану.
//     `
//     console.log(e)

// }

// let box = document.getElementById("box")

// box.addEventListener("click", function(e){
//     alert(e.type)
// })

// let plus = document.getElementById("plus")
// let minus = document.getElementById("minus")
// let number = document.getElementById("number")

// plus.addEventListener("click", function(){
//     number.innerText = parseInt(number.innerText) + 1
// })


// minus.addEventListener("click", function(){
//     number.innerText = parseInt(number.innerText) - 1
// })

// let link = document.getElementById("link")
// let h = 13

// link.addEventListener("click", function(e){
//     if(h > 12)
//     {
//         e.preventDefault()
//         alert("Після 12 ранку гугл не працює")
//     }
// })

addEventListener('keydown', function (e) {
    let box = document.getElementById('box')
    let cs = window.getComputedStyle(box)

    let left = parseInt(cs.left)
    let top = parseInt(cs.top)

    switch (e.key) {
        case "ArrowLeft":
            left = Math.max(left - 10, 0)
            box.style.left = left + "px"
            break;
        case "ArrowRight":
            left = Math.min(left + 10, document.documentElement.clientWidth - box.offsetWidth)
            box.style.left = left + "px"
            break;
        case "ArrowUp":
            top = Math.max(top - 10, 0)
            box.style.top = top + "px"
            break;
        case "ArrowDown":
            top = Math.min(top + 10, document.documentElement.clientHeight - box.offsetHeight)
            box.style.top = top + "px"
            break
    }
});