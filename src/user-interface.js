import {constructResturantObj} from "./fetch-data.js";

export async function getPostcode() {
  return new Promise((resolve) => {
    const submitBtn = document.getElementById("submit-btn");
    submitBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      let postcodeInput = document.getElementById("postcode-input");
      let postcodeInputValue = postcodeInput.value
      resolve(postcodeInputValue);

      postcodeInput.value = "";

      while (true) {
        const postcode = await getPostcode();
        console.log("Postcode entered:", postcode);
      }
    })
  })
}

export async function generateRestaurantCards(postcode) {
  const restaurants = await constructResturantObj(postcode);
  const contentDiv = document.getElementById("content");

  // hardcoded to 10 results, as per challenge instruction.
  // Suggest this is for loop to include to i < resturants.length to include full list of results
  for (let i = 0; i < 10; i++){
    const restaurantCard = document.createElement("div");
    restaurantCard.id = "restaurant-card";

    const cardContent = document.createElement("div");
    cardContent.id = "card-content";

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
    restaurantRatingDiv.textContent = `${restaurants[i].rating.starRating}⭐️`
    restaurantCuisinesDiv.textContent = `${restaurants[i].cuisines[0].name}, ${restaurants[i].cuisines[1].name} `


    cardContent.appendChild(restaurantNameDiv);
    cardContent.appendChild(restaurantAddressDiv);
    cardContent.appendChild(restaurantDetailsDiv)
    restaurantDetailsDiv.appendChild(restaurantRatingDiv);
    restaurantDetailsDiv.appendChild(restaurantCuisinesDiv);

    restaurantCard.appendChild(cardContent);
    contentDiv.appendChild(restaurantCard);

  }
}
