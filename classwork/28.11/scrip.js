// class User{
//     constructor(name, email, age){
//         this.name = name
//         this.email = email
//         this.age = age
//     }

//     info(){
//         console.log(`Hello ${this.name} | ${this.age} | ${this.email}`)
//     }
// }

// let user1 = new User("Bohdan", "bohdan123@gmail.com", 21)
// let user2 = new User("John", "john4523@gmail.com", 35)
// console.log(user1.name)
// console.log(user2.name)

// class Point{
//     constructor(x, y){
//         this.x = x
//         this.y = y
//     }
//     message(){
//         alert(`X: ${this.x} | Y ${this.y}`)
//     }
// }

// let p1 = new Point(4,5)
// let p2 = new Point(10,15)

// p1.message();
// p2.message();

// Статичні властивості та методи класу

// class Bank {
//     static balance = 1000

//     constructor(name, money) {
//         this.name = name
//         this.money = money
//     }

//     info() {
//         console.log(`Bank: ${this.name} | Money: ${this.money} | All balance: ${Bank.balance}`)
//     }

//     deposit(money) {
//         Bank.balance += money
//     }

//     credit(money) {
//         Bank.balance -= money 
//     }
// }

// let bank1 = new Bank('MONOBANK', 6000)
// let bank2 = new Bank("PRIVATBANK", 9000)
// bank1.info()
// bank2.info()
// bank1.credit(500)
// bank2.info()
// bank2.credit(200)
// bank1.info()


// class Point{
//     constructor(x, y){
//         this.x = x
//         this.y = y
//     }
//     message(){
//         alert(`X: ${this.x} | Y ${this.y}`)
//     }
// }

// let points = [
//     new Point(5,2),
//     new Point(3,4),
//     new Point(1,6)
// ]

// for(let i = 0; i<points.length; i++){
//     points[i].message()
// }

// for(const point of points){
//     point.message()
// }

// class Student {
//     constructor(surname, marks) {
//         this.surname = surname;
//         this.marks = marks;
//     }

//     info() {
//         console.log(`Surname: ${this.surname} | Marks: ${this.marks}`);
//     }

//     avg() {
//         let sum = 0;
//         for (const mark of this.marks) {
//             sum += mark;
//         }
//         const avg = sum / this.marks.length;
//         console.log(`Avg of marks: ${avg}`);
//     }
// }

// let student = new Student("Johnson", [2, 5, 7, 8, 1]);

// student.info(); 
// student.avg();  


// class PrintMachine {
//     constructor(size, color, family) {
//       this.size = size;
//       this.color = color;
//       this.family = family;
//     }
  
//     print(text) {
//       document.write(`<p style="font-size: ${this.size}; color: ${this.color}; font-family: ${this.family};">${text}</p>`);
//     }
//   }
  
//   let printer = new PrintMachine('16px', 'red', 'Arial')
//   printer.print("Hello World!")

// Описати клас "Точка" з 2 полями(x, y).
// Написати конструктор і метод виводу на екран
// Описати кладс "Прямокутник" з одним полем - масив з 4 точок.
// Написати конструктор і метод виводу на екран.
// Створити об'єкт класу "Прямокутник" і вивести інформацію на екран.

// class Point {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//     }
  
//     printPoint() {
//       console.log(`X: ${this.x} | Y: ${this.y}`);
//     }
//   }
  
//   class Rectangle {
//     constructor(point1, point2, point3, point4) {
//       this.points = [point1, point2, point3, point4];
//     }
  
//     printRectangle() {
//       console.log("Points:");
//       for (const point of this.points) {
//         point.printPoint();
//       }
//     }
//   }
  
//   let point1 = new Point(1, 2);
//   let point2 = new Point(2, 4);
//   let point3 = new Point(3, 5);
//   let point4 = new Point(4, 6);
  
//   let rectangle = new Rectangle(point1, point2, point3, point4);
//   rectangle.printRectangle();

// class User{
//     constructor(name, surname, age)
//     {
//         this.name = name 
//         this.surname = surname         
//         this.age = age
//     }
//     get userName(){
//         return this.name
//     }
//     set userName(name)
//     {
//         this.name = name
//     }

//     get userSurname(){
//         return this.surname
//     }
//     set userSurname(surname)
//     {
//         this.surname = surname
//     }

//     get userAge(){
//         return this.age
//     }
//     set userAge(name)
//     {
//         this.age = this.age
//     }

//     info(){
//         console.log(`${this.name} | ${this.surname} | ${this.age}`)
//     }
// }

// class Point {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//     }
  
//     printPoint() {
//       alert(`X: ${this.x} | Y: ${this.y}`);
//     }
//   }

//   class Point3D extends Point{
//     constructor(x,y,z){
//         super(x,y)
//         this.z = z
//     }
//     printPoint3D() {
//         alert(`X: ${this.x} | Y: ${this.y} | Z: ${this.z}`);
//     }
//   }

// let p1 = new Point(1,9)
// let p2 = new Point3D(1,9,8)

// p1.printPoint()
// p2.printPoint3D()


// Клас Student
class Student {
    constructor(lastName, grades) {
        this.lastName = lastName;
        this.grades = grades;
    }

    // Метод для обчислення середньої оцінки
    calculateAverageGrade() {
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }
}

// Клас Aspirant, який наслідується від Student
class Aspirant extends Student {
    constructor(lastName, grades, diplomaTitle, diplomaGrade) {
        super(lastName, grades);
        this.diplomaTitle = diplomaTitle;
        this.diplomaGrade = diplomaGrade;
    }

    // Метод для визначення, чи отримає аспірант диплом
    willGetDiploma() {
        const averageGrade = this.calculateAverageGrade();
        return averageGrade + this.diplomaGrade > 20;
    }
}

// Приклад використання класів
const student1 = new Student("Ivanov", [5, 4, 4, 3, 5]);
console.log("Average Grade for Student 1:", student1.calculateAverageGrade());

const aspirant1 = new Aspirant("Petrov", [4, 5, 3, 5, 4], "Research on AI", 7);
console.log("Average Grade for Aspirant 1:", aspirant1.calculateAverageGrade());
console.log("Will Aspirant 1 get a diploma?", aspirant1.willGetDiploma());
