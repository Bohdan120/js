// function hi(message){
//     console.log(`hi ${message}`)
// }
// let name = "John"
// hi(name)

// function add(a,b){
//     let res = a +b
//     console.log(`res: ${res}`)
// }
// add(3,2)

// function printArray(peoples){
//     if("object" == typeof(peoples)){
//         for(item of peoples)
//             console.log(item + " ")
//     }
// }

// let peoples = ["a", "b", "c"]
// printArray(peoples)

// function printArray(peoples){
//     if(Array.isArray(peoples)){
//         for(item of peoples)
//             console.log(item + " ")
//     }
// }

// let peoples = ["a", "b", "c"]
// printArray(peoples)

// function sum(...params){
//     let sum = 0
//     for(let i = 0; i<params.length; i++)
//         sum+= params[i]
//     return sum
// }

// let res = sum(1,2,3)
// console.log(`Res: ${res}`)

// function sub(a,b){
//     return a - b
// }

// function sum(a,b){
//     return a + b
// }

// function operation(a, b, func){
//     return func(a,b)
// }

// console.log(operation(3,5,sub))

// function RectagleSqP(width, height){
//     const perimetr = (width + height)*2
//     const area = width * height
//     return [perimetr, area]
// }
// let res = RectagleSqP(5,4)
// console.log(`perimetr: ${res[0]}`)
// console.log(`area: ${res[1]}`)

// let hi = () => console.log("Hi")
// hi() 

// let add = (a,b) => a+b
// console.log(add(1,2))

// let sum = (...params)=>{
//     let res = 0
//     for(let i = 0; i<params.length; i++)
//         res += params[i]
//     return res
// }
// console.log(sum(1,2,3,4))

// function operation(a,b, func){
//     return func(a,b)
// }

// let res = operation(5,10, (a,b) => {return a *b } )
// console.log(res)

// function f1(){
//     {
//         let a = 5
//         var b = 10
//         c = 20
//     }
   
// }

// function outer(){
//     let x = 5
//     function inner(){
//         x++
//         console.log(x)
//     }
//     return inner
// }
// const fn = outer()
// fn()

// (function hi()
// {
//     console.log("Hi")
// })()

// (function hi(msg)
// {
//     console.log(`hi ${msg}`)
// })("world")

// function say(){
//     console.log("Hello")
//     say = function(){
//         console.log("Hi")
//     }
// }
// say()
// say()

// function change(a){
//     a = a + 5
//     console.log(a)
// }
// change(5)
// let a = 5
// change(a)
// console.log(a)

// function change(user){
//     name = "John"
//     console.log(name)
// }

// user = "Mark"
// change(user)
// console.log(user)


// let module = (function() 
//     { 
//         let a = 5 
//         let b = 10 
//         let obj = {name: "John"} 
//         return{            
//             sum: function(a,b){return a+b}, 
//             mult: function(a,b){return a*b}          
//         } 
//     }() 
// ) 
 
// res = module.sum()
// console.log(res)

let mathModule = (function()
    {
        return{
            sum: (a,b) => a+b,
            sub: (a,b) => a-b,
            mult: (a,b) => a*b,
            div: (a,b) => a/b,            
        }      
    }()
)
console.log(mathModule.sum(8,5))
console.log(mathModule.sub(8,5))
console.log(mathModule.mult(8,5))
console.log(mathModule.div(8,5))
