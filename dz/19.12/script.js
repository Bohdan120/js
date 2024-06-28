function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let container = document.getElementById('container')
let btn = document.getElementById('btn')

btn.addEventListener('click', function () {
    let block = document.createElement('div')
    block.setAttribute('class', 'block')
    block.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`
    container.appendChild(block)

    block.addEventListener('click', function () {
        container.removeChild(block)
    })

})
