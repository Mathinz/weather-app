import { Api } from "../../services/api";
import { notification } from "antd";

export const searchZipWeather = (zip) => async (dispatch) => {
  const api = new Api();
  try {
    const response = await api.test.searchZipWeather(zip);
    notification.success({
      message: "Weather Found",
    });
    dispatch({
      type: "WEATHER_SUCCESS",
      payload: response,
    });
  } catch (error) {
    if (error.response.data.error) {
      notification.error({
        message: error.response.data.error,
      });
    } else {
      notification.error({
        message: "Something went wrong",
      });
    }
  }
};
