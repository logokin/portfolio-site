const bar = document.querySelector(".bar");
const nav = document.querySelector(".navbar");
const navbar = document.querySelector("#navbar");
const precious = document.querySelector(".social-links");
const navList = document.querySelector(".nav-list");

bar.onclick = () => {
  nav.classList.toggle("dropdown");
};

function add() {
  navbar.classList.add("navbar-fixed");
  nav.classList.add("navbar-remove");
  precious.classList.add("social-links-move");
  navList.classList.add("nav-list-add");
  bar.style.color = "black";
}

function remove() {
  navbar.classList.remove("navbar-fixed");
  nav.classList.remove("navbar-remove");
  bar.style.color = "white";
  navList.classList.remove("nav-list-add");
}

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    add();
  } else {
    remove();
  }
});

const contact = document.querySelector(".contact");
const image = document.querySelector(".contact-image");

image.addEventListener("mouseover", show);
function show() {
  // contact.classList.add("contact-show");
  if (contact.classList.contains("contact-show")) {
    contact.classList.remove("contact-show");
    image.classList.add("contact-image-back");
  } else {
    contact.classList.add("contact-show");
    image.classList.remove("contact-image-back");
  }
}

const button = document.querySelector(".button");
const invalid = document.querySelector(".warn");
const inputBox = document.querySelector(".input-box");
const handshake = document.querySelector(".fa-handshake");
const frown = document.querySelector(".fa-frown");
const correct = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

window.addEventListener("load", () => {
  handshake.style.display = "block";
});
setTimeout(form, 1000);

function form() {
  button.addEventListener("click", function () {
    if (inputBox.value.match(correct)) {
      invalid.textContent = "";
      inputBox.style.borderColor = "white";
      inputBox.value = "";
      handshake.style.display = "block";
      frown.style.display = "none";
    } else {
      invalid.textContent = "please provide a valid email address";
      inputBox.style.borderColor = "red";
      frown.style.display = "block";
      frown.style.color = "red";
      handshake.style.display = "none";
    }
  });
}
