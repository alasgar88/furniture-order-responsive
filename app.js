const animeBoxes = document.querySelectorAll('.anime-box');
const furniture = document.querySelector('.furniture');
const workCard = document.querySelectorAll('.work-card');

document.addEventListener('DOMContentLoaded', function () {
  // header anime
  [...animeBoxes].forEach((item, index) => {
    const includes = item.className;
    if (includes === 'anime-box anime-box-1') {
      item.classList.toggle('show-anime-box-1');
    } else if (includes === 'anime-box anime-box-2') {
      item.classList.toggle('show-anime-box-2');
    } else {
      item.classList.toggle('show-anime-box-3');
    }
  });
  // scroll event listener
  window.addEventListener('scroll', function () {
    var positionFurniture = furniture.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    // furniture class
    if (positionFurniture < windowHeight * 0.75) {
      furniture.classList.add('show');
    }

    workCard.forEach((item) => {
      var positionWorkCard = item.getBoundingClientRect().top;
      // work card class
      if (positionWorkCard < windowHeight * 0.75) {
        console.log('here');
        item.classList.add('show-work-card');
      }
    });
  });
});