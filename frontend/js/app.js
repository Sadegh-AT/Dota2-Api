const form = document.querySelector("form");
const input = document.querySelector("input");
const heroName = document.querySelector(".name");
const typeImage = document.querySelector(".type-image");
const image = document.querySelector(".image img");
const healthCount = document.querySelector(".health-count");
const manaCount = document.querySelector(".mana-count");

let myData;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(`http://localhost:2000/api/dota2-hero?name=${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      heroName.textContent = data.name;
      typeImage.src = getType(data.type);
      image.src = data.img;
      healthCount.textContent = data.health;
      manaCount.textContent = data.mana;
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
