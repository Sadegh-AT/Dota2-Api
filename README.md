
# Node.js API for Dota 2 Heroes

This Node.js application is a simple API that returns information about Dota 2 heroes. It is built using the http and url modules in Node.js.



## Prerequisites

This application requires the following:

🔸Node.js installed on your system

🔸"heroes.json" file in the same directory as the application.
## Code Explanation

Let's take a closer look at the code in "index.js":

```javascript
const http = require("http");
const url = require("url");
const heroes = require("./heroes.json");
```

This block of code imports the necessary Node.js modules: "http" for creating a server, "url" for parsing URLs, and "./heroes.json" for accessing the hero data.


```javascript
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
```
This block of code creates the server and sets up the routing. It listens on port 2000 for incoming requests.

When a request is received, the URL is parsed using the "url.parse()" method. If the request method is "GET" and the path is "/api/dota2-hero", the server sends a response with the hero data. Otherwise, the server sends a 404 response.

```javascript
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
```

This block of code defines the "getHero()" function, which searches the hero data for a hero with the given name. If a hero is found, it creates a JavaScript object with some of the hero's data and returns it. If a hero is not found, it returns the string "Null".

## Conclusion 

This Node.js application is a simple API for accessing Dota 2 hero data. It uses the http and url modules in Node.js to create a server and handle incoming requests. The "heroes.json" file provides the data for the heroes, and the "getHero()" function searches the data for a hero with the given name.
