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
          // for (var q = 0; q < headernlActive.length; q++) {
          //   headernlActive[q].classList.remove("active");
          //   headernsl[q].classList.remove("active");
          // }
          // for (var p = 0; p < headernsl.length; p++) {
          //   this.classList.remove("active");
          //   headernsl[p].classList.remove("active");
          //   headernsl[p].style.maxHeight = null;
          // }
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
          // for (var q = 0; q < headernslActive.length; q++) {
          //   headernslActive[q].classList.remove("active");
          //   headernssl[q].classList.remove("active");
          // }
          // for (var p = 0; p < headernssl.length; p++) {
          //   this.classList.remove("active");
          //   headernssl[p].classList.remove("active");
          //   headernssl[p].style.maxHeight = null;
          // }
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
if (document.querySelector(".home_category__swiper")) {
  document.querySelectorAll(".home_category__swiper").forEach((n) => {
    const slider = new Swiper(n.querySelector(".home_category__slider"), {
      loop: false,
      slidesPerView: 'auto',
      speed: 500,
      spaceBetween: 20,
      slideToClickedSlide: true,
      allowTouchMove: true,
      navigation: {
        nextEl: n.querySelector(".home_category__next"),
        prevEl: n.querySelector(".home_category__prev"),
      },
    });
  });
}
// end slider catalog

// start slider catalog
if (document.querySelector(".catalog_product_slider")) {
  document.querySelectorAll(".catalog_product_slider").forEach((n) => {
    const cpslider = new Swiper(n.querySelector(".catalog_product_slider__swiper"), {
      loop: false,
      slidesPerView: 'auto',
      speed: 500,
      spaceBetween: 10,
      allowTouchMove: true,
      slideToClickedSlide: false,
      touchRatio: 0.2,
      navigation: {
        nextEl: n.querySelector(".compare_product_slider__next_all"),
        prevEl: n.querySelector(".compare_product_slider__prev_all"),
      },
      breakpoints: {
        992: {
          slidesPerView: 4,
        },
        1: {
          slidesPerView: 'auto',
          spaceBetween: 20,
        },
      },
    });
  });
}
// end slider catalog

// start slider compare
if (document.querySelector(".compare_product_slider__flex")) {
  document.querySelectorAll(".compare_product_slider__flex").forEach((n) => {
    const cslslider = new Swiper(n.querySelector(".compare_product_slider__left"), {
      loop: false,
      slidesPerView: 1,
      speed: 500,
      spaceBetween: 20,
      allowTouchMove: true,
      slideToClickedSlide: false,
      touchRatio: 0.2,
      navigation: {
        nextEl: n.querySelector(".compare_product_slider__left_next"),
        prevEl: n.querySelector(".compare_product_slider__left_prev"),
      },
      pagination: {
        el: n.querySelector(".compare_product_slider__left_pagination"),
        type: "fraction",
      },
      breakpoints: {
        993: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
    if (document.querySelector(".comparison__item")) {
      document.querySelectorAll(".comparison__item").forEach((n) => {
        const cslswiper = new Swiper(n.querySelector(".comparison__sublist_left"), {
          loop: false,
          slidesPerView: 1,
          speed: 300,
          spaceBetween: 10,
          allowTouchMove: true,
          slideToClickedSlide: false,
          touchRatio: 0.5,
          breakpoints: {
            993: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          },
        });
        cslslider.on('slideChangeTransitionStart', function() {
          cslswiper.slideTo(cslslider.activeIndex);
        });
        cslswiper.on('transitionStart', function(){
          cslslider.slideTo(cslswiper.activeIndex);
        });
      });
    }
  });
}
if (document.querySelector(".compare_product_slider__flex")) {
  document.querySelectorAll(".compare_product_slider__flex").forEach((n) => {
    const csrslider = new Swiper(n.querySelector(".compare_product_slider__right"), {
      loop: false,
      slidesPerView: 1,
      speed: 500,
      spaceBetween: 20,
      allowTouchMove: true,
      slideToClickedSlide: false,
      touchRatio: 0.2,
      navigation: {
        nextEl: n.querySelector(".compare_product_slider__right_next"),
        prevEl: n.querySelector(".compare_product_slider__right_prev"),
      },
      pagination: {
        el: n.querySelector(".compare_product_slider__right_pagination"),
        type: "fraction",
      },
      breakpoints: {
        993: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
    if (document.querySelector(".comparison__item")) {
      document.querySelectorAll(".comparison__item").forEach((n) => {
        const csrswiper = new Swiper(n.querySelector(".comparison__sublist_right"), {
          loop: false,
          slidesPerView: 1,
          speed: 300,
          spaceBetween: 10,
          allowTouchMove: true,
          slideToClickedSlide: false,
          touchRatio: 0.5,
          breakpoints: {
            993: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          },
        });
        csrslider.on('slideChangeTransitionStart', function() {
          csrswiper.slideTo(csrslider.activeIndex);
        });
        csrswiper.on('transitionStart', function(){
          csrslider.slideTo(csrswiper.activeIndex);
        });
      });
    }
  });
}
// end slider compare

// start other__slider
const productsliders = document.querySelector(".catalog_product__slider");
if(productsliders){
  var productthumbs = new Swiper(".catalog_product__thumbs", {
    loop: false,
    initialSlide: 0,
    slidesPerView: 5,
    spaceBetween: 10,
    direction: "vertical",
  });
  var productslider = new Swiper(".catalog_product__slider", {
    loop: false,
    initialSlide: 1,
    slidesPerView: 1,
    spaceBetween: 20,
    zoom: true,
    zoom: {
      maxRatio: 3,
      minRatio: 1
    },
    pagination: {
      el: '.catalog_product__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: ".catalog_product__slider_next",
      prevEl: ".catalog_product__slider_prev",
    },
    on: {
      transitionStart: function(){
        var videos = document.querySelectorAll('.catalog_product__slider_video');
        Array.prototype.forEach.call(videos, function(video){
          video.pause();
          video.currentTime = 0;
        });
      },
      transitionEnd: function(){
        var activeIndex = this.activeIndex;
        var activeSlide = document.getElementsByClassName('catalog_product__slider_item')[activeIndex];
        var activeSlideVideo = activeSlide.getElementsByTagName('video')[0];
        if (activeSlideVideo) {activeSlideVideo.play();}
      },
    },
    thumbs: {
      swiper: productthumbs,
    },
  });

  productslider.on('slideChangeTransitionStart', function() {
    productthumbs.slideTo(productslider.activeIndex);
  });
  
  productthumbs.on('transitionStart', function(){
    productslider.slideTo(productthumbs.activeIndex);
  });
}
// end other__slider

// start catalog_product__color_slider
if (document.querySelector(".catalog_product__color_slider")) {
  const slider = new Swiper(document.querySelector(".catalog_product__color_slider"), {
    loop: false,
    slidesPerView: 'auto',
    speed: 500,
    spaceBetween: 10,
    allowTouchMove: true,
    slideToClickedSlide: false,
    freeMode: true,
  });
}
// end catalog_product__color_slider

// start hover catalog_subsection
var hover = document.querySelectorAll(".catalog_subsection__images");
elemHover = false;
hover.forEach((hovers) => {
  hovers.addEventListener("mouseover", function (e) {
    if (elemHover) {return};
    var target = e.target.closest(".catalog_subsection__image");
    if (!target) {return};
    elemHover = target;
    var parent = target.closest(".catalog_subsection__images");
    var parentb = target.closest(".catalog_subsection__item_link");
    var old = parent.querySelector(".active");
    var oldb = parentb.querySelector(".catalog_subsection__image_block .active");
    if (old) {
      old.classList.remove("active");
      oldb.classList.remove("active")
    };
    target.classList.add("active");
    var indexb = target ? [...target.parentNode.children].indexOf(target) : -1;
    target.parentNode.parentNode.children[1].children[indexb].classList.add("active");
  });
  hovers.addEventListener("mouseout", function (e) {
    if (!elemHover) return;
    elemHover = null;
  });
  hovers.addEventListener("mouseleave", function () {
    let parent = this;
    let elems = parent.children;
    let els = parent.parentNode.children[1].children;

    for (let elem of elems) {elem.classList.remove("active")};
    for (let el of els) {el.classList.remove("active")};
    this.parentNode.children[1].children[0].classList.add("active");
    this.children[0].classList.add("active");
  });
});
// end hover catalog_subsection

// start select
const cstb = document.querySelector('.catalog_subsection__top_button');
const csl = document.querySelector('.catalog_subsection__list');
if (cstb) {
  cstb.addEventListener('click', function() {
    if (cstb.classList.contains("active")) {
      cstb.classList.remove("active");
      csl.classList.remove("active");
    } else {
      cstb.classList.add("active");
      csl.classList.add("active");
    }
  })
}
// end hover catalog_subsection

// start select
const btnincarts = document.querySelector('.btn__incart');
if(btnincarts) {
  const btnincart = document.getElementsByClassName("btn__incart");
  for (i = 0; i < btnincart.length; i++) {
    btnincart[i].onclick = function(e) {
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        this.children[0].innerText = "В корзину";
      } else {
        this.classList.add("active");
        this.children[0].innerText = "В корзине";
      }
    };
  }
  const btninfavorite = document.getElementsByClassName("catalog_subsection__favorite");
  for (i = 0; i < btninfavorite.length; i++) {
    btninfavorite[i].onclick = function(e) {
      if (this.classList.contains("active")) {
        this.classList.remove("active");
      } else {
        this.classList.add("active");
      }
    };
  }
  const btnincomparison = document.getElementsByClassName("catalog_subsection__comparison");
  for (i = 0; i < btnincomparison.length; i++) {
    btnincomparison[i].onclick = function(e) {
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        this.children[0].innerText = "В корзину";
      } else {
        this.classList.add("active");
        this.children[0].innerText = "В корзине";
      }
    };
  }
}
// end hover catalog_subsection

// start select
const SELECT = '[data-select]'
const SELECT_LIST = '[data-select-list]'
const SELECT_ARROW = '[data-select-arrow]'
const SELECT_ACTION = '[data-select-action]'
const SELECT_TITLE = '[data-select-title]'
const SELECT_INPUT = '[data-select-input]'
const SELECT_ITEM = 'selectItem'
const OPEN_SELECT = 'selectOpen'

class Select {
  static attach() {
    document.querySelectorAll(SELECT)
      .forEach(select => new Select().init(select))
  }

  init(select) {
    if (this.findSelect(select)) {
      this.applyListener()
    }
  }

  applyListener() {
    document.querySelector('*').addEventListener('click', e => {
      const element = this.select.contains(e.target) && e.target.closest(SELECT_ACTION)

      if (this.isCallSelectElement(element)) {
        if (this.isOpened()) {
          this.closeSelectList();
        } else {
          this.openSelectList()
        }
      }

      if (this.isCallSelectItemElement(element)) {
        this.addSelectedValue(element)
      }

      if (this.isCallSelectElement(element) !== true && this.selectOverlayIsClickedElement(element) !== true) {
        this.closeSelectList()
      }
    })
  }

  isCallSelectElement(element, target) {
    return element && OPEN_SELECT in element.dataset
  }

  isCallSelectItemElement(element, target) {
    return element && SELECT_ITEM in element.dataset
  }

  findSelect(select) {

    if (select) {
      this.select = select
      this.selectList = this.select.querySelector(SELECT_LIST)
      this.selectArrow = this.select.querySelector(SELECT_ARROW)
      this.selectTitle = this.select.querySelector(SELECT_TITLE)
      this.selectInput = this.select.querySelector(SELECT_INPUT)
      return true
    }
    return false
  }

  isOpened() {
    return this.selectList.classList.contains('form__select_list_opened')
  }

  openSelectList() {
    this.selectList.style.maxHeight = this.selectList.scrollHeight + "px";
    this.selectList.classList.add('form__select_list_opened')
    this.selectArrow.classList.add('form__select_arrow_rotate')
  }

  closeSelectList() {
    this.selectList.style.maxHeight = null;
    this.selectList.classList.remove('form__select_list_opened')
    this.selectArrow.classList.remove('form__select_arrow_rotate')
  }

  addSelectedValue(element) {
    this.selectTitle.innerHTML = element.innerHTML;
    this.selectInput.value = element.innerHTML;
    element.parentNode.parentNode.classList.add("success");
    element.parentNode.parentNode.classList.remove("error");
    this.selectInput.setAttribute('value', this.selectInput.value);
  }

  selectOverlayIsClickedElement(element, target) {
    return element && 'select' in element.dataset
  }
}

Select.attach()
// end select

// start menu catalog
const csff = document.querySelector('.catalog_subsection__filter_form');
if(csff) {
  const csfb = document.getElementsByClassName("catalog_subsection__filter_button");
  for (i = 0; i < csfb.length; i++) {
    csfb[i].onclick = function(e) {
      const csfbNext = this.nextElementSibling;
      if (csfbNext && csfbNext.classList.contains("active")) {
        this.classList.remove("active");
        csfbNext.classList.remove("active");
        csfbNext.style.maxHeight = null;
      } else if (csfbNext) {
        csfbNext.style.maxHeight = csfbNext.scrollHeight + "px";
        csfbNext.classList.add("active");
        this.classList.add("active");
      }
    };
  }
  const csfp = document.querySelector('.catalog_subsection__filter_popup');
  const csfpb = document.querySelector('.catalog_subsection__filter_popup_button');
  csfpb.addEventListener('click', function() {
    if (csfp.classList.contains("active")) {
      csfp.classList.remove("active");
      document.documentElement.classList.remove("noscroll");
    } else {
      csfp.classList.add("active");
      document.documentElement.classList.add("noscroll");
    }
  })
  const csfc = document.querySelector('.catalog_subsection__filter_close');
  csfc.addEventListener('click', function() {
    if (csfp.classList.contains("active")) {
      csfp.classList.remove("active");
      document.documentElement.classList.remove("noscroll");
    } else {
      csfp.classList.add("active");
      document.documentElement.classList.add("noscroll");
    }
  })
}
// end menu catalog

// start range slider
const rangeslider = document.getElementById("filterPrice");
const rangesfilterInputs = document.querySelectorAll(".catalog_subsection__filter_range_input");
const frclear = document.querySelector(".catalog_subsection__filter_clear");
const csffInputs = [...document.querySelectorAll('.catalog_subsection__filter_form .catalog_subsection__filter_input')];

if (rangeslider){
  const rangeMin = parseInt(rangeslider.dataset.min);
  const rangeMax = parseInt(rangeslider.dataset.max);
  const rangestep = parseInt(rangeslider.dataset.step);
  noUiSlider.create(rangeslider, {
      start: [rangeMin, rangeMax],
      connect: true,
      step: rangestep,
      range: {
          'min': Math.round(rangeMin),
          'max': Math.round(rangeMax)
      },
      format: {
        to: value => Math.round(value),
        from: value => Math.round(value),
      }
  });

  rangeslider.noUiSlider.on('update', (values, handle) => { 
    rangesfilterInputs[handle].value = values[handle]; 
  });
  
  rangesfilterInputs.forEach((input, indexInput) => { 
    input.addEventListener('change', () => {
      rangeslider.noUiSlider.setHandle(indexInput, input.value);
    })
  });
  
  const pricemin = document.getElementById('price_min');
  const pricemax = document.getElementById('price_max');
  const priceminl = pricemin.getAttribute('maxl').length;
  const pricemaxl = pricemax.getAttribute('maxl').length;
  pricemin.oninput = function(){this.value = this.value.substr(0, priceminl);}
  pricemax.oninput = function(){this.value = this.value.substr(0, pricemaxl);}

  frclear.addEventListener("click", function () {
    rangeslider.noUiSlider.reset();
    for(var i = 0;i < csffInputs.length; i++) {csffInputs[i].checked = false;};
  });
}
// end range slider

// start product
const productDesc = document.querySelector('.catalog_product__info_description_button');
const productDescBlock = document.querySelector('.catalog_product__info_description');
const productChar = document.querySelector('.catalog_product__info_characteristics_button');
const productCharBlock = document.querySelector('.catalog_product__info_characteristics');
const productDoc = document.querySelector('.catalog_product__info_documentation_button');
const productDocBlock = document.querySelector('.catalog_product__info_documentation');
const productChars = document.querySelector('.catalog_product__characteristic_button');
if (productChar && productCharBlock && productDesc && productDescBlock && productDoc && productDocBlock) {
  productChar.addEventListener('click', function() {
    if (!productChar.classList.contains("active")) {
      productChar.classList.add("active");
      productCharBlock.classList.add("active");
      productDesc.classList.remove("active");
      productDescBlock.classList.remove("active");
      productDoc.classList.remove("active");
      productDocBlock.classList.remove("active");
    }
  })

  productChars.addEventListener('click', function() {
    productChar.classList.add("active");
    productCharBlock.classList.add("active");
    productDesc.classList.remove("active");
    productDescBlock.classList.remove("active");
    productDoc.classList.remove("active");
    productDocBlock.classList.remove("active");
    productChar.scrollIntoView();
  })
  
  productDesc.addEventListener('click', function() {
    if (!productDesc.classList.contains("active")) {
      productDesc.classList.add("active");
      productDescBlock.classList.add("active");
      productChar.classList.remove("active");
      productCharBlock.classList.remove("active");
      productDoc.classList.remove("active");
      productDocBlock.classList.remove("active");
    }
  })
  
  productDoc.addEventListener('click', function() {
    if (!productDoc.classList.contains("active")) {
      productDoc.classList.add("active");
      productDocBlock.classList.add("active");
      productChar.classList.remove("active");
      productCharBlock.classList.remove("active");
      productDesc.classList.remove("active");
      productDescBlock.classList.remove("active");
    }
  })

  const cpcb = document.getElementsByClassName("catalog_product__color_button");
  const cpcbActive = document.querySelectorAll(".catalog_product__color_buttons .catalog_product__color_button");
  for (i = 0; i < cpcb.length; i++) {
    cpcb[i].onclick = function(e) {
      if (!this.classList.contains("active")) {
        cpcbActive.forEach((n) => n.classList.remove("active"));
        document.querySelector('.catalog_product__color span').innerHTML = this.getAttribute('color');
        this.classList.add("active");
      }
    };
  }

  const productincart = document.querySelector('.catalog_product__incart');
  productincart.addEventListener('click', function() {
    if (productincart.classList.contains("active")) {
      this.children[0].innerText = "В корзину";
      this.classList.remove("active");
    } else {
      this.children[0].innerText = "В корзине";
      this.classList.add("active");
    }
  })

  const productdesccomp = document.querySelector('.catalog_product__desktop_comparison');
  const productmobcomp = document.querySelector('.catalog_product__mobile_comparison');
  productdesccomp.addEventListener('click', function() {
    if (productdesccomp.classList.contains("active")) {
      this.children[1].innerText = "Сравнить";
      productmobcomp.children[1].innerText = "Сравнить";
      this.classList.remove("active");
      productmobcomp.classList.remove("active");
    } else {
      this.children[1].innerText = "В cравнении";
      productmobcomp.children[1].innerText = "В cравнении";
      this.classList.add("active");
      productmobcomp.classList.add("active");
    }
  })
  productmobcomp.addEventListener('click', function() {
    if (productmobcomp.classList.contains("active")) {
      this.children[1].innerText = "Сравнить";
      productdesccomp.children[1].innerText = "Сравнить";
      this.classList.remove("active");
      productdesccomp.classList.remove("active");
    } else {
      this.children[1].innerText = "В cравнении";
      productdesccomp.children[1].innerText = "В cравнении";
      this.classList.add("active");
      productdesccomp.classList.add("active");
    }
  })

  const productdescfav = document.querySelector('.catalog_product__desktop_favorite');
  const productmobfav = document.querySelector('.catalog_product__mobile_favorite');
  productdescfav.addEventListener('click', function() {
    if (productdescfav.classList.contains("active")) {
      this.children[1].innerText = "В избранное";
      productmobfav.children[1].innerText = "В избранное";
      this.classList.remove("active");
      productmobfav.classList.remove("active");
    } else {
      this.children[1].innerText = "В избранном";
      productmobfav.children[1].innerText = "В избранном";
      this.classList.add("active");
      productmobfav.classList.add("active");
    }
  })
  productmobfav.addEventListener('click', function() {
    if (productmobfav.classList.contains("active")) {
      this.children[1].innerText = "В избранное";
      productdescfav.children[1].innerText = "В избранное";
      this.classList.remove("active");
      productdescfav.classList.remove("active");
    } else {
      this.children[1].innerText = "В избранном";
      productdescfav.children[1].innerText = "В избранном";
      this.classList.add("active");
      productdescfav.classList.add("active");
    }
  })

  const csfb = document.getElementsByClassName("catalog_product__info_link");
  for (i = 0; i < csfb.length; i++) {
    csfb[i].onclick = function(e) {
      const csfbNext = this.nextElementSibling;
      if (csfbNext && csfbNext.classList.contains("active")) {
        this.classList.remove("active");
        csfbNext.classList.remove("active");
        csfbNext.style.maxHeight = null;
      } else if (csfbNext) {
        csfbNext.style.maxHeight = csfbNext.scrollHeight + "px";
        csfbNext.classList.add("active");
        this.classList.add("active");
      }
    };
  }
}
// end product

// start plus minus
var productinput = document.querySelector(".product__input input");
if (productinput) {
  document.querySelectorAll(".product__count .product__minus").forEach(function (element) {
    element.addEventListener("click", function (event) {
      let inputMax = this.parentElement.querySelector(".product__input input").getAttribute("max");
      event.preventDefault();
      let input = this.parentElement.querySelector(".product__input input");
      let count = parseInt(input.value) - 1;
      count = count < 1 ? 1 : count;
      if (inputMax == "0") count = 0;
      input.value = count;
    });
  });
  document.querySelectorAll(".product__count .product__plus").forEach(function (element) {
    element.addEventListener("click", function (event) {
      let inputMax = this.parentElement.querySelector(".product__input input").getAttribute("max");
      event.preventDefault();
      let input = this.parentElement.querySelector(".product__input input");
      let count = parseInt(input.value) + 1;
      count = count > parseInt(inputMax) ? parseInt(inputMax) : count;
      input.value = parseInt(count);
    });
  });
  document.querySelectorAll(".product__count .product__input input").forEach(function (element) {
    element.addEventListener("change", function (event) {
      let inputMax = this.parentElement.querySelector(".product__input input").getAttribute("max");
      event.preventDefault();
      if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, "");
      }
      if (this.value == "") {
        this.value = 1;
      }
      if (this.value > parseInt(inputMax)) {
        this.value = parseInt(inputMax);
      }
    });
  });
}
var productsinput = document.querySelector(".products__input input");
if (productsinput) {
  document.querySelectorAll(".products__count .products__minus").forEach(function (element) {
    element.addEventListener("click", function (event) {
      let inputMax = this.parentElement.querySelector(".products__input input").getAttribute("max");
      event.preventDefault();
      let input = this.parentElement.querySelector(".products__input input");
      let count = parseInt(input.value) - 1;
      count = count < 1 ? 1 : count;
      if (parseInt(inputMax) == 0) count = 0;
      input.value = count;
    });
  });
  document.querySelectorAll(".products__count .products__plus").forEach(function (element) {
    element.addEventListener("click", function (event) {
      let inputMax = this.parentElement.querySelector(".products__input input").getAttribute("max");
      event.preventDefault();
      let input = this.parentElement.querySelector(".products__input input");
      let count = parseInt(input.value) + 1;
      count = count > parseInt(inputMax) ? parseInt(inputMax) : count;
      input.value = parseInt(count);
    });
  });
  document.querySelectorAll(".products__count .products__input input").forEach(function (element) {
    element.addEventListener("change", function (event) {
      let inputMax = this.parentElement.querySelector(".products__input input").getAttribute("max");
      event.preventDefault();
      if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, "");
      }
      if (this.value == "") {
        this.value = 1;
      }
      if (this.value > parseInt(inputMax)) {
        this.value = parseInt(inputMax);
      }
    });
  });
}
// end plus minus

// start products__popup
const pp = document.querySelector(".products__popup");
if (pp) {
  const newoverlay = document.querySelector(".newoverlay");
  const ppc = document.querySelector(".products__popup_close");
  const ppb = document.getElementsByClassName("products__popup_button");
  for (i = 0; i < ppb.length; i++) {
    ppb[i].onclick = function(e) {
      if (pp.classList.contains("active")) {
        document.documentElement.classList.remove("noscroll");
        newoverlay.classList.remove("active");
        pp.classList.remove("active");
      } else {
        document.documentElement.classList.add("noscroll");
        newoverlay.classList.add("active");
        pp.classList.add("active");
      }
    };
  }
  newoverlay.addEventListener("click", function (event) {
    document.documentElement.classList.remove("noscroll");
    newoverlay.classList.remove("active");
    pp.classList.remove("active");
  });
  ppc.addEventListener("click", function (event) {
    document.documentElement.classList.remove("noscroll");
    newoverlay.classList.remove("active");
    pp.classList.remove("active");
  });
}
// end products__popup

// start comparison
const comparison = document.querySelector(".comparison__block");
if (comparison) {
  const cl = document.getElementsByClassName("comparison__link");
  for (i = 0; i < cl.length; i++) {
    cl[i].onclick = function(e) {
      const clNext = this.nextElementSibling;
      if (clNext && clNext.classList.contains("active")) {
        this.classList.remove("active");
        clNext.classList.remove("active");
        clNext.style.maxHeight = null;
      } else if (clNext) {
        let clNextHeight = [clNext.children[0].scrollHeight, clNext.children[1].scrollHeight, 0];
        let maxHeight = Math.max.apply(null, clNextHeight);
        clNext.style.maxHeight = maxHeight + "px";
        clNext.classList.add("active");
        this.classList.add("active");
      }
    };
  }
}
// end comparison

// start widget
const widget = document.querySelector(".widget");
if (widget) {
  const widgetclose = document.querySelector(".widget__close");
  widgetclose.addEventListener('click', function() {
    if (widget.classList.contains("active")) {
      widget.classList.remove("active");
    } else {
      widget.classList.add("active");
    }
  })
}
// end widget