import { fetchResturantData, constructResturantObj} from "./fetch-data.js";
import "./styles.css";


const restaurants = await constructResturantObj()

restaurants.forEach(restaurant => console.log(restaurant))
