document.addEventListener("DOMContentLoaded", function () {
  const headerMenuAnimate = document.querySelector(".header__menu");

  headerMenuAnimate.classList.add("active");

  document.querySelector(".trip__text").classList.add("active");
  document.querySelector(".header__plain").classList.add("active");

  document.querySelector(".menu__icon").addEventListener("click", function () {
    document.querySelector(".navigations").classList.toggle("active");
  });

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;

    const tripItem = document.querySelectorAll(".static__tiem");
    const tripHeight = document.querySelector(".trip");
    const tripHeightOffset = tripHeight.clientHeight / 2;

    if (scrollY > tripHeightOffset) {
      tripItem.forEach(function (trips) {
        trips.classList.add("active");
      });
    }

    const assortement = document.querySelector(".assortement");
    const assortementOffset = assortement.clientHeight;
    const assortementOffsetHeight = assortementOffset / 2;
    const assortementTitle = document.querySelector(".assortement__title");
    const assortementSubTitle = document.querySelector(
      ".assortement__subtitle"
    );

    if (scrollY > assortementOffsetHeight) {
      assortementTitle.classList.add("active");
      assortementSubTitle.classList.add("active");
    }

    const assortementItem = document.querySelectorAll(".assortement__item");

    if (scrollY > assortementOffsetHeight + 400) {
      assortementItem.forEach(function (assortemenst) {
        assortemenst.classList.add("active");
      });
    }
  });
});

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  const placeSection = document.querySelector(".place");
  const placeItemOne = document.querySelector(".place__item1");
  const placeItemTwo = document.querySelector(".place__item2");
  const placeItemThree = document.querySelector(".place__item3");
  const placeSectionOffset = placeSection.clientHeight;

  if (scrollY > placeSectionOffset + 400) {
    placeItemOne.classList.add("active");
    placeItemTwo.classList.add("active");
    placeItemThree.classList.add("active");
  }
});

const review = document.querySelector(".review");

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  const reviewTop = review.getBoundingClientRect().top + 400;
  const reviewItem = document.querySelectorAll(".review__item__start");
  const reviewItemEnd = document.querySelectorAll(".review__item__end");
  console.log(reviewTop);
  console.log(window.innerHeight);

  if (reviewTop < window.innerHeight) {
    reviewItem.forEach(function (element) {
      element.classList.add("active");
    });

    reviewItemEnd.forEach(function (el) {
      el.classList.add("active");
    });

    document.querySelector(".review__center").classList.add("active");
  }
});

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  const traveulu = document.querySelector(".traveulu");
  const traveuluTop = traveulu.getBoundingClientRect().top;

  console.log(traveuluTop);
  if (traveuluTop + 300 < window.innerHeight) {
    document.querySelector(".travelulu__title").classList.add("active");
    document.querySelectorAll(".traveulu__item").forEach(function (trvEl) {
      trvEl.classList.add("active");
    });
  }
});
