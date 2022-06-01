var i = 0;
var images = ['poster1.png', 'poster2.png', 'poster3.png','poster4.png', 'poster5.png' ]
var time = 1000;

function changeImg() {
    document.slideshow.src = images[i];

    if (i < images.length -1) {
        i++
    } else {
        i = 0;
    }

    setTimeout ("changeImg()", time);
    }
    window.onload = changeImg;

