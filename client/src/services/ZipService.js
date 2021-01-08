import axios from "axios";
import { baseURL } from "../utilities/config";

class ZipServices {
  async searchZipWeather(zip) {
    const { data } = await axios.get(
      `${baseURL}/weather?zip=${zip}`
    );
    return data;
  }
}

export default ZipServices;
