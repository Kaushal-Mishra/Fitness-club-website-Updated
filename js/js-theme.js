outdatedBrowserRework({
  browserSupport: {
    Chrome: 94,
    Edge: 94,
    Safari: 13,
    "Mobile Safari": 13,
    Firefox: 94,
    Opera: 80,
    Vivaldi: 1,
    Yandex: { major: 12, minor: 10 },
    IE: !1,
  },
  requireChromeOnAndroid: !1,
  isUnknownBrowserOK: !0,
  messages: {
    en: {
      outOfDate: "Your browser is out of date!",
      unsupported: "Your browser is not supported!",
      update: {
        web: "Please update your browser to view this website correctly.",
        googlePlay: "Please install Chrome from Google Play",
        appStore: "Please update iOS from the Settings App",
      },
      url: null,
      callToAction: "Update my browser now",
      close: "Close",
    },
  },
});
console.log(
  "%c🏌 coded by KKCoder ⛳",
  "font-family: sans-serif, font-size: 40px; color: #ff7300; background: #fff; padding: 5px 10px; margin: 5px 0;"
);
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".popup")) {
    document.querySelector(".popup").addEventListener("click", function (e) {
      if (
        !e.target.closest(".popup-inner") ||
        e.target.closest(".popup-inner .button a")
      ) {
        e.target.closest(".popup").classList.add("closed");
      }
    });
  }
  if (document.querySelector(".image-feed .swiper")) {
    const imageFeeds = document.querySelectorAll(".image-feed .swiper");
    Array.prototype.forEach.call(imageFeeds, (el) => {
      var imageFeedsSwiper = new Swiper(el, {
        speed: 5000,
        spaceBetween: 15,
        slidesPerView: 2.1,
        loop: !0,
        centeredSlides: !0,
        autoplay: { delay: 1 },
        breakpoints: {
          640: { slidesPerView: 3.01, spaceBetween: 30 },
          1024: { slidesPerView: 5.01, spaceBetween: 30 },
          1500: { slidesPerView: 6.01, spaceBetween: 30 },
        },
      });
      imageFeedsSwiper.on("afterInit", function () {
        scroll.update();
      });
    });
  }
});
