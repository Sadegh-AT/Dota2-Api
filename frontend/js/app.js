const form = document.querySelector("form");
const input = document.querySelector("input");
const heroName = document.querySelector(".name");
const typeImage = document.querySelector(".type-image");
const image = document.querySelector(".image img");
const healthCount = document.querySelector(".health-count");
const manaCount = document.querySelector(".mana-count");
const container = document.querySelector(".container");
const btn = document.querySelector("button");
let myData;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addLoader();
  let inputValue = input.value;
  inputValue = capitalizeFirstLetter(inputValue);
  fetch(`http://localhost:2000/api/dota2-hero?name=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      if (data != "Null") {
        CreatElemet(data);
        const heroCardImg = document.querySelector(".hero-card .image img");
        const heroCard = document.querySelector(".hero-card");
        heroCardImg.addEventListener("load", function () {
          removeLoader();
          heroCard.classList.add("show");
        });
      } else {
        errorStyle(input);
        removeLoader();
      }
    });
});

function getType(type) {
  if (type === "agi") {
    return "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png";
  } else if (type === "str") {
    return "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png";
  } else if (type === "int") {
    return "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png";
  }
}

function CreatElemet(data) {
  const card = document.querySelector(".hero-card");
  if (card) {
    card.remove();
  }
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="hero-card">
            <div class="name">${data.name}</div>
            <div class="type">
                <img class="type-image" src="${getType(data.type)}" alt="${
      data.type
    }">
            </div>
            <div class="image">
                <img src="${data.img}" alt="${data.name}">
            </div>
            <div class="healthbar bar">
                <span class="health-count">${data.health}</span>
            </div>
            <div class="manabar bar">
                <span class="mana-count">${data.mana}</span>
            </div>
        </div>`
  );
}

input.addEventListener("input", function () {
  this.classList.remove("error");
});
function errorStyle(input) {
  input.classList.add("error");
}

function addLoader() {
  btn.disabled = true;
  btn.children[0].classList.remove("active");
  btn.children[1].classList.add("active");
}
function removeLoader() {
  btn.disabled = false;
  btn.children[0].classList.add("active");
  btn.children[1].classList.remove("active");
}

function capitalizeFirstLetter(str) {
  str = str.trim();
  if (str != "") {
    str = str.toLowerCase();
    return str[0].toUpperCase() + str.slice(1);
  } else {
    return "Null";
  }
}
console.log();
