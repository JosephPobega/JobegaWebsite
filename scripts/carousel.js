

const images = document.querySelectorAll('.carousel img');
const descriptions = document.querySelectorAll('.image-description');
let currentIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
            descriptions[i].style.display = 'block';
        } else {
            image.style.display = 'none';
            descriptions[i].style.display = 'none';
        }
    });

    currentIndex = index;
}

function changeImage(offset) {
    let newIndex = currentIndex + offset;

    if (newIndex < 0) {
        newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
        newIndex = 0;
    }

    showImage(newIndex);
}

showImage(currentIndex);

