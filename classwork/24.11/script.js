// const user = {}
// user.name = "John"
// user.age = 15
// user.print = function(){
//     console.log(`Name: ${user.name} | Age: ${user.age}`)
// }

// const user = {
//     name: "User1",
//     age: 15,
//     print: function(){

//     } 
// }

// const country = {
//     name : "Ukraine",
//     language: "Uk",
//     capital:{
//         name: "Lviv",
//         population: 1000000 
//     },
//     print: function(){
//         console.log(
//             this.name,
//             this.language,
//             this.capital.name,
//             this.capital.population
//         )
//     }
// }

// function findMinMax(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) {
//       return null;
//     }      
//     let min = arr[0];
//     let max = arr[0];
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < min) {
//         min = arr[i];
//       } else if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
    
//     let res ={
//         min: min,
//         max: max
//     }
//     return res;
//   }
  

//   const numbers = [2, 8, -1, 4, 6, 3, 7, 5];
//   findMinMax(numbers);
//   res = findMinMax(numbers)
//   console.log(res)


// function Person(name, age){
//     this.name = name, 
//     this.age = age, 
//     this.display = function(){
//         console.log(`Name: ${this.name} | Age: ${this.name} Lastname: ${this.lastname}`)
//     }
// }

// Person.prototype.sayHello = function(){
//     console.log(`Hello, ${this.name} ${this.lastname}`)
// }

// Person.prototype.lastname = "Jonson"
// let p1 = new Person("John", 20)
// p1.sayHello()

// function User(name, age){
//     name = namea
//     age = age
// }

// function Person(name, age){
//     this.name = naem 
//     this.age = age
//     this.display = function(){
//         console.log(`Name: ${this.name} | Age: ${this.age}`)
//     }
// }

// function Employee(name, age, company){
//     Person.call(this, name, age)
// }

function Animal(name){
    var _name = name 
    this.say = function(){}
    this.setName = function(name){
        _name = name
    }
    this.getName = function(){return _name}
}

    function Cat(name, color){
        Animal.call(this.name)
        this.color = color
        this.say = function(){console.log("Meoww")}
    }

    
    function Dog(name, color){
        Animal.call(this.name)
        this.color = color
        this.say = function(){console.log("Gavv")}
    }

    let cat = new Cat("Micky", "white")
    let dog = new Dog("Backs", "black")

    cat.say()
    dog.say()


