const body = document.querySelector(".body");
const nav = document.querySelector(".nav");
const menuLink = document.querySelectorAll(".menu__link");
const navIcon = document.querySelector(".nav__icon");
const headerSubtitle = document.querySelector(".header__subtitle");
const headerBikeFix = document.querySelector(".header__bike-fix");
const activityEddyMerckx = document.querySelector(".Eddy-Merckx__activity");
const sliderSubtitleView = document.querySelector(".slider__subtitle-view");
const trainingSubtitle = document.querySelector(".training__subtitle");
const trainingLink = document.querySelectorAll(".training__link");
const footer = document.querySelector(".footer");
const sliderTitle = document.querySelector(".slider__title-view");
const sliderText = document.querySelector(".slider__subtitle-view");
const sliders = document.querySelectorAll(".slider__img");
const sliderVector = document.querySelector(".slider__vector");
const buttonSlider = document.querySelectorAll(".slider__button");
const buttonLeft = document.querySelector(".slider__button-left");
const buttonRight = document.querySelector(".slider__button-right");
const templateCards = document.getElementById("template-bike");
const initialCardsList = document.querySelector(".bike__cards");
const dropDownCardsList = document.querySelector(".bike__list-type");
const bikeHighway = document.getElementById("bike-highway");
const bikeGravel = document.getElementById("bike-gravel");
const bikeTT = document.getElementById("bike-TT");
const btnSwitchFooter = document.querySelector(".footer__switch");
const imgSun = document.querySelector(".footer__theme-light");
const imgDark = document.querySelector(".footer__theme-dark");
const footerAuthor = document.querySelector(".footer__author");
const footerForm = document.querySelector(".footer__form");
const footerFormText = document.querySelector(".footer__form-text");
const footerFormButton = document.querySelector(".footer__form-button");
const footerFormSent = document.querySelector(".footer__form-sent");
const bikeSliderLine = document.querySelector(".bike__slider-line");
const bikeSliderIndicators = document.querySelectorAll(
  ".bike__slider-indicator"
);
const popupNavMobile = document.querySelector(".popup");
const popupNav = document.querySelector(".popup__nav");
const popupLinks = document.querySelectorAll(".popup__link");
const popupThemeLight = document.querySelector(".popup__theme-light");
const popupThemeDark = document.querySelector(".popup__theme-dark");
const btnSwitchTheme = document.querySelector(".popup__switch");
const navCheckbox = document.querySelector(".nav__checkbox");

const cards = [
  {
    name: "Шоссе",
    text: "На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.",
  },
  {
    name: "Грэвел",
    text: "Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.",
  },
  {
    name: "ТТ",
    text: "ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.",
  },
];

let i = 0;
function chaningText() {
  i++;

  if (i === cards.length) {
    i = 0;
  }
  sliderTitle.textContent = cards[i].name;
  sliderText.textContent = cards[i].text;
}

let slider = [];
for (let i = 0; i < sliders.length; i++) {
  slider[i] = sliders[i].src;
  sliders[i].remove();
}

let step = 0;
let offset = 0;

function draw() {
  let img = document.createElement("img");
  img.src = slider[step];
  img.classList.add("slider__img");
  img.style.left = offset * 690 + "px";
  document.querySelector("#slider").appendChild(img);

  if (step + 1 == slider.length) {
    step = 0;
  } else {
    step++;
  }
  offset = 1;
}

function left() {
  let sliders2 = document.querySelectorAll(".slider__img");
  let offset2 = 0;
  for (let i = 0; i < sliders2.length; i++) {
    sliders2[i].style.left = offset2 * 820 - 820 + "px";
    offset2++;

    if (sliders2[i].src === "http://127.0.0.1:5506/src/images/highway.jpg") {
      sliderVector.src = "images/Vector 1.svg";
    } else if (sliders2[i].src === "http://127.0.0.1:5506/src/images/gravel.jpg") {
      sliderVector.src = "images/Vector 2.svg";
    } else {
      sliderVector.src = "images/Vector 3.svg";
    }
  }
  sliders2[0].remove();
  draw();
}

buttonRight.addEventListener("click", function () {
  left();
  chaningText();
});

draw();
draw();

const highwayCards = [
  {
    name: "Cervelo Caledonia-5",
    image: "images/Cervelo Caledonia-5.png",
    link: "https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN",
  },
  {
    name: "Cannondale Systemsix Himod",
    image: "images/Cannondale Systemsix Himod.png",
    link: "https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J",
  },
  {
    name: "Trek Domane SL-7",
    image: "images/Trek Domane SL-7.png",
    link: "https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF",
  },
];

const gravelCards = [
  {
    name: "Cervelo Aspero GRX 810",
    image: "images/Cervelo Aspero GRX 810.png",
    link: "https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE",
  },
  {
    name: "Specialized S-Works Diverge",
    image: "images/Specialized S-Works Diverge.png",
    link: "https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9",
  },
  {
    name: "Cannondale Topstone Lefty 3",
    image: "images/Cannondale Topstone Lefty 3.png",
    link: "https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8",
  },
];

const ttCards = [
  {
    name: "Specialized S-Works Shiv",
    image: "images/Specialized S-Works Shiv.png",
    link: "https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9",
  },
  {
    name: "BMC Timemachine 01 ONE",
    image: "images/BMC Timemachine 01 ONE.png",
    link: "https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835",
  },
  {
    name: "Cervelo P-Series",
    image: "images/Cervelo P-Series.png",
    link: "https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8",
  },
];

function createHighwayCard(item) {
  const initialCardTemplate = templateCards.content.querySelector(".card");
  const сardElement = initialCardTemplate.cloneNode(true);
  const img = сardElement.querySelector(".card__img");
  const link = сardElement.querySelector(".card__link");
  const caption = сardElement.querySelector(".card__name");
  img.src = item.image;
  img.alt = item.name;
  link.href = item.link;
  caption.textContent = item.name;
  return сardElement;
}

function activeCards(cards) {
  cards.classList.add("bike__menu-point_type_active");
}

highwayCards.forEach(function (item) {
  const cardElement = createHighwayCard(item);
  initialCardsList.prepend(cardElement);
});

function deleteItems() {
  let deleteElement = document.querySelectorAll(".card");
  for (let i = 0; i < deleteElement.length; i++) {
    deleteElement[i].remove();
  }
}

function removeActiveCards() {
  let removeActiveCards = document.querySelectorAll(".bike__menu-point");
  for (let i = 0; i < removeActiveCards.length; i++) {
    removeActiveCards[i].classList.remove("bike__menu-point_type_active");
  }
}

bikeHighway.addEventListener("click", function () {
  deleteItems();
  removeActiveCards();
  activeCards(bikeHighway);
  highwayCards.forEach(function (item) {
    const cardElement = createHighwayCard(item);
    initialCardsList.prepend(cardElement);
  });
});

dropDownCardsList.addEventListener("click", function () {
  if (dropDownCardsList.value === "highway") {
    deleteItems();
    removeActiveCards();
    activeCards(bikeHighway);
    highwayCards.forEach(function (item) {
      const cardElement = createHighwayCard(item);
      initialCardsList.prepend(cardElement);
    });
  }
});

bikeGravel.addEventListener("click", function () {
  deleteItems();
  removeActiveCards();
  activeCards(bikeGravel);
  gravelCards.forEach(function (item) {
    const cardElement = createHighwayCard(item);
    initialCardsList.prepend(cardElement);
  });
});

dropDownCardsList.addEventListener("click", function () {
  if (dropDownCardsList.value === "gravel") {
    deleteItems();
    removeActiveCards();
    activeCards(bikeGravel);
    gravelCards.forEach(function (item) {
      const cardElement = createHighwayCard(item);
      initialCardsList.prepend(cardElement);
    });
  }
});

bikeTT.addEventListener("click", function () {
  deleteItems();
  removeActiveCards();
  activeCards(bikeTT);
  bikeTT.style;
  ttCards.forEach(function (item) {
    const cardElement = createHighwayCard(item);
    initialCardsList.prepend(cardElement);
  });
});

dropDownCardsList.addEventListener("click", function () {
  if (dropDownCardsList.value === "TT") {
    deleteItems();
    removeActiveCards();
    activeCards(bikeTT);
    bikeTT.style;
    ttCards.forEach(function (item) {
      const cardElement = createHighwayCard(item);
      initialCardsList.prepend(cardElement);
    });
  }
});

function switchTheme() {
  body.classList.toggle("body_theme_dark");
  nav.classList.toggle("nav_theme_dark");
  headerSubtitle.classList.toggle("header__subtitle_theme_dark");
  activityEddyMerckx.classList.toggle("Eddy-Merckx__activity_theme_dark");
  sliderSubtitleView.classList.toggle("slider__subtitle-view_theme_dark");
  trainingSubtitle.classList.toggle("training__subtitle_theme_dark");
  footer.classList.toggle("footer_theme_dark");
  imgSun.classList.toggle("footer__theme-light_theme_dark");
  imgDark.classList.toggle("footer__theme-dark_theme_dark");
  footerAuthor.classList.toggle("footer__author_theme_dark");
  footerForm.classList.toggle("footer__form_theme_dark");
  buttonLeft.classList.toggle("slider__button-left_theme_dark");
  buttonRight.classList.toggle("slider__button-right_theme_dark");
  footerFormText.classList.toggle("footer__form-text_theme_dark");
  footerFormButton.classList.toggle("footer__form-button_theme_dark");
  navIcon.classList.toggle("nav__icon_theme_dark");
  popupNavMobile.classList.toggle("popup_theme_dark");
  popupThemeLight.classList.toggle("popup__theme-light_theme_dark");
  popupThemeDark.classList.toggle("popup__theme-dark_theme_dark");
  for (let i = 0; i < popupLinks.length; i++) {
    popupLinks[i].classList.toggle("popup__link_theme_dark");
  }
  for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].classList.toggle("menu__link_theme_dark");
  }
  for (let i = 0; i < trainingLink.length; i++) {
    trainingLink[i].classList.toggle("training__link_theme_dark");
  }
  for (let i = 0; i < buttonSlider.length; i++) {
    buttonSlider[i].classList.toggle("slider__button_theme_dark");
  }
  [...initialCardsList.children].forEach(function (item) {
    const cardName = item.querySelector(".card__name");
    cardName.classList.toggle("card__name_theme_dark");
  });
}

btnSwitchFooter.addEventListener("click", function () {
  switchTheme();
});

btnSwitchTheme.addEventListener("click", function () {
  switchTheme();
});

footerFormButton.addEventListener("click", function () {
  footerFormSent.classList.add("footer__form-sent_type_active");
});

window.addEventListener("scroll", () => {
  const scroll = window.pageYOffset;

  if (scroll > 0) {
    headerBikeFix.classList.add("moving");
    headerBikeFix.classList.remove("return");
  }
  if (scroll === 0) {
    headerBikeFix.classList.add("return");
    headerBikeFix.classList.remove("moving");
  }
});

footerFormButton.addEventListener("click", function () {
  footerFormSent.classList.add("footer__form-sent_type_active");
  footerFormButton.classList.remove("footer__form-button_type_active");
  footerFormText.placeholder = "";
  footerFormText.value = "";
});

footerFormText.addEventListener("click", function () {
  footerFormButton.classList.add("footer__form-button_type_active");
});

const thisSlide = (index) => {
  for (let dot of bikeSliderIndicators) {
    dot.classList.remove("bike__slider-indicator_type_active");
  }
  bikeSliderIndicators[index].classList.add(
    "bike__slider-indicator_type_active"
  );
};

bikeSliderIndicators.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    const width = bikeSliderLine.offsetWidth + 30;
    position = width * index;
    initialCardsList.style.right = position + "px";
    dotIndex = index;
    thisSlide(dotIndex);
  });
});

function openPopup(popup) {
  popup.classList.toggle("popup_opened");
}

navCheckbox.addEventListener("click", function () {
  openPopup(popupNavMobile);
  navIcon.classList.toggle("nav__line");
});

popupNav.addEventListener("click", function () {
  popupNavMobile.classList.remove("popup_opened");
  navIcon.classList.remove("nav__line");
});
