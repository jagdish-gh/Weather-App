import axios from 'axios';
const HttpClient = async ({ apiRoute, q, method, headers, data }) => {
  const baseUrl = 'https://api.weatherapi.com/v1';
  const key = '7548aceaef0a4eb4ac135318230207';
  try {
    const res = await axios({
      url: `${baseUrl}${apiRoute}?key=${key}&${q}`,
      method,
      headers,
      data,
    });
    return res?.data;
  } catch (e) {
    throw new Error(e.response.data.error.message);
  }
};
export default HttpClient;
