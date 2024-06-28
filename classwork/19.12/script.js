// AJAX

// Синхронний запит - чекає, поки зі серверу прийде відповідь, після чого буде виконувати все наступне. Блокує користувацький інтерфейс.

// let btn = document.getElementById('btn')
// let output = document.getElementById('output')
// btn.addEventListener('click', function () {
//     let xhr = new XMLHttpRequest() // Створюємо об'єкт для http-запиту.

//     xhr.open('GET', 'test.html', false) // Налаштовуємо об'єкт для відправки синхронного запиту.

//     xhr.send() // Відпраляємо запит на сервер

//     // Настні рядочки коду виконаються тільки після отримання відповіді від серверу.

//     output.innerHTML = xhr.responseText

// })





// Асинхронний запит - відправляє запит, не блокуючи користувацького інтерфейсу. Вам потрібно перехоплювати відповідь з серверу.

// let btn = document.getElementById('btn')
// let output = document.getElementById('output')

// btn.addEventListener('click', function () {

//     let xhr = new XMLHttpRequest()

//     xhr.open('GET', 'test.html', true) // Налаштовуємо об'єкт на асинхронний запит.

//     // onreadystatechange - функція-обробник, яка спрацьовує при зміні стану властивості readystate
//     // 0 - метод open() ще не викликався
//     // 1 - Метод open() вже був викликаний, але метод send() ще не отримано.
//     // 2 - Метод send() був викликаний, але відповідь від сервера ще не отримана
//     // 3 - Йде прийом даних від сервера
//     // 4 - Відповідь від сервера повністю отримана (запит успішно завершений)

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             output.innerHTML = xhr.responseText
//         }
//     }


//     xhr.send()




// })


// Example: 

// let btn = document.getElementById('btn')
// let loading = document.getElementById('loading')

// btn.addEventListener('click', function () {
//     let xhr = new XMLHttpRequest()

//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', false)
//     loading.style.display = 'block'
//     xhr.send()

//     if (xhr.status == 200) loading.style.display = 'none'


// })

// let btn = document.getElementById('btn')
// let loading = document.getElementById('loading')

// btn.addEventListener('click', function () {

//     let xhr = new XMLHttpRequest()

//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true)

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             loading.style.display = 'none'
//         }
//     }
    
//     xhr.send()
    
//     loading.style.display = 'block'   

// })


// let btn = document.getElementById('btn')
// let cardsContainer = document.getElementById('cards-container')

// btn.addEventListener('click', function () {
//     let xhr = new XMLHttpRequest()

//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)

//     xhr.onreadystatechange = function () {
       
//         if (xhr.status == 200) {
//             let data = JSON.parse(xhr.response)
//             displayCards(data)
//         } else {
//             console.error('Error loading data')
//         }
        
//     };

//     xhr.send();
// });

// function displayCards(data) {     
//     data.forEach(function (item) {
//         let card = document.createElement('div')
//         card.className = 'card'
//         card.style = 'width: 250px;'

//         let img = document.createElement('img')
//         img.src = item.thumbnailUrl
//         img.className = 'card-img-top'
//         img.alt = '...'

//         let cardBody = document.createElement('div')
//         cardBody.className = 'card-body'

//         let title = document.createElement('h5')
//         title.className = 'card-title'
//         title.textContent = `ID: ${item.id}`

//         let text = document.createElement('p')
//         text.className = 'card-text'
//         text.textContent = item.title

//         let link = document.createElement('a')
//         link.href = item.thumbnailUrl
//         link.className = 'btn btn-primary'
//         link.textContent = 'Go somewhere'

//         cardBody.appendChild(title)
//         cardBody.appendChild(text)
//         cardBody.appendChild(link)

//         card.appendChild(img)
//         card.appendChild(cardBody)

//         cardsContainer.appendChild(card)
//     });
// }
let btn = document.getElementById('btn')
btn.addEventListener('click', function() {
    let username = document.getElementById('username').value;

    if (username == '') {
        alert('Please enter a GitHub username');
        return;
    }

    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.github.com/users/${username}`, false); 
    xhr.send();

    if (xhr.status === 200) {
        const userInfo = JSON.parse(xhr.response);
        displayUserInfo(userInfo);
    } else {
        alert('User not found')        
    }
})


function displayUserInfo(userInfo) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
                <table>
                    <tr>
                        <th>Image</th>
                        <td><img src="${userInfo.avatar_url}" alt="User Avatar"></td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td>${userInfo.name || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th>Login</th>
                        <td>${userInfo.login}</td>
                    </tr>
                    <tr>
                        <th>GitHub Profile</th>
                        <td><a href="${userInfo.html_url}" target="_blank">Link</a></td>
                    </tr>
                    <tr>
                        <th>Blog</th>
                        <td>${userInfo.blog || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th>Location</th>
                        <td>${userInfo.location || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>${userInfo.email || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th>Followers</th>
                        <td>${userInfo.followers}</td>
                    </tr>
                    <tr>
                        <th>Following</th>
                        <td>${userInfo.following}</td>
                    </tr>
                </table>
            `
}

