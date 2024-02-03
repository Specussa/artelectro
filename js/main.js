var i;

// start menu catalog
const homecategorylist = document.querySelector('.home_category__list');
if(homecategorylist) {
  const headernl = document.getElementsByClassName("home_category__link");
  for (i = 0; i < headernl.length; i++) {
    headernl[i].onclick = function(e) {
      if (!this.classList.contains("active")) {
        const headernlNext = this.nextElementSibling;
        const headernsl = document.getElementsByClassName("home_category__sublist");
        const headernlActive = document.getElementsByClassName("home_category__link active");
  
        if (headernlNext && headernlNext.classList.contains("active")) {
          this.classList.remove("active");
          headernlNext.classList.remove("active");
          headernlNext.style.maxHeight = null;
        } else if (headernlNext) {
          for (var q = 0; q < headernlActive.length; q++) {
            headernlActive[q].classList.remove("active");
            headernsl[q].classList.remove("active");
          }
          for (var p = 0; p < headernsl.length; p++) {
            this.classList.remove("active");
            headernsl[p].classList.remove("active");
            headernsl[p].style.maxHeight = null;
          }
          e.preventDefault();
          headernlNext.style.maxHeight = headernlNext.scrollHeight + "px";
          headernlNext.classList.add("active");
          this.classList.add("active");
        }
      }
    };
  }
  const headernsl = document.getElementsByClassName("home_category__sublink");
  for (i = 0; i < headernsl.length; i++) {
    headernsl[i].onclick = function(e) {
      if (!this.classList.contains("active")) {
        const headernslNext = this.nextElementSibling;
        const headernssl = document.getElementsByClassName("home_category__subsublist");
        const headernslActive = document.getElementsByClassName("home_category__sublink active");
  
        if (headernslNext && headernslNext.classList.contains("active")) {
          this.classList.remove("active");
          headernslNext.classList.remove("active");
          headernslNext.style.maxHeight = null;
        } else if (headernslNext) {
          for (var q = 0; q < headernslActive.length; q++) {
            headernslActive[q].classList.remove("active");
            headernssl[q].classList.remove("active");
          }
          for (var p = 0; p < headernssl.length; p++) {
            this.classList.remove("active");
            headernssl[p].classList.remove("active");
            headernssl[p].style.maxHeight = null;
          }
          e.preventDefault();
          headernslNext.parentElement.parentElement.style.maxHeight = (headernslNext.parentElement.parentElement.scrollHeight + headernslNext.scrollHeight) + "px";
          headernslNext.style.maxHeight = headernslNext.scrollHeight + "px";
          headernslNext.classList.add("active");
          this.classList.add("active");
        }
      }
    };
  }
}
// end menu catalog

// start slider catalog
document.querySelectorAll(".home_category__flex").forEach((n) => {
  const slider = new Swiper(n.querySelector(".home_category__slider"), {
    loop: false,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    spaceBetween: 20,
    slideToClickedSlide: true,
    allowTouchMove: true,
    navigation: {
      nextEl: n.querySelector(".home_category__next"),
      prevEl: n.querySelector(".home_category__prev"),
    },
  });
});
// end slider catalog