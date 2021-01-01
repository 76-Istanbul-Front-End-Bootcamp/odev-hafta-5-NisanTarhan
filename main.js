import data from "./data.js";

const generateCityEls = (city) => {
    return `<tr></TR><td>${city.name}</td><td>${city.population}</td><td>${city.landArea}</td>`
};

export const createTableElements = (data, tableId) => {
    const tbody = document.querySelector(`#${tableId} tbody`);
    const resultHtml = data.reduce((acc, city) => {
        return acc + generateCityEls(city);
    }, "");
    tbody.innerHTML = resultHtml;
};

export const fillSelectElement = (data) => {
    const selectElement = document.querySelector('#selectcity')
    data.forEach(city => {
        const optionElement = document.createElement("option");
        optionElement.text = city.name;
        optionElement.value = city.name;
        selectElement.appendChild(optionElement);
    })
}

createTableElements(data, "allcities");
createTableElements(data, "singlecity");
fillSelectElement(data);


