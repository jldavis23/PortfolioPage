import { planets } from '/assets/planets.js'
import { films } from '/assets/films.js'

// PLANET 
let swapiButton = document.querySelector("#swapi-button");
let swapiList = document.querySelector("#swapi-list");

let removePlanet = () => {
    let removeDiv = document.getElementById("swapi-list");
    while (removeDiv.firstChild) {
        removeDiv.removeChild(removeDiv.firstChild);
    }
}

let showPlanet = () => {
    let planetArray = Object.entries(planets[Math.floor((Math.random() * planets.length) + 1)]).slice(0, 9);
    planetArray.forEach((attribute) => {
        let makeDiv = document.createElement('div');
        swapiList.appendChild(makeDiv);
        let planetKey = document.createElement('li');
        planetKey.textContent = `${attribute[0].charAt(0).toUpperCase() + attribute[0].slice(1)}:`;
        makeDiv.appendChild(planetKey);
        let planetValue = document.createElement('li');
        planetValue.textContent = attribute[1];
        makeDiv.appendChild(planetValue);
    })
}

swapiButton.addEventListener("click", removePlanet)
swapiButton.addEventListener("click", showPlanet);

// FILMS
let displayedFilm = films[Math.floor((Math.random() * films.length))];

let swapiTitle = document.querySelector('#swapi-title');
swapiTitle.textContent = displayedFilm.title.toUpperCase();

let openingCrawl = document.querySelector('#opening-crawl');
openingCrawl.textContent = displayedFilm.opening_crawl;