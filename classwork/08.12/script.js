// let openBtn = document.getElementById('open')
// let closeBtn = document.getElementById('close')
// let focusBtn = document.getElementById('focus')
// let blurBtn = document.getElementById('blur')
// let movetoBtn = document.getElementById('moveto')
// let movebyBtn = document.getElementById('moveby')
// let resizetoBtn = document.getElementById('resizeto')
// let resizebyBtn = document.getElementById('resizeby')



// openBtn.addEventListener('click', function () {
//     w = window.open('index.html', 'itstep', 'width=500,height=500,top=100,left=200')
// })
// closeBtn.addEventListener('click', function () {
//     w.close()
// })
// focusBtn.addEventListener('click', function () {
//     w.focus()
// })
// blurBtn.addEventListener('click', function () {
//     w.blur()
// })
// movetoBtn.addEventListener('click', function () {
//     w.focus()
//     w.moveTo(100,50)
// })
// movebyBtn.addEventListener('click', function () {
//     w.focus()    
//     w.moveBy(100,50)    
// })
// resizetoBtn.addEventListener('click', function () {
//     w.focus()    
//     w.resizeTo(20,70)
// })
// resizebyBtn.addEventListener('click', function () {
//     w.focus()
//     w.resizeBy(30,50)    
    
// })

// let up = document.getElementById('up');

// window.addEventListener('scroll', function() {
//     if (window.scrollY >= 500) {
//         up.style.display = 'block';
//     } else {
//         up.style.display = 'none';
//     }
// });

// up.addEventListener('click', function() {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });

// let reloadBtn = document.getElementById('reload')
// let assignBtn = document.getElementById('assign')
// let replaceBtn = document.getElementById('replace')

// reloadBtn.addEventListener('click', function () {
//     location.reload() 
//     // reload() - перезавантаження сторінки
// })
// assignBtn.addEventListener('click', function () {
//     location.assign("https://itstep.org")
//     // assing() - перенаправляє на іншу сторінку
// })
// replaceBtn.addEventListener('click', function () {
//     location.replace("https://itstep.org")
//     // replace() - перенаправляє на іншу сторінку і заміняє поточну
// })

// console.log(history)
// let lengthBtn = document.getElementById('length')
// let backBtn = document.getElementById('back')
// let forwardBtn = document.getElementById('forward')
// let page = document.getElementById('page')
// let goBtn = document.getElementById('go')

// lengthBtn.addEventListener('click', function () {
//     alert(`В історії ${history.length} сторінок.`)
//     // length - довжина історії
// })
// backBtn.addEventListener('click', function () {
//     history.back()
//     // back() - перехід на попередню сторінку
// })
// forwardBtn.addEventListener('click', function () {
//     history.forward()
//     // forward() перехід на наступну сторінку
// })
// goBtn.addEventListener('click', function () {
//     history.go(page.value)
//     // go(n) - перехід на n сторінок назад або вперед
// })


// let text = document.getElementById('text')
// let btn = document.getElementById('btn')
// let outInput = document.getElementById('outInput')
// let outChange = document.getElementById('outChange')
// let outClick = document.getElementById('outClick')


// btn.addEventListener('click', function () {
//     outClick.innerText = text.value
// })

// text.addEventListener('input', function () {
//     outInput.innerText = text.value
// })

// text.addEventListener('change', function () {
//     outChange.innerText = text.value
// })

// document.getElementById('btn').addEventListener('click', function () {
//     // console.log(form1.gender)
//     if (form1.gender[0].checked) alert("Ти чоловік")
//     else alert("Ти жінка!")
// })

// let red = document.getElementById('red')
// let green = document.getElementById('green')
// let blue = document.getElementById('blue')


// red.addEventListener('input', updateColor);
// green.addEventListener('input', updateColor);
// blue.addEventListener('input', updateColor);

// function updateColor() {
//     document.body.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
// }

let list = document.getElementById('list')
