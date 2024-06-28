// document.write("<h1>Hello World</h1>")

// var div = document.getElementById("div1")
// div.innerText = "Hello World!"

// a = 5
// console.log(a)


// var a = 5
// let b = "abc"
// c = 2.23
// console.log(a)
// console.log(b)
// console.log(c)

// let name = "John"
// let text = `Hello ${name}`
// console.log(text)
// console.log(typeof(name))

// let filename = "10.png"
// document.write(`<img src= '${filename}'>`)

// if(2 == 3)
// {
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// let a = 10
// let res = (a % 2 == 0)? "yes" : "no"
// console.log(res)

// let a 
// const res = a ?? "Hello"
// console.log(res)

// let a = 5
// let res = a ?? 55
// console.log(res)

// let a = "5"
// let b = parseInt(a)
// console.log(typeof a)

// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     return a / b;
// }

// let a = parseInt(prompt("Enter number a: "))
// let b = parseInt(prompt("Enter number b: "))
// let res = divide(a, b)
// console.log(res)

// let mas = ["User1", "User2", 5]
// console.log(mas)

// let mas = [[1,2], [3,4]]
// console.log(mas)

// let mas = new Array(5)
// mas[5] = 2
// console.log(mas.length)

// let mas = [[1,2,4,5,6], [7,8,9]]
// let row1 = mas[0].length
// let row2 = mas[1].length
// console.log(row1, row2)

// let mas = [1,2,3,4,5,6,7]
// for(let i = 0; i < mas.length; i++)
//     console.log(mas[i])

// let mas = [1,2,3,4,5,6,7]
// for(item in mas)
//     console.log(mas[item])

// let mas = ["https://classroom.google.com/u/0/h?hl=uk", "https://mystat.itstep.org/en/auth/login/index", "https://translate.google.com/?hl=uk&sl=uk&tl=en&op=translate"]
// document.write("<ul>")
// for(let i = 0; i<mas.length; i++)
//     document.write(`<li><a href='${mas[i]}'>${mas[i]}</a></li>`)
// document.write("</ul>")

// var mas = [1,2,3]
// mas = mas.concat(4,5)
// document.write("<p>" + mas + "</p>")

// let mas = new Array(1,2,3,4,5,6,7,8)
// mas.reverse()
// document.write(mas.join("<b>"))

// let res = confirm("age > 20")
// document.write(res)



let num = parseInt(prompt("Enter number: "))
let result = 1;
  
 while(num > 0) {
    result *= num;
    num--;
 }
document.write(result)