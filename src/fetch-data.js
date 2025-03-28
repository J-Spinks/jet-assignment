export async function fetchResturantData(postcode) {
  try {
    const response = await fetch(`/api/${postcode}`);

    if (!response.ok){
      throw new Error(response.statusText)
    }
    const rawData = await response.json();
    const restaurants = rawData.restaurants;

    const cuisines = restaurants.map((restaurant) => restaurant.cuisines[0]);
    const filteredCuisines = cuisines.filter((cuisine) => cuisine.uniqueName !== "groceries");

    console.log(filteredCuisines)

  } catch (error) {
    console.error(error, "Data not found")
    return null
  }
}
