$(document).ready(function () {
  $('.carousel').carousel({
    interval: 6000,
  });

  $('body').niceScroll({
    cursorcolor: 'var(--mainColor)',
    cursorwidth: '20px',
  });
});

new WOW().init();

// show spiner
window.onload = function () {
  document.querySelector('.loading-screen .loader').style.opacity = 0;
  setTimeout(() => {
    document.querySelector('.loading-screen').style.opacity = 0;
    document.querySelector('.loading-screen').remove();
    //document.body.style.overflow="auto"
  }, 1000);
};

// show  option box
document.querySelector('.fa-cogs').onclick = function () {
  document.querySelector('.fa-cogs').classList.toggle('active');
  if (this.classList.contains('active')) {
    document.querySelector('.option-box').style.left = 0;
  } else {
    document.querySelector('.option-box').style.left = '-240px';
  }
};

//show scroll to top
let showSrollTop = document.querySelector('.scroll-to-top');
window.onscroll = function () {
  if (document.documentElement.scrollTop > 1000) {
    showSrollTop.style.opacity = 1;
  } else {
    showSrollTop.style.opacity = 0;
  }
  animateskils();
};

showSrollTop.onclick = function () {
  document.documentElement.scrollTop = 0;
};

let skillsSection = document.querySelector('.our-skills');
let mysekillsProgress = document.querySelectorAll('.progress-bar');

// animate section box
function animateskils() {
  if (document.documentElement.scrollTop > skillsSection.offsetTop) {
    mysekillsProgress.forEach((element) => {
      element.style.width = element.getAttribute('data-width');
    });
  } else {
    mysekillsProgress.forEach((element) => {
      element.style.width = 0;
    });
  }
}
// Config color of  template
let chooseColor = document.querySelectorAll(".choose-color li");
function clickColor() {
  chooseColor.forEach(list => {
    list.addEventListener("click", function (e) {
      document.documentElement.style.setProperty("--mainColor",e.target.dataset.color)
    
    })
  })
}
clickColor()
