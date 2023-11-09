const images = document.querySelectorAll('.carousel-image');
const texts = document.querySelectorAll('.carousel-text');

let currentIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });

    texts.forEach((text, i) => {
        if (i === index) {
            text.style.transform = 'translateY(0)';
        } else {
            text.style.transform = 'translateY(100%)';
        }
    });
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

function previousImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
}

setInterval(nextImage, 5000); // Change image every 5 seconds

//  const images = document.querySelectorAll('.carousel-image');
/* const texts = document.querySelectorAll('.carousel-text');

let currentIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });

    texts.forEach((text, i) => {
        if (i === index) {
            text.style.transform = 'translateY(0)';
        } else {
            text.style.transform = 'translateY(100%)';
        }
    });
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

function previousImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
}

setInterval(nextImage, 5000); // Change image every 5 seconds
 */