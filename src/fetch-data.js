/* Initialised function with isle of wight postcode to reduce returned data form API*/
export async function fetchResturantData(postcode = "PO302HA") {
  try {
    const response = await fetch(`/api/${postcode}`);

    if (!response.ok){
      throw new Error(response.statusText)
    }
    const rawData = await response.json();
    const restaurants = rawData.restaurants;

    // Updated filter returns only restaurants, not shops that have groceries
    const filteredRestaurants = restaurants.filter(restaurant =>
      !restaurant.cuisines.some((cuisine) =>
        ["groceries", "electronics"].includes(cuisine.uniqueName))
    );

    return filteredRestaurants;

  } catch (error) {
    console.error(error, "Data not found")
    return null
  }
}

export async function constructResturantObj(postcode = "PO302HA") {
  const restaurants = await fetchResturantData(postcode);

  // add logoURL and call this API - is this possible within scope of task? 

  const data = [];

  for (let i = 0; i < restaurants.length; i++){
    data.push({
      "name": restaurants[i].name,
      "address": restaurants[i].address,
      "cuisines": restaurants[i].cuisines,
      "rating": restaurants[i].rating
    });
  }

  return data;
}
