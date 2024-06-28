//завдання 1
// class Student {
//     constructor(lastName, grades) {
//         this.lastName = lastName;
//         this.grades = grades;
//     }

   
//     calculateAverageGrade() {
//         const sum = this.grades.reduce((total, grade) => total + grade, 0);
//         return sum / this.grades.length;
//     }
// }


// class Aspirant extends Student {
//     constructor(lastName, grades, diplomaTitle, diplomaGrade) {
//         super(lastName, grades);
//         this.diplomaTitle = diplomaTitle;
//         this.diplomaGrade = diplomaGrade;
//     }

  
//     willGetDiploma() {
//         const averageGrade = this.calculateAverageGrade();
//         return averageGrade + this.diplomaGrade > 20;
//     }
// }


// const student1 = new Student("John", [5, 4, 4, 3, 5]);
// console.log("Average Grade for Student 1:", student1.calculateAverageGrade());

// const aspirant1 = new Aspirant("Alex", [4, 5, 3, 5, 4], "Research on AI", 7);
// console.log("Average Grade for Aspirant 1:", aspirant1.calculateAverageGrade());
// console.log("Will Aspirant 1 get a diploma?", aspirant1.willGetDiploma());

//Завдання2
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get radius() {
        return this.radius;
    }

    set radius(value) {
        if (value <= 0) {
            console.error('Радіус має бути більше за 0');
            return;
        }
        this.radius = value;
    }

    get diameter() {
        return this.radius * 2;
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculateCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

const myCircle = new Circle(5);

console.log('Радіус кола:', myCircle.radius);
console.log('Діаметр кола:', myCircle.diameter);
console.log('Площа кола:', myCircle.calculateArea());
console.log('Довжина кола:', myCircle.calculateCircumference());

myCircle.radius = 8;
console.log('Новий радіус кола:', myCircle.radius);
console.log('Новий діаметр кола:', myCircle.diameter);
console.log('Нова площа кола:', myCircle.calculateArea());
console.log('Нова довжина кола:', myCircle.calculateCircumference());
