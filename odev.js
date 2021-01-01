import data from "./data.js"
import { createTableElements } from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
  createTableElements(data, "allcities");
  createTableElements([], "singlecity")
});

/* START CODING HERE */

document.querySelector('#populationBigger').addEventListener("click", () => {
  const biggerThan500Thousand = data.filter(city => city.population > 500_000);
  createTableElements(biggerThan500Thousand, "allcities");
})

document.querySelector('#landAreaLess').addEventListener("click", () => {
  const lessThanThousand = data.filter(city => city.landArea < 1000);
  createTableElements(lessThanThousand, "allcities");
})

document.querySelector('#isPopulationLess').addEventListener("click", () => {
  const isPopulationLess = data.some(city => city.population < 100_000);
  getAnswer(isPopulationLess);
})

document.querySelector('#isLandBigger').addEventListener("click", () => {
  const isLandBigger = data.every(city => city.population > 100);
  getAnswer(isLandBigger);
})

document.querySelector('#selectcity').addEventListener("change", (e) => {
  let selectedCityName = e.target.value;
  const selectedCity = data.find(city => city.name === selectedCityName);
  createTableElements([selectedCity], "singlecity");
});

function getAnswer(status) {
  const answer = status ? "YES" : "NO";
  alert(answer);
}