document.addEventListener("DOMContentLoaded", function () {
    const images = ["photos/photo1.jpg", "photos/photo2.jpg", "photos/photo3.jpg"];
    
    const container = document.getElementById('container');
    const imgElement = document.getElementById('img');
    const leftBtn = document.getElementById('leftBtn');
    const rightBtn = document.getElementById('rightBtn');
    
    let currentIndex = 0;
    let intervalId;


    function changeImage(index) {
        imgElement.src = images[index];
    }

    
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        changeImage(currentIndex);
    }

   
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        changeImage(currentIndex);
    }

   
    leftBtn.addEventListener('click', prevImage);
    rightBtn.addEventListener('click', nextImage);

   
    container.addEventListener('mouseenter', function () {
        clearInterval(intervalId);
    });

    container.addEventListener('mouseleave', function () {
        intervalId = setInterval(nextImage, 3000); 
    });

    changeImage(currentIndex);

   
    intervalId = setInterval(nextImage, 3000); 
});
