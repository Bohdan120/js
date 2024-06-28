//Пошук елементів 

//let p1 = document.getElementById('p1')
// p1.style.color = 'red'
// p1.style.backgroundColor = 'aqua'

//p1.innerHTML = "<h1>Hello</h1>"

// let p = document.getElementsByTagName('p')

// for(let i = 0; i<p.length; i++){
//     p[0].style.backgroundColor = "green"
//     p[1].style.backgroundColor = "yellow"
// }

// let btn = document.getElementById('btn')

// btn.addEventListener('click', function(){
//     let answers = document.getElementsByName('answer')
//     let res = ''

//     for(let i = 0; i < answers.length; i++){
//         res += `${answers[i].value} - ${answers[i].checked}\n`
//     }
//     alert(res)

// })

//document.querySelectorAll()

// let elem = document.querySelectorAll('div p')

// elem.forEach(element => {
//     element.style.backgroundColor = "red"
// })

// let images = document.images

// for(let i = 0; i< images.length; i++)
// {
//     document.write(`
//     <br>
//     <b>Src:</b> ${images[i].src}
//     <br>
//     <b>Alt:</b> ${images[i].alt}
//     <br>
//     `)
// }

// let links = document.links

// for(let i = 0; i<links.length; i++)
// {
//     document.write(`
//     <br>
//     <b>Text:</b> ${links[i].innerText}
//     <br>
//     <b>Href:</b> ${links[i].href}
//     <br>
//     `)
// }

// let e = document.getElementById('list')

// for(let i = 0; i< e.childNodes.length; i++)
// {
//     console.log(e.childNodes[i].nodeType)
//}

// let p1 = document.getElementById('p1')

// p1.parentNode.style.border = '1px solid black'

// let box = document.getElementById('box')
// let add = document.getElementById('add')
// let remove = document.getElementById('remove')
// let count = 0

// add.addEventListener('click', function(){
//     let div = document.createElement('div')
//     div.setAttribute('class', 'user')
//     div.style.backgroundColor = 'green'
//     div.innerText = "Some text..."
//     box.appendChild(div)
// })

// add.addEventListener('click', function(){
//     let div = document.createElement('div')
//     let p = document.createElement('p')
//     p.innerText = `Element ${++count}`

//     div.appendChild(p)
//     div.appendChild(div)
// })

// remove.addEventListener('click', function(){
//     box.removeChild(box.firstChild)
// })

// let article = document.querySelector('div.article')
// let newArticleDiv = article.cloneNode(true)
// document.body.appendChild(newArticleDiv)

// let articleDiv = document.querySelector('div.article')
// let oldNode = document.querySelector('div.article p')[0]
// let newNode = document.createElement('h2')
// newNode.innerText = "Hello!"
// articleDiv.replaceChild(newNode, oldNode)


// let btn = document.getElementById('btn')

// btn.addEventListener('click', function(){
//     let table = document.getElementById("table");

//     if (table) {
//         btn.innerText = "Create table"
//         table.parentNode.removeChild(table); 
//     } else {
//         btn.innerText = "Delete table"
//         table = document.createElement("table");
//         table.id = "table";

//         for (let i = 1; i <= 10; i++) {
//             let row = document.createElement("tr");
//             for (let j = 1; j <= 10; j++) {
//                 let klitunka = document.createElement("td");
//                 klitunka.textContent = i * j;
//                 row.appendChild(klitunka);
//             }
//             table.appendChild(row);
//         }

//         document.body.appendChild(table);
//     }
// })

function generateBlocks(container) {
    // Створюємо 4 блоки
    for (let i = 0; i < 4; i++) {
      const block = document.createElement("div");
      block.classList.add("block");
      block.style.backgroundColor = getRandomColor();
      container.appendChild(block);
    }
  
    // Визначаємо ширину контейнера
    const containerWidth = container.offsetWidth;
  
    // Розміщуємо блоки рівномірно по горизонталі
    for (let i = 0; i < 4; i++) {
      const block = document.querySelector(".block:nth-child(" + (i + 1) + ")");
      block.style.left = (containerWidth / 4) * i;
    }
  }
  
  // Отримуємо контейнер
  const container = document.querySelector(".container");
  
  // Генеруємо блоки
  generateBlocks(container);
  
  // Запускаємо таймер, який кожної секунди змінює колір всіх блоків
  setInterval(generateBlocks, 1000);
  
