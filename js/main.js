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
// end slider catalog

// start hover catalog_subsection
var hover = document.querySelectorAll(".catalog_subsection__images");
elemHover = false;
hover.forEach((hovers) => {
  hovers.addEventListener("mouseover", function (e) {
    if (elemHover) return;
    var target = e.target.closest(".catalog_subsection__image");
    if (!target) return;
    elemHover = target;
    var parent = target.closest(".catalog_subsection__images");
    var parentb = target.closest(".catalog_subsection__item_link");
    var old = parent.querySelector(".active");
    var oldb = parentb.querySelector(".catalog_subsection__image_block .active");
    if (old) {
      old.classList.remove("active");
      oldb.classList.remove("active");
    }
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

    for (let elem of elems) {
      elem.classList.remove("active");
    }
    for (let el of els) {
      el.classList.remove("active");
    }
    this.parentNode.children[1].children[0].classList.add("active");
    this.children[0].classList.add("active");
  });
});
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