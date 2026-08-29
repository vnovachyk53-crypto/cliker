"use strict";

document.addEventListener('DOMContentLoaded', function() {
    const clickCountDisplay = document.querySelector('.dog-click-count');
    const dogImage = document.querySelector('.dog-image img');
    let clickCount = 0;

    function updateUI() {
        clickCountDisplay.textContent = clickCount;

        if (clickCount >= 500) {
            dogImage.src = "img/lvl4.png";
        } else if (clickCount >= 100) {
            dogImage.src = "img/lvl3.png";
        } else if (clickCount >= 10) {
            dogImage.src = "img/lvl2.png";
        }
    }

    document.querySelector('.dog-image').addEventListener('click', function() {

        if (clickCount >= 500) {
            clickCount += 4;
        } else if (clickCount >= 100) {
            clickCount += 3;
        } else if (clickCount >= 10) {
            clickCount += 2;
        } else {
            clickCount++;
        }

        updateUI();
    });
});