// ------------task_1--------------
// let btn = document.getElementById('btn')
// let randomNum = document.getElementById('randomNum')

// btn.addEventListener('click', function(){
//     let random = Math.floor(Math.random() * 101)
//     randomNum.textContent  = random
// })
//-------------------------------------------------
const mouseTracker = document.getElementById('mouseTracker');
  const coordinatesDisplay = document.getElementById('coordinatesDisplay');

  // Функція, яка виводить координати та кнопку миші
  function displayMouseInfo(event) {
    const mouseX = event.clientX - mouseTracker.getBoundingClientRect().left;
    const mouseY = event.clientY - mouseTracker.getBoundingClientRect().top;
    const mouseButton = event.button;

    coordinatesDisplay.textContent = `Mouse Coordinates: X=${mouseX}, Y=${mouseY} | Mouse Button: ${mouseButton === 0 ? 'Left' : mouseButton === 1 ? 'Middle' : 'Right'}`;
  }

  // Додаємо слухача подій для відстеження руху миші в межах головного div
  mouseTracker.addEventListener('mousemove', displayMouseInfo);

  // Додаємо слухача подій для відстеження кліку миші в межах головного div
  mouseTracker.addEventListener('mousedown', displayMouseInfo);