// JSON

// Серіалізація - перетворення об'єкта(структури) в текстове або бінарне представлення даних.
// !!!
// При серіалізації зберігаються тільки властивості об'єкта, ан е його методи.
// !!!
// Десеріалізація - процес відновлення об'єкта(структури) із текстового або бінарного представлення.

// Формат JSON:
// - Об'єкт {}
// - Масив []
// - Значення одного з типів:
// -- стрічка в подвійних лапках.
// -- число
// -- логічне значення (true/false)
// -- null


// Методи роботи з JSON
// JSON.parse() // читає об'єкт зі стрічки в форматі JSON. (Десеріалізація)
// JSON.stringify() // перетворює об'єкти в стрічку в форматі JSON. (Серіалізація)

// Типи:
// 1. Набір: ключ-значення
// {
//     "name": "John",
//     "age": 20
// }

// 2. Упорядкований набір значень
// [1, 2, 3]


// JSON.parse() // читає об'єкт зі стрічки в форматі JSON. (Десеріалізація)

// let numbers = "[0, 1, 2, 3]"
// console.log(numbers)
// numbers = JSON.parse(numbers)
// console.log(numbers)

// let user = '{"name": "Oleh", "age": 35, "isAdmin": true, "friends": [0, 1, 2, 3]}'
// let user = '{"name": "Oleh", \
//     "age": 35, \
//     "isAdmin": true, \
//     "friends": [0, 1, 2, 3]}'
// let user = `{
//     "name": "Oleh", 
//     "age": 35, 
//     "isAdmin": true, 
//     "friends": [0, 1, 2, 3]
// }`
// console.log(user)
// user = JSON.parse(user)
// console.log(user)

// Неправильно:
// {
//     name: "Oleh",
//     "surname": 'Bobko',
//     "age": 35,
//     "isAdmin": false
// }
// // Правильно:
// {
//     "name": "Oleh",
//     "surname": "Bobko",
//     "age": 35,
//     "isAdmin": false
// }


// let str = `
// {
//     "title": "Подія 1", 
//     "date": "2020-12-31"
// }
// `

// let event1 = JSON.parse(str)
// console.log(event1.date.getDate())

// let str = `
// {
//     "title": "Подія 1", 
//     "date": "2020-12-31"
// }
// `

// let event1 = JSON.parse(str, function (key, value) {
//     if (key == 'date') return new Date(value)
//     return value
// })
// console.log(event1.date.getDate())

// let schedule = `
// {
//     "events": [
//         {
//             "title": "Event 1",
//             "date": "2023-01-05"
//         },
//         {
//             "title": "Event 2",
//             "date": "2023-05-10"
//         }
//     ]
// }
// `
// schedule = JSON.parse(schedule, function (key, value) {
//     if (key == "date") return new Date(value)
//     return value
// })
// console.log(schedule.events[0].date.getDate())

// JSON.stringify() // перетворює об'єкти в стрічку в форматі JSON. (Серіалізація)

// let event = {
//     title: "Event 1",
//     date: new Date(),
//     members: [
//         {
//             name: "John",
//             age: 20
//         },
//         {
//             name: "Bob",
//             age: 30
//         }
//     ]
// }

// Серіалізація
// let str = JSON.stringify(event)
// console.log(event)
// console.log(str)

// Десеріалізація

// let event1 = JSON.parse(str, function (key, value) {
//     if (key == "date") return new Date(value)
//     return value
// })
// console.log(event1.date.getDay())

// Виключення властивостей

// let user = {
//     name: "Oleh",
//     age: 25,
//     window: window
// }

// console.log(JSON.stringify(user)) // error
// Вбудовний об'єкт window не можна перетворювати

// let user = {
//     name: "Oleh",
//     age: 25,
//     window: window
// }

// Ми можемо вказати масив властивостей, який підлягає серіалізації

// console.log(JSON.stringify(user, ["name", "age"]))

// let str = JSON.stringify(user, function (key, value) {
//     if (key == "window") return undefined
//     return value
// })

// console.log(str)


let btn = document.getElementById('btn')
btn.addEventListener('click', function(){
    try {
        let jsonInput = document.getElementById('jsonInput').value;
        let jsonData = JSON.parse(jsonInput);
        let formattedJson = JSON.stringify(jsonData, null, 2);
        document.getElementById('result').innerText = formattedJson;
      } catch (error) {
        document.getElementById('result').innerText = 'Invalid JSON format';
      }
}) 