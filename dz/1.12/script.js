//----------task_1

// let name = prompt("Будь ласка, введіть ваше ім'я:");
// let age = prompt("Будь ласка, введіть ваш вік:");
// let email = prompt("Будь ласка, введіть ваш e-mail:");

// let info = confirm(`Ім'я: ${name} Вік: ${age} Пошта: ${email}`)

// if(info == true){
//     let msg = alert("Дякую за інформацію!")
// }
// else{
//     let name = prompt("Будь ласка, введіть ваше ім'я:");
//     let age = prompt("Будь ласка, введіть ваш вік:");
//     let email = prompt("Будь ласка, введіть ваш e-mail:");
// }

//----------task_2

var numbers = []; 

while (true) {
    var userInput = prompt("Будь ласка, введіть число (або 0 для завершення):");

    if (userInput === null || userInput === "") {
        alert("Будь ласка, введіть коректне число або натисніть Cancel для завершення.");
    } else {
        var number = parseFloat(userInput);

        if (!isNaN(number)) {
            numbers.push(number);

            if (number === 0) {
                break; 
            }
        } else {
            alert("Будь ласка, введіть коректне число.");
        }
    }
}

console.log("Отриманий масив:", numbers);
