// Function to type out text gradually
function typeText(element, text, speed) {
    let i = 0;
    const typingInterval = setInterval(function() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, speed);
}

const h1Element = document.getElementById("typed-text");


const textToType = h1Element.textContent;

const typingSpeed = 100; 

if (h1Element) {
    h1Element.innerHTML = "";

    window.onload = function() {
        typeText(h1Element, textToType, typingSpeed);
    };
}
