import { fetchResturantData, buildResturantObj} from "./fetch-data.js";
import "./styles.css";


const restaurants = await buildResturantObj()

restaurants.forEach(restaurant => console.log(restaurant))
