import {constructResturantObj} from "./fetch-data.js";


async function generateRestaurantCards(postcode) {
  const restaurants = await constructResturantObj(postcode);
  const restaurantsCardContainer = document.getElementById("restaurants-card-container");

  restaurantsCardContainer.innerHTML = "";


  // Hardcoded to 10 results, as per challenge instruction.
  // Suggest this is for loop to include to i < resturants.length to include full list of results
  for (let i = 0; i < 10; i++){
    const restaurantCard = document.createElement("div");
    restaurantCard.id = "restaurant-card";

    const cardContent = document.createElement("div");
    cardContent.id = "card-content";

    let imgPlaceholder = document.createElement("img");
    imgPlaceholder.src = "https://www.svgrepo.com/show/399602/restaurant.svg";

    const restaurantNameDiv = document.createElement("p");
    const restaurantAddressDiv = document.createElement("p");
    const restaurantDetailsDiv = document.createElement("p");
    const restaurantRatingDiv = document.createElement("p");
    const restaurantCuisinesDiv = document.createElement("p");

    restaurantNameDiv.classList.add("name");
    restaurantAddressDiv.classList.add("address");
    restaurantDetailsDiv.classList.add("details");
    restaurantRatingDiv.classList.add("rating");
    restaurantCuisinesDiv.classList.add("cuisines");

    restaurantNameDiv.textContent = restaurants[i].name;
    restaurantAddressDiv.textContent = `${restaurants[i].address.city}, ${restaurants[i].address.firstLine}`;
    restaurantRatingDiv.textContent = `⭐️ ${restaurants[i].rating.starRating}`
    restaurantCuisinesDiv.textContent = `${restaurants[i].cuisines[0].name}, ${restaurants[i].cuisines[1].name} `


    cardContent.appendChild(restaurantNameDiv);
    cardContent.appendChild(restaurantAddressDiv);
    cardContent.appendChild(restaurantDetailsDiv)
    restaurantDetailsDiv.appendChild(restaurantRatingDiv);
    restaurantDetailsDiv.appendChild(restaurantCuisinesDiv);

    restaurantCard.appendChild(imgPlaceholder);
    restaurantCard.appendChild(cardContent);
    restaurantsCardContainer.appendChild(restaurantCard);

  }
}

export async function generatePostcodeResults() {
  const form = document.getElementById("postcode-form");
  const postcodeInput = document.getElementById("postcode-input");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let postcode = postcodeInput.value.trim();
    if (!postcode) {
      alert("Please enter a valid postcode");
      return;
    }

    const contentDiv = document.getElementById("restaurants-card-container");
    contentDiv.innerHTML = "";

    await generateRestaurantCards(postcode);

    postcodeInput.value = "";
  });
}
