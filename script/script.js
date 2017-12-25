"use strict";

var mouseDownPos, isDown = false;
function scr(direction) {
    var x = document.getElementsByClassName('small')[1].offsetWidth + 5;
    if (direction === "p") {
        document.getElementById('scroll').scrollLeft -= x;
    } else {
        document.getElementById('scroll').scrollLeft += x;
    }
}
//
//show gallery
//
function change(src) {
    document.getElementById('big').src = src;
}

var galleryLocation = 'img';
var isVisible = true;
function showGallery() {
    if (isVisible) {
        isVisible = false;
        document.getElementById('show').style.display = "none";
    } else {
        isVisible = true;
        document.getElementById('show').style.display = "block";

    }
}

function moveScroll(move) {
    if (isDown) {
        document.getElementById('scroll').scrollLeft += (move / 20);
    }
}

document.getElementById('gallery_show').addEventListener('click', showGallery);
document.getElementById('hide_gallery').addEventListener('click', showGallery);
document.getElementById('arrow_left').addEventListener('click', function () { scr("p"); }, true);
document.getElementById('arrow_right').addEventListener('click', function () { scr("n"); }, true);
(function () {
    var small = document.getElementsByClassName('small');
    var l = small.length - 1;
    for (var i = 0; i <= l; ++i) {
        small[i].addEventListener('click', function (event) {change(event.target.currentSrc); });
    }
})();
document.getElementById('scroll').addEventListener('mousedown', function (event) { event.preventDefault(); mouseDownPos = event.clientX; isDown = true;}, true);
document.getElementById('scroll').addEventListener('mousemove', function (event) { moveScroll(mouseDownPos - event.clientX); });
document.getElementById('scroll').addEventListener('mouseup', function (event) { isDown = false; }, true);
document.getElementById('scroll').addEventListener("mousewheel", function (event) { 
    var x = -70;
    if (event.deltaY > 0) {
        document.getElementById('scroll').scrollLeft -= x;
    } else {
        document.getElementById('scroll').scrollLeft += x;
    }
});