"use strict";

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

document.getElementById("english").onclick = function toMongolian() {
  document.getElementById("english").classList.add("non-selected-language");
  document
    .getElementById("mongolian")
    .classList.remove("non-selected-language");
  document.getElementById("about-link").innerHTML = "Манай Баг";
  document.getElementById("services-link").innerHTML = "Үйлчилгээ";
  document.getElementById("portfolio-link").innerHTML = "Прожектууд";
  document.getElementById("contact-link").innerHTML = "Холбоо Барих";
  document.querySelector("#header h3").innerHTML =
    "Танай бизнесийн технологийн шийдлийг бид хариуцана";
  document.querySelector("#about h2").innerHTML = "Манай Баг";
  document.querySelector("#about h3").innerHTML =
    "Бид бол АНУ-ын Кэнтаки мужид байршилтай вэб хөгжүүлэлтийн баг. Манай борлуулалтын менежер болон график дизайнер маань Монголоос ажилладаг.";
  document.querySelector("#services h2").innerHTML = "Манай Үйлчилгээ";
  document.querySelector("#services h3").innerHTML =
    "Бид вэб технологийн салбарт голлон ажилладаг бөгөөд жижиг дунд бизнесийн энгийн вэб пайжээс эхлүүлээд том онлайн дэлгүүр хүртэл хийж өгж үйлчилдэг.";
  document.querySelector("#carousel-1 h5").innerHTML = "Вэб Пайж";
  document.querySelector("#carousel-1 p").innerHTML =
    "Мобайл дэлгэцэн дээр асуудалгүй гардаг загварлаг вэб пайжууд";
  document.querySelector("#carousel-2 h5").innerHTML = "Онлайн Дэлгүүр";
  document.querySelector("#carousel-2 p").innerHTML =
    "Танай бизнест зориулан хийгдэх орчин үеийн онлайн дэлгүүр";
  document.querySelector("#carousel-3 h5").innerHTML = "Вэб Апп";
  document.querySelector("#carousel-3 p").innerHTML =
    "Танай бизнесийн ажиллагааг автоматжуулах цогц үйлчилгээ";
  document.querySelector("#portfolio h2").innerHTML = "Прожектүүд";
  document.querySelector("#portfolio h3").innerHTML =
    "Манай багийн өмнө нь ажиллаж байсан прожектуудыг сонирхоод үзээрэй";
  document.querySelector("#contact h2").innerHTML = "Холбоо Барих";
  document.querySelector("#contact h3").innerHTML =
    "Бидэнтэй холбоо барин үнийн санал аваарай!";
  document.getElementById("full-name").setAttribute("placeholder", "Нэр");
  document.getElementById("email").setAttribute("placeholder", "Имайл");
  document
    .getElementById("jop-description")
    .setAttribute("placeholder", "Ажлын санал");
  document.querySelector("#social-media h2").innerHTML =
    "Сошиал дээр биднийг дагаарай";
};

document.getElementById("mongolian").onclick = function toEnglish() {
  document.getElementById("mongolian").classList.add("non-selected-language");
  document.getElementById("english").classList.remove("non-selected-language");
  document.getElementById("about-link").innerHTML = "About Us";
  document.getElementById("services-link").innerHTML = "Services";
  document.getElementById("portfolio-link").innerHTML = "Portfolio";
  document.getElementById("contact-link").innerHTML = "Contact Us";
  document.querySelector("#header h3").innerHTML =
    "No more headaches for tech solutions at your business";
  document.querySelector("#about h2").innerHTML = "Who we are";
  document.querySelector("#about h3").innerHTML =
    "We are a team of self-thaught developers based in Kentucky, USA. Our marketing manager and graphic designer are located in Ulaanbaatar, Mongolia.";
  document.querySelector("#services h2").innerHTML = "What we do";
  document.querySelector("#services h3").innerHTML =
    "We specialize in web design and web development. We build anything from a simple landing page to a complex eCommerce application with the latest technologies in the industry.";
  document.querySelector("#carousel-1 h5").innerHTML = "Landing Pages";
  document.querySelector("#carousel-1 p").innerHTML =
    "Mobile-responsive custom landing pages for your small business";
  document.querySelector("#carousel-2 h5").innerHTML = "eCommerce";
  document.querySelector("#carousel-2 p").innerHTML =
    "Boost your online business with an eCommerce app custom made for you";
  document.querySelector("#carousel-3 h5").innerHTML = "Web Apps";
  document.querySelector("#carousel-3 p").innerHTML =
    "Automate simple tasks at your business with our dynamic web apps";
  document.querySelector("#portfolio h2").innerHTML = "Our Portfolio";
  document.querySelector("#portfolio h3").innerHTML =
    "Check out the projects we have completed in the past";
  document.querySelector("#contact h2").innerHTML = "Contact Us";
  document.querySelector("#contact h3").innerHTML = "Get a free quote today!";
  document.getElementById("full-name").setAttribute("placeholder", "Full Name");
  document.getElementById("email").setAttribute("placeholder", "Email");
  document
    .getElementById("jop-description")
    .setAttribute("placeholder", "Job Description");
  document.querySelector("#social-media h2").innerHTML =
    "Follow us on social media";
};
