"use strict";

// ANIMATION

const tl1 = gsap.timeline({ defaults: { ease: "power1.out" } });

tl1.to(".hide .text", { y: "0%", duration: 1, stagger: 0.25 });
tl1.fromTo(".header", { y: "200%" }, { y: "0%", duration: 1.5 });
tl1.fromTo(
  ".navbar",
  { y: "25", opacity: 0 },
  { y: 0, opacity: 1, duration: 1 }
);
tl1.fromTo(
  ".brand",
  { y: "25", opacity: 0 },
  { y: 0, opacity: 1, duration: 1 },
  "-=1"
);
tl1.fromTo(
  ".header-text",
  { y: "25", opacity: 0 },
  { y: 0, opacity: 1, duration: 1 },
  "-=1"
);

new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const tl2 = gsap.timeline({
      defaults: { ease: "power1.out" },
      delay: 0.5,
    });
    tl2.fromTo(
      ".ani",
      { y: "25", opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3 }
    );
  },
});

// MODAL FORM

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// FORM SUBMISSION

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  //   var button = document.getElementById("my-form-button");
  var status = document.getElementById("form-status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    // button.style = "display: none ";
    status.classList.add("success");
    status.innerHTML = "Thank you!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Error!";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
    closeModal();
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

// INFO

document.querySelector(".temtsel-image").addEventListener("click", function () {
  const tl3 = gsap.timeline({ defaults: { ease: "power1.out" } });

  if (document.querySelector(".elbeg-image").style.display === "none") {
    tl3.to(".temtsel-info", {
      y: "25",
      opacity: 0,
      display: "none",
      duration: 1,
    });
    // document.querySelector(".temtsel-info").style.display = "none";
    tl3.to(".elbeg-image", {
      y: 0,
      opacity: 1,
      display: "block",
      duration: 1,
    });
    // document.querySelector(".elbeg-image").style.display = "block";
  } else {
    tl3.to(".elbeg-image", {
      y: "25",
      opacity: 0,
      display: "none",
      duration: 1,
    });
    // document.querySelector(".elbeg-image").style.display = "none";
    tl3.to(".temtsel-info", {
      y: 0,
      opacity: 1,
      display: "block",
      duration: 1,
    });
  }
});

document.querySelector(".elbeg-image").addEventListener("click", function () {
  const tl4 = gsap.timeline({ defaults: { ease: "power1.out" } });
  if (document.querySelector(".temtsel-image").style.display === "none") {
    tl4.to(".elbeg-info", {
      y: "25",
      opacity: 0,
      display: "none",
      duration: 1,
    });
    tl4.to(".temtsel-image", {
      y: 0,
      opacity: 1,
      display: "block",
      duration: 1,
    });
  } else {
    tl4.to(".temtsel-image", {
      y: "25",
      opacity: 0,
      display: "none",
      duration: 1,
    });
    tl4.to(".elbeg-info", {
      y: 0,
      opacity: 1,
      display: "block",
      duration: 1,
    });
  }
});

// LANGUAGE SWITCH

document.getElementById("english").onclick = function toMongolian() {
  document.getElementById("english").classList.add("non-selected-language");
  document
    .getElementById("mongolian")
    .classList.remove("non-selected-language");
  document.querySelector("h1").innerHTML = "ХААН ТЕК";
  document.querySelector(".nav__link--btn").innerHTML = "Холбоо Барих";
  document.querySelector(".header-text h3").innerHTML =
    "Бид таны хүсэлтийн дагуу вэбсайт хийнэ";
  document.querySelector(".about h2").innerHTML = "БИДНИЙ ТУХАЙ";
  document.querySelector(".service h2").innerHTML = "МАНАЙ ҮЙЛЧИЛГЭЭ";
  document.querySelector(".service h3:nth-of-type(1)").innerHTML =
    "Бид жижиг дунд бизнест зориулсан энгийн вэб пайжээс эхлүүлээд том онлайн дэлгүүр хүртэл хийн өгч үйлчилдэг.";
  document.querySelector(".service h3:nth-of-type(2)").innerHTML =
    "Бидэнтэй холбоо барин үнийн санал аваарай!";
  document.querySelector("form #full-name").setAttribute("placeholder", "Нэр");
  document.querySelector("form #email").setAttribute("placeholder", "Имайл");
  document
    .querySelector("form #job-description")
    .setAttribute("placeholder", "Мэссэж");
};

document.getElementById("mongolian").onclick = function toEnglish() {
  document.getElementById("mongolian").classList.add("non-selected-language");
  document.getElementById("english").classList.remove("non-selected-language");
  document.querySelector("h1").innerHTML = "KHAAN TECH";
  document.querySelector(".nav__link--btn").innerHTML = "Contact";
  document.querySelector(".header-text h3").innerHTML =
    "We design and develop custom websites";
  document.querySelector(".about h2").innerHTML = "ABOUS US";
  document.querySelector(".service h2").innerHTML = "SERVICES";
  document.querySelector(".service h3:nth-of-type(1)").innerHTML =
    "Our products range from a simple landing page custom made for small businesses to a complex eCommerce app.";
  document.querySelector(".service h3:nth-of-type(2)").innerHTML =
    "Contact us to get a free qoute!";
  document
    .querySelector("form #full-name")
    .setAttribute("placeholder", "Full Name");
  document.querySelector("form #email").setAttribute("placeholder", "Email");
  document
    .querySelector("form #job-description")
    .setAttribute("placeholder", "Message");
};
