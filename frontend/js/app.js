const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(`http://localhost:2000/api/dota2-hero?name=${input.value}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
});
