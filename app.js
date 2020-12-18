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
      { y: 0, opacity: 1, duration: 0.5 }
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

// LANGUAGE SWITCH
