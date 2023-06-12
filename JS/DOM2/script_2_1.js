// Загрузка информации о котах из файла cats.js
const catsData = cats;

// Получение контейнера для отображения информации о котах
const catsContainer = document.getElementById("catsContainer");

// Вывод информации о котах
catsData.forEach(cat => {
    const catElement = document.createElement("div");

    const nameElement = document.createElement("h2");
    nameElement.textContent = cat.name;
    catElement.appendChild(nameElement);

    const imageElement = document.createElement("img");
    imageElement.src = cat.img_link;
    catElement.appendChild(imageElement);

    const ageElement = document.createElement("p");
    ageElement.textContent = `Age: ${cat.age}`;
    catElement.appendChild(ageElement);

    const rateElement = document.createElement("p");
    rateElement.textContent = `Rate: ${cat.rate}`;
    catElement.appendChild(rateElement);

    const favouriteElement = document.createElement("p");
    favouriteElement.textContent = `Favourite: ${cat.favourite ? "Yes" : "No"}`;
    catElement.appendChild(favouriteElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = cat.description;
    catElement.appendChild(descriptionElement);

    catsContainer.appendChild(catElement);
});
