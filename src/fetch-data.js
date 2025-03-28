export async function fetchResturantData(postcode) {
  try {
    const response = await fetch(`/api/${postcode}`);

    if (!response.ok){
      throw new Error(response.statusText)
    }
    const rawData = await response.json();
    const restaurants = rawData.restaurants;

    console.log(restaurants)

  } catch (error) {
    console.error(error, "Data not found")
    return null
  }
}
