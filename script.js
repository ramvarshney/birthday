// Typing animation for wishes
var typed = new Typed('#wishes-text', {
    strings: [
        "Happy Birthday, meri pyari si jaan!",
        "Tere liye duniya bhar ki khushiyan mangta hoon.",
        "Tu meri zindagi ka sabse pyara tohfa hai."
    ],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
});

// Carousel for photos
let currentIndex = 0;
const totalPhotos = 4; // Apni photos ki total number daal do
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalPhotos;
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
}, 3000); // Har 3 second mein photo change hogi

// Play music on button click
document.getElementById('play-music').addEventListener('click', function() {
    var music = document.getElementById('background-music');
    music.play();
});

// Create floating hearts
function createHeart() {
    var heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // 3 to 5 seconds
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
setInterval(createHeart, 2000);

// Create flying butterflies
function createButterfly() {
    var butterfly = document.createElement('img');
    butterfly.className = 'butterfly';
    butterfly.src = 'butterfly.png';
    butterfly.style.top = Math.random() * 80 + 10 + 'vh'; // 10% to 90% height
    butterfly.style.animationDuration = Math.random() * 5 + 5 + 's'; // 5 to 10 seconds
    document.body.appendChild(butterfly);
    setTimeout(() => {
        butterfly.remove();
    }, 10000);
}
setInterval(createButterfly, 3000);