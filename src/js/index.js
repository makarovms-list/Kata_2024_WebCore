import '../scss/reset.scss';
import '../scss/fonts.scss';
import '../scss/aside.scss';
import '../scss/header.scss';
import '../scss/main.scss';
import '../scss/brand.scss';
import '../scss/equipment.scss';
import '../scss/price.scss';
import '../scss/footer.scss';
import '../scss/callback.scss';

window.addEventListener('DOMContentLoaded', function(event) {

  const headerMobileBtn = document.querySelector('.mobile-menu__menu-btn--bg-icon');
  if (typeof(headerMobileBtn) != 'undefined' && headerMobileBtn != null) {
    headerMobileBtn.onclick = function () {

      var NodeNav = document.querySelector('aside').querySelector('.sidebar-body');
      if (!NodeNav) {
        let mainMenuElem = document.querySelector('.content-menu__inline-menu');
        let deepCopyNav = mainMenuElem.cloneNode(true);
        let referenceNode = document.querySelector('.sidebar-top');
        referenceNode.parentNode.insertBefore(deepCopyNav, referenceNode.nextSibling);

        let newNodeNav = document.querySelector('.left-sidebar__view').querySelector('.content-menu__inline-menu');
        newNodeNav.classList = '';
        newNodeNav.classList.add('sidebar-body');
        newNodeNav.querySelector('ul').classList = '';
        newNodeNav.querySelector('ul').classList.add('sidebar-body__menu-menu');
        let newNodeNavLiIndx = 1;
        newNodeNav.querySelector('ul').querySelectorAll('li').forEach(item => {
          item.classList = '';
          item.classList.add('sidebar-body__list-item');
          if (newNodeNavLiIndx == 1) {
            item.classList.add('sidebar-body__list-item--active');
          }
          newNodeNavLiIndx++;
        });
      }

      if (this.classList.contains('mobile-menu__menu-btn--bg-icon--opened')) {
        this.classList.remove('mobile-menu__menu-btn--bg-icon--opened');
        document.querySelector('.content-wrapper__stream-rtl').classList.remove('content-wrapper__stream-rtl--opened');
        document.querySelector('.left-sidebar__view').classList.remove('left-sidebar__view--with-sidebar');
      } else {
        this.classList.add('mobile-menu__menu-btn--bg-icon--opened');
        document.querySelector('.content-wrapper__stream-rtl').classList.add('content-wrapper__stream-rtl--opened');
        document.querySelector('.left-sidebar__view').classList.add('left-sidebar__view--with-sidebar');
        let document_body = document.querySelector('body');
        let body_hover_elem = document.createElement('div');
        body_hover_elem.classList.add('page-body__body-pos--with-modal-sidebar');
        document_body.appendChild(body_hover_elem);
        let body_hover_elem_dom = document.querySelector('.page-body__body-pos--with-modal-sidebar');
        body_hover_elem_dom.onclick = function() {
          document.querySelector('.mobile-menu__menu-btn--bg-icon').classList.remove('mobile-menu__menu-btn--bg-icon--opened');
          document.querySelector('.content-wrapper__stream-rtl').classList.remove('content-wrapper__stream-rtl--opened');
          document.querySelector('.left-sidebar__view').classList.remove('left-sidebar__view--with-sidebar');
          document.querySelector('body').removeChild(document.querySelector('.page-body__body-pos--with-modal-sidebar'));
          document.querySelector('.left-sidebar__view').removeChild(document.querySelector('.sidebar-body'));
          document.querySelector('.modal-feedback').classList.remove('modal__stream--view-opened');
          document.querySelector('.modal-callback').classList.remove('modal__stream--view-opened');
        }
      }
    };
  }

  const headerMobileBtnChat = document.querySelectorAll('.mobile-menu__btn-icon--chat');
  if (typeof(headerMobileBtnChat) != 'undefined' && headerMobileBtnChat != null) {
    for (var i = 0; i < headerMobileBtnChat.length; i++) {
      headerMobileBtnChat[i].addEventListener("click", function () {
        document.querySelector('.mobile-menu__menu-btn--bg-icon').classList.remove('mobile-menu__menu-btn--bg-icon--opened');
        document.querySelector('.content-wrapper__stream-rtl').classList.remove('content-wrapper__stream-rtl--opened');
        document.querySelector('.left-sidebar__view').classList.remove('left-sidebar__view--with-sidebar');
        if (document.body.contains(document.querySelector('.page-body__body-pos--with-modal-sidebar'))) {
          document.querySelector('body').removeChild(document.querySelector('.page-body__body-pos--with-modal-sidebar'));
        }

        document.querySelector('.modal-callback.modal__stream--view').classList.remove('modal__stream--view-opened');
        document.querySelector('.modal-feedback.modal__stream--view').classList.add('modal__stream--view-opened');
        let document_body = document.querySelector('body');
        let body_hover_elem = document.createElement('div');
        body_hover_elem.classList.add('page-body__body-pos--with-modal-sidebar');
        document_body.appendChild(body_hover_elem);
        let body_hover_elem_dom = document.querySelector('.page-body__body-pos--with-modal-sidebar');
        body_hover_elem_dom.onclick = function () {
          document.querySelector('.mobile-menu__menu-btn--bg-icon').classList.remove('mobile-menu__menu-btn--bg-icon--opened');
          document.querySelector('.content-wrapper__stream-rtl').classList.remove('content-wrapper__stream-rtl--opened');
          document.querySelector('.left-sidebar__view').classList.remove('left-sidebar__view--with-sidebar');
          document.querySelector('body').removeChild(document.querySelector('.page-body__body-pos--with-modal-sidebar'));
          document.querySelector('.modal-feedback.modal__stream--view').classList.remove('modal__stream--view-opened');
          document.querySelector('.modal-callback').classList.remove('modal__stream--view-opened');
        }
      });
    }
  }


  const headerMobileBtnCall = document.querySelectorAll('.mobile-menu__btn-icon--call');
  if (typeof(headerMobileBtnCall) != 'undefined' && headerMobileBtnCall != null) {
    for (var i = 0; i < headerMobileBtnCall.length; i++) {
      headerMobileBtnCall[i].addEventListener("click", function () {
        document.querySelector('.mobile-menu__menu-btn--bg-icon').classList.remove('mobile-menu__menu-btn--bg-icon--opened');
        document.querySelector('.content-wrapper__stream-rtl').classList.remove('content-wrapper__stream-rtl--opened');
        document.querySelector('.left-sidebar__view').classList.remove('left-sidebar__view--with-sidebar');
        if (document.body.contains(document.querySelector('.page-body__body-pos--with-modal-sidebar'))) {
          document.querySelector('body').removeChild(document.querySelector('.page-body__body-pos--with-modal-sidebar'));
        }


        document.querySelector('.modal-feedback.modal__stream--view').classList.remove('modal__stream--view-opened');
        document.querySelector('.modal-callback.modal__stream--view').classList.add('modal__stream--view-opened');
        let document_body = document.querySelector('body');
        let body_hover_elem = document.createElement('div');
        body_hover_elem.classList.add('page-body__body-pos--with-modal-sidebar');
        document_body.appendChild(body_hover_elem);
        let body_hover_elem_dom = document.querySelector('.page-body__body-pos--with-modal-sidebar');
        body_hover_elem_dom.onclick = function () {
          document.querySelector('.mobile-menu__menu-btn--bg-icon').classList.remove('mobile-menu__menu-btn--bg-icon--opened');
          document.querySelector('.content-wrapper__stream-rtl').classList.remove('content-wrapper__stream-rtl--opened');
          document.querySelector('.left-sidebar__view').classList.remove('left-sidebar__view--with-sidebar');
          document.querySelector('body').removeChild(document.querySelector('.page-body__body-pos--with-modal-sidebar'));
          document.querySelector('.modal-feedback').classList.remove('modal__stream--view-opened');
          document.querySelector('.modal-callback').classList.remove('modal__stream--view-opened');
        }
      });
    }
  }

  const modalCallbackBtnClose = document.querySelector('.modal-callback .modal__close-btn');
  if (typeof(modalCallbackBtnClose) != 'undefined' && modalCallbackBtnClose != null) {
    modalCallbackBtnClose.onclick = function () {
      let modalForm = findParentBySelector(this, '.modal-container');
      modalForm.classList.remove('modal__stream--view-opened');
      document.querySelector('body').removeChild(document.querySelector('.page-body__body-pos--with-modal-sidebar'));
      if (document.body.contains(document.querySelector('.page-body__body-pos--with-modal-sidebar'))) {
        document.querySelector('body').removeChild(document.querySelector('.page-body__body-pos--with-modal-sidebar'));
      }
    };
  }

  const modalFeedbackBtnClose = document.querySelector('.modal-feedback .modal__close-btn');
  if (typeof(modalFeedbackBtnClose) != 'undefined' && modalFeedbackBtnClose != null) {
    modalFeedbackBtnClose.onclick = function () {
      let modalForm = findParentBySelector(this, '.modal-container');
      modalForm.classList.remove('modal__stream--view-opened');
      if (document.body.contains(document.querySelector('.page-body__body-pos--with-modal-sidebar'))) {
        document.querySelector('body').removeChild(document.querySelector('.page-body__body-pos--with-modal-sidebar'));
      }
    };
  }

  const headerMobileBtnClose = document.querySelector('.sidebar-top__btn-icon--close');
  if (typeof(headerMobileBtnClose) != 'undefined' && headerMobileBtnClose != null) {
    headerMobileBtnClose.onclick = function () {
      document.querySelector('.mobile-menu__menu-btn--bg-icon').classList.remove('mobile-menu__menu-btn--bg-icon--opened');
      document.querySelector('.content-wrapper__stream-rtl').classList.remove('content-wrapper__stream-rtl--opened');
      document.querySelector('.left-sidebar__view').classList.remove('left-sidebar__view--with-sidebar');
      if (document.body.contains(document.querySelector('.page-body__body-pos--with-modal-sidebar'))) {
        document.querySelector('body').removeChild(document.querySelector('.page-body__body-pos--with-modal-sidebar'));
      }
    };
  }

  const brandSliderReadMore = document.querySelector('.brand-slider__more');
  if (typeof(brandSliderReadMore) != 'undefined' && brandSliderReadMore != null) {
    brandSliderReadMore.onclick = function () {
      let brandSlider = findParentBySelector(this, '.brand-slider');
      if (this.classList.contains('brand-slider__more--hide')) {
        this.classList.remove('brand-slider__more--hide');
        brandSlider.classList.remove('brand-slider__list--open');
        this.innerHTML = 'Показать все';
      } else {
        this.classList.add('brand-slider__more--hide');
        brandSlider.classList.add('brand-slider__list--open');
        this.innerHTML = 'Скрыть все';
      }
    };
  }

  const equipmentSliderReadMore = document.querySelector('.types-equipment__more');
  if (typeof(equipmentSliderReadMore) != 'undefined' && equipmentSliderReadMore != null) {
    equipmentSliderReadMore.onclick = function () {
      let equipmentSlider = findParentBySelector(this, '.types-equipment');
      if (this.classList.contains('types-equipment__more--hide')) {
        this.classList.remove('types-equipment__more--hide');
        equipmentSlider.classList.remove('types-equipment__list--open');
        this.innerHTML = 'Показать все';
      } else {
        this.classList.add('types-equipment__more--hide');
        equipmentSlider.classList.add('types-equipment__list--open');
        this.innerHTML = 'Скрыть все';
      }
    };
  }

  function findParentBySelector(elm, selector) {
    var all = document.querySelectorAll(selector);
    var cur = elm.parentNode;
    while(cur && !collectionHas(all, cur)) { //keep going up until you find a match
      cur = cur.parentNode; //go up
    }
    return cur; //will return null if not found
  }

  function collectionHas(a, b) { //helper function (see below)
    for(var i = 0, len = a.length; i < len; i ++) {
      if(a[i] == b) return true;
    }
    return false;
  }


  let documentWidth = document.body.clientWidth;
  if (documentWidth > 1024) {
    let mainMenuElem = document.querySelector('.content-menu__inline-menu');
    let deepCopyNav = mainMenuElem.cloneNode(true);
    let referenceNode = document.querySelector('.sidebar-top');
    referenceNode.parentNode.insertBefore(deepCopyNav, referenceNode.nextSibling);

    let newNodeNav = document.querySelector('.left-sidebar__view').querySelector('.content-menu__inline-menu');
    newNodeNav.classList = '';
    newNodeNav.classList.add('sidebar-body');
    newNodeNav.querySelector('ul').classList = '';
    newNodeNav.querySelector('ul').classList.add('sidebar-body__menu-menu');
    let newNodeNavLiIndx = 1;
    newNodeNav.querySelector('ul').querySelectorAll('li').forEach(item => {
      item.classList = '';
      item.classList.add('sidebar-body__list-item');
      if (newNodeNavLiIndx == 1) {
        item.classList.add('sidebar-body__list-item--active');
      }
      newNodeNavLiIndx++;
    });
  }

  if (documentWidth < 580) {
    var brandSlider =  document.querySelector('.brand-slider');
    if (typeof(brandSlider) != 'undefined' && brandSlider != null) {
      let swiperBrandSlider = new Swiper('.brand-slider', {
        speed: 600,
        centeredSlides: true,
        spaceBetween: 16,
        touchRatio: 1,
        loop: true,
        wrapperClass: 'brand-slider__wrapper',
        slideClass: 'brand-slider__item',
        slidesPerView: 1.2,
        autoplay: {
          delay: 6000,
        },
        breakpoints: {
          1500: {
            slidesPerView: 8,
            spaceBetween: 32,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 32,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      });
    }

    var equipmentSlider =  document.querySelector('.types-equipment');
    if (typeof(equipmentSlider) != 'undefined' && equipmentSlider != null) {
      let swiperEquipmentSlider = new Swiper('.types-equipment', {
        speed: 600,
        centeredSlides: true,
        spaceBetween: 16,
        touchRatio: 1,
        loop: true,
        wrapperClass: 'types-equipment__wrapper',
        slideClass: 'types-equipment__item',
        slidesPerView: 1,
        autoplay: {
          delay: 6000,
        },
        breakpoints: {
          1500: {
            slidesPerView: 8,
            spaceBetween: 32,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 32,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      });
    }

    var priceSlider =  document.querySelector('.services-price');
    if (typeof(priceSlider) != 'undefined' && priceSlider != null) {
      let swiperPriceSlider = new Swiper('.services-price__view--mobile', {
        speed: 600,
        centeredSlides: true,
        spaceBetween: 16,
        touchRatio: 1,
        loop: true,
        wrapperClass: 'services-price__wrapper--mobile',
        slideClass: 'services-price__wrapper-mobile-item',
        slidesPerView: 1,
        autoplay: {
          delay: 6000,
        },
        breakpoints: {
          1500: {
            slidesPerView: 8,
            spaceBetween: 32,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 32,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      });
    }
  }
}, true);



window.addEventListener('resize', function(event) {
  let documentWidth = document.body.clientWidth;
  if (documentWidth < 580) {
    var brandSlider =  document.querySelector('.brand-slider');
    if (typeof(brandSlider) != 'undefined' && brandSlider != null) {
      let swiperBrandSlider = new Swiper('.brand-slider', {
        speed: 600,
        centeredSlides: true,
        spaceBetween: 16,
        touchRatio: 1,
        loop: true,
        wrapperClass: 'brand-slider__wrapper',
        slideClass: 'brand-slider__item',
        slidesPerView: 1.2,
        autoplay: {
          delay: 6000,
        },
        breakpoints: {
          1500: {
            slidesPerView: 8,
            spaceBetween: 32,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 32,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      });
    }

    var priceSlider =  document.querySelector('.services-price');
    if (typeof(priceSlider) != 'undefined' && priceSlider != null) {
      let swiperPriceSlider = new Swiper('.services-price__view--mobile', {
        speed: 600,
        centeredSlides: true,
        spaceBetween: 16,
        touchRatio: 1,
        loop: true,
        wrapperClass: 'services-price__wrapper--mobile',
        slideClass: 'services-price__wrapper-mobile-item',
        slidesPerView: 1,
        autoplay: {
          delay: 6000,
        },
        breakpoints: {
          1500: {
            slidesPerView: 8,
            spaceBetween: 32,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 32,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      });
    }

    var equipmentSlider =  document.querySelector('.types-equipment');
    if (typeof(equipmentSlider) != 'undefined' && equipmentSlider != null) {
      let swiperEquipmentSlider = new Swiper('.types-equipment', {
        speed: 600,
        centeredSlides: true,
        spaceBetween: 16,
        touchRatio: 1,
        loop: true,
        wrapperClass: 'types-equipment__wrapper',
        slideClass: 'types-equipment__item',
        slidesPerView: 1,
        autoplay: {
          delay: 6000,
        },
        breakpoints: {
          1500: {
            slidesPerView: 8,
            spaceBetween: 32,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 32,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      });
    }
  }
}, true);
