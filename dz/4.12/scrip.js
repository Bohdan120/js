//Завдання 1
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



//Завдання 2
class Student {
    constructor(lastName, grades) {
        this.lastName = lastName;
        this.grades = grades;
    }

   
    calculateAverageGrade() {
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }
}


class Aspirant extends Student {
    constructor(lastName, grades, diplomaTitle, diplomaGrade) {
        super(lastName, grades);
        this.diplomaTitle = diplomaTitle;
        this.diplomaGrade = diplomaGrade;
    }

  
    willGetDiploma() {
        const averageGrade = this.calculateAverageGrade();
        return averageGrade + this.diplomaGrade > 20;
    }
}


const student1 = new Student("John", [5, 4, 4, 3, 5]);
console.log("Average Grade for Student 1:", student1.calculateAverageGrade());

const aspirant1 = new Aspirant("Alex", [4, 5, 3, 5, 4], "Research on AI", 7);
console.log("Average Grade for Aspirant 1:", aspirant1.calculateAverageGrade());
console.log("Will Aspirant 1 get a diploma?", aspirant1.willGetDiploma());
