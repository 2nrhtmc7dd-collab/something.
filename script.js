const image = document.getElementById("myImage");

let currentImage = 1;

image.addEventListener("click", function() {

    if (currentImage === 1) {
        image.src = "image2.jpg";
        currentImage = 2;

        setTimeout(function() {
            image.src = "image3.jpg";
            currentImage = 3;
        }, 300);
    }

    else if (currentImage === 3) {
        image.src = "image4.jpg";
        currentImage = 4;
    }

});