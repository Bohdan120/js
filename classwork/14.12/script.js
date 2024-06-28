// var visitCount = parseInt(getCookie("visitCount")) || 0;

// visitCount++;

// document.cookie = "visitCount=" + visitCount;

// alert("Ви відвідали цю сторінку " + visitCount + " раз(и)");

// function getCookie(name) {
//   var cookies = document.cookie.split(';');
//   for (var i = 0; i < cookies.length; i++) {
//     var cookie = cookies[i].trim();
//     if (cookie.indexOf(name + "=") == 0) {
//       return cookie.substring(name.length + 1, cookie.length);
//     }
//   }
//   return null;
// }



// let setLS = document.getElementById('setLS')
// let enter_name = document.getElementById('enter_name')
// let getLS = document.getElementById('getLS')
// let enter_name2 = document.getElementById('enter_name2')
// let removeLS = document.getElementById('removeLS')

// setLS.addEventListener('click', function(){
//     localStorage.setItem('name', 'Oleh')
// })

// getLS.addEventListener('click', function(){
//     alert(localStorage.getItem(enter_name.value))
// })

// removeLS.addEventListener('click', function(){
//     alert(localStorage.removeItem(enter_name2.value))
// })

// let color = document.getElementById('color')
// let btn = document.getElementById('btn')

// document.body.style.backgroundColor = localStorage.getItem('selectedColor');
// color.value = localStorage.getItem('selectedColor');

// btn.addEventListener('click', function() {
//     localStorage.setItem('selectedColor', color.value);
//     document.body.style.backgroundColor = color.value;
// });

// let lastVisit = new Date();

// localStorage.setItem('lastVisit', lastVisit);
// document.write('Last visit on site: ' + new Date(localStorage.getItem('lastVisit')));
