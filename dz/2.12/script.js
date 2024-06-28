// Знаходження площі круга
function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

// Знаходження площі кільця
function calculateRingArea(outerRadius, innerRadius) {
    const outerArea = calculateCircleArea(outerRadius);
    const innerArea = calculateCircleArea(innerRadius);
    return outerArea - innerArea;
}

const isPrime = function(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

//функція для регістру
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

//функція для створення певних параграфів
const container = document.createElement('div');

for (let i = 1; i <= 10; i++) {
    const paragraph = document.createElement('p');
    paragraph.textContent = `Paragraph ${i}`;

    if (i % 3 === 0) {
        paragraph.style.color = 'green';
        paragraph.style.fontSize = '40px';
    }

    container.appendChild(paragraph);
}

document.body.appendChild(container);
