document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".content");

  const arrows = document.querySelectorAll(".arrow");
  const images = document.querySelectorAll(".slider_img");

  let activeSlide = 0;

  function moveSlider(id) {
    switch (id) {
      case "left":
        activeSlide = activeSlide > 0 ? --activeSlide : images.length - 1;
        content.style.transform = `translate3d(${activeSlide * -40}vw,0,0)`;
        break;
      case "right":
        activeSlide = activeSlide === images.length - 1 ? 0 : ++activeSlide;
        content.style.transform = `translate3d(${activeSlide * -40}vw,0,0)`;
        break;
    }
  }

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      clearInterval(intervalId);
      moveSlider(arrow.getAttribute("id"));
    });
  });

  let intervalId = setInterval(() => {
    moveSlider("right");
  }, 3000);
});
