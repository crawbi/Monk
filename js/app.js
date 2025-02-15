/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
document.addEventListener('DOMContentLoaded', function() {

  // Function to create and animate static
  function createAndAnimateStatic() {
    const animationContainer = document.createElement('div');
    animationContainer.style = `
      flex: none;
      height: 100vh;
      left: 0;
      opacity: .1;
      pointer-events: none;
      position: fixed;
      top: calc(50.00000000000002% - 100vh / 2);
      width: 100%;
      z-index: 1001;
    `;
    const animationInnerContainer = document.createElement('div');
    animationInnerContainer.style = 'width:100%;height:100%;position:relative;overflow:hidden';
    const staticElement = document.createElement('div');
    staticElement.style = 'background: url("../img/static.png"); opacity: 0.5; inset: -200%; width: 400%; height: 400%; position: absolute;';

    function animateTransform() {
      const randomTransformX = Math.random() * 14 - 7;
      const randomTransformY = Math.random() * 14 - 7;
      staticElement.style.transform = `translateX(${randomTransformX}%) translateY(${randomTransformY}%) translateZ(0px)`;
    }

    setInterval(animateTransform, 100);
    animationInnerContainer.appendChild(staticElement);
    animationContainer.appendChild(animationInnerContainer);
    document.body.appendChild(animationContainer);
  }

  createAndAnimateStatic();

  function fadeIn(element, duration) {
    var interval = 10;
    var opacity = 0.0;
    var delta = interval / duration;

    var fading = setInterval(function () {
      if (opacity >= 1) {
        clearInterval(fading);
      }
      element.style.display = 'block';
      element.style.opacity = opacity;
      opacity += delta;
    }, interval);
  }

  function fadeOut(element, duration) {
    var interval = 10;
    var opacity = 1.0;
    var delta = interval / duration;

    var fading = setInterval(function () {
      if (opacity <= 0) {
        clearInterval(fading);
        element.style.display = 'none';
      }
      element.style.opacity = opacity;
      opacity -= delta;
    }, interval);
  }

  const bgVideo = document.getElementById('loader-video');
  const videoContainer = document.getElementById('loader-video-container');

  const disclaimerModalTrigger = document.querySelector('.disclaimer-modal-trigger');
  const disclaimerModalClose = document.querySelector('.disclaimer-modal-close');
  const disclaimerModal = document.querySelector('.disclaimer-modal');

  const howModalTrigger = document.querySelector('.how-to-buy-modal-trigger');
  const howModalClose = document.querySelector('.how-to-buy-modal-close');
  const howModal = document.querySelector('.how-to-buy-modal');


  let videoPlaybackChecked = false;

  function checkVideoPlayback() {
    if (videoPlaybackChecked) return;

    if (bgVideo.currentTime > bgVideo.duration / 2) {
      console.log("Video playback is sufficient.");
      videoPlaybackChecked = true;
    } else {
      console.log("Video failed to play sufficiently, applying fallback.");
      fadeOut(bgVideo, 500);
      fadeOut(videoContainer, 500);
      videoPlaybackChecked = true;
    }
  }

  bgVideo.addEventListener('ended', function() {
    fadeOut(bgVideo, 500);
    fadeOut(videoContainer, 500);
    videoPlaybackChecked = true;
  });

  setTimeout(checkVideoPlayback, 10000);

  disclaimerModalTrigger.addEventListener('click', function (event) {
    event.preventDefault();
    disclaimerModal.classList.add('active');
  });

  disclaimerModalClose.addEventListener('click', function (event) {
    event.preventDefault();
    disclaimerModal.classList.remove('active');
  });

  howModalTrigger.addEventListener('click', function (event) {
    event.preventDefault();
    howModal.classList.add('active');
  });

  howModalClose.addEventListener('click', function (event) {
    event.preventDefault();
    howModal.classList.remove('active');
  });

});

console.log("%cDROPPING A DOOKEY ON APECHAIN 💩", "font-size: 32px; font-family: 'Helvetica', Arial, sans-serif; color: #96f001; text-shadow: 2px 2px 4px #000000; font-weight: bold;");

/******/ })()
;