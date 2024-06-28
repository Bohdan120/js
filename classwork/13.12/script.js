// RegExp
// let text = "Стрічка 123 для тестування"
// let patter = /\d\d\d/
// document.write(text.search(patter))

// let text = "Стрічка для 123тесту456вання при789кладу."
// let patter = /\d\d\d/g
// let res = text.replace(patter, "")
// document.write(res)

// let text = "4 плюс 5 дорівнює 9"
// let res = text.match(/\d/g)
// console.log(res)

// let text = "test-A123test-B123test-C111test-D"
// let patter = /\d\d\d/
// let res = text.split(patter)
// console.log(res)

// let text = "Стрічка 2 для тестування 7 прикладу"
// let pattern = /\d/
// let res = pattern.exec(text)
// document.write(res)

// let pattern = /\d\d\d/
// let input = "hello world"
// if(pattern.test(input)){
//     document.write(`Стрічка ${input} відповідає шаблону`)
// }
// else{
//     document.write(`Стрічка ${input} не відповідає шаблону`)

// }

// input = "abc123"
// if(pattern.test(input)){
//     document.write(`Стрічка ${input} відповідає шаблону`)
// }
// else{
//     document.write(`Стрічка ${input} не відповідає шаблону`)

// }

// let text = "123abc"
// let pattern = /^\d{3}/
// let res = pattern.test(text)
// console.log(res)

// let text = "1abc543"
// let pattern = /^\d\w\w\w\d\d\d$/
// let res = pattern.test(text)
// console.log(res)


// +38 (063) 223-23-23

// let pattern = /^\+38 \(0\d{2}\) \d{3}-\d{2}-\d{2}$/
// let text = "+38 (063) 223-23-23"
// let res = pattern.test(text)
// document.write(res)

// let pattern = /^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}$/i
// let text = "ivan.ivanov@gmail.com"
// let res = pattern.test(text)
// document.write(res)

let btn = document.getElementById('btn')

let pattern = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;

btn.addEventListener('click', function(){
    let dateString = document.getElementById('dateInput').value;

    if (pattern.test(dateString)) {
      alert("Дата валідна");
    } else {
      alert("Дата невалідна");
    }
})