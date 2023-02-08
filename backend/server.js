const http = require("http");
const url = require("url");
const heroes = require("./heroes.json");
const server = http.createServer((req, res) => {
  const pathUrl = url.parse(req.url, true);
  console.log();

  if (req.method == "GET" && pathUrl.pathname === "/api/dota2-hero") {
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.end(JSON.stringify(getHero(pathUrl.query.name)));
  } else {
    res.end("404");
  }
});

server.listen(2000);

function getHero(name) {
  const hero = heroes.filter((hero) => hero.localized_name == name);
  if (hero[0]) {
    let myHero = {
      id: hero[0].id,
      name: hero[0].localized_name,
      type: hero[0].primary_attr,
      img: "https://api.opendota.com" + hero[0].img,
      health: hero[0].base_health,
      mana: hero[0].base_mana,
    };
    return myHero;
  } else {
    return "Null";
  }
}
